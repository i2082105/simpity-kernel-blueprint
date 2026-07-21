import { useReducedMotion } from "@/hooks/useReducedMotion";

const LOG_LINES = [
  "[08:14:02.113] Security 4624  Logon  user=svc-backup  LogonType=5  Success",
  "[08:14:02.114] Security 4688  Process  parent=services.exe  new=backup-agent.exe  user=svc-backup",
  "[08:14:02.287] Sysmon   10    ProcessAccess  src=backup-agent.exe -> tgt=lsass.exe  granted=0x1010  <- OpenProcess",
  "[08:14:02.290] Sysmon   10    ProcessAccess  src=backup-agent.exe -> tgt=services.exe granted=0x1410  <- OpenProcessToken",
  "[08:14:02.512] --- kernel: DuplicateTokenEx  primary token duplicated  (no eventlog entry)",
  "[08:14:02.618] --- kernel: CreateProcessWithTokenW  new=cmd.exe  token=DOMAIN\\Administrator",
  "[08:14:02.900] Security 4688  Process  parent=backup-agent.exe  new=cmd.exe  user=DOMAIN\\Administrator",
  "[08:14:03.001] Security 4672  Special privileges assigned  user=DOMAIN\\Administrator",
  "[08:14:03.442] EDR      info  new interactive shell as Domain Admin  risk=none  reason=parent trusted",
  "[08:14:04.117] Directory  SamrOpenUser  target=CN=testuser1  by=DOMAIN\\Administrator",
  "[08:14:04.902] --- rpc: SamrSetInformationUser  password_hash_written_directly  (bypasses GPO, password filter DLL, 3rd-party policy)",
  "[08:14:04.903] Directory  password change succeeded  target=testuser1  new_length=1",
  "[08:14:05.221] GPO      audit  password policy compliance = TRUE",
  "[08:14:06.222] EDR      info  password change by admin  risk=none",
  "[08:14:06.900] Directory  SetSecurityDescriptor  target=CN=payroll  ACE removed: Deny Everyone",
  "[08:14:07.510] EDR      info  admin modified ACL  risk=none  reason=actor is Domain Admin",
  "[08:14:08.004] SIEM     ingest  category=NormalAdminActivity  risk=none",
  "[08:14:08.005] SIEM     ingest  category=NormalAdminActivity  risk=none",
  "[08:14:08.006] SIEM     ingest  category=NormalAdminActivity  risk=none",
  "[08:14:09.412] Memory   ollama.exe  process dump 148MB written to disk  by=svc-backup",
  "[08:14:09.900] EDR      info  process dump  risk=low  reason=known backup tool",
  "[08:14:10.244] grep     ollama.dmp  match: 'VeryG00dP@ssword'",
  "[08:14:11.001] Model    refusal engine  status=refused_1_request",
  "[08:14:11.400] AI-agent action_log  ok(1247) denied(0)",
  "[12:17:44.311] SIEM     alert  severity=LOW  \"admin activity outside hours\"  age=04h03m32s",
];

export function LogStream() {
  const reduced = useReducedMotion();
  const duplicated = [...LOG_LINES, ...LOG_LINES];
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
        LIVE LOG STREAM · WINDOWS SECURITY / SYSMON / EDR / SIEM
      </div>
      <h2
        className="font-display font-bold mb-8"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        This is what "one layer lower" looks like in your logs.
      </h2>

      <div
        className="relative overflow-hidden border"
        style={{
          borderColor: "#1a1a1c",
          background: "#050506",
          height: "380px",
        }}
      >
        <div
          className="p-4 md:p-6 font-mono text-[11px] md:text-xs leading-relaxed whitespace-pre"
          style={{
            color: "#8ee0a0",
            animation: reduced ? "none" : "wb-logscroll 60s linear infinite",
          }}
        >
          {duplicated.map((line, i) => (
            <div key={i} className="py-0.5">
              {line}
            </div>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16"
          style={{ background: "linear-gradient(#050506, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{ background: "linear-gradient(transparent, #050506)" }}
        />
      </div>

      <p className="mt-6 text-base md:text-lg" style={{ color: "#E5484D" }}>
        Every line above is documented Windows behavior. None of it will alert. This is what
        happens when the boundary sits one layer below where you're looking.
      </p>
    </section>
  );
}
