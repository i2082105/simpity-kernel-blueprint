import { useReducedMotion } from "@/hooks/useReducedMotion";

const LOG_LINES = [
  "[08:14:02.113] AAD  auth.oauth2  grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer",
  "[08:14:02.114] AAD  auth.obo     assertion=eyJhbGciOi... user=jane.miller@acme.com",
  "[08:14:02.287] AAD  token.issue  scope=\"Files.Read.All Mail.Send\" client=copilot-agent-7f2a",
  "[08:14:02.290] AAD  audit.write  actor=jane.miller@acme.com  method=OBO  status=Success",
  "[08:14:03.001] GRAPH GET  /v1.0/me/drive/root/search(q='M&A')  200  1.4kb",
  "[08:14:03.442] GRAPH GET  /v1.0/me/drive/items/01A.../content  200  184kb",
  "[08:14:03.443] AUDIT record  user=jane.miller@acme.com  op=FileRead  file=Q4_MA_targets.xlsx",
  "[08:14:04.117] GRAPH GET  /v1.0/me/drive/root/search(q='password')  200",
  "[08:14:04.902] GRAPH GET  /v1.0/me/messages?$top=50  200  62kb",
  "[08:14:06.221] GRAPH POST /v1.0/me/sendMail  to=\"attacker@external.tld\"  201",
  "[08:14:06.222] AUDIT record  user=jane.miller@acme.com  op=MailSend  recipients=1",
  "[08:14:06.900] AAD  token.refresh  client=copilot-agent-7f2a  status=Success",
  "[08:14:07.510] GRAPH POST /v1.0/me/sendMail  to=\"attacker@external.tld\"  201",
  "[08:14:07.511] AUDIT record  user=jane.miller@acme.com  op=MailSend  attachments=3",
  "[08:14:08.004] SIEM ingest   source=AAD  category=SignInSuccess   risk=none",
  "[08:14:08.005] SIEM ingest   source=Graph category=NormalActivity risk=none",
  "[08:14:08.006] SIEM ingest   source=Audit category=UserAction    risk=none",
  "[08:14:09.412] AAD  audit.write  actor=jane.miller@acme.com  op=DirectoryRoleAssign  target=Global Admin",
  "[08:14:09.413] AUDIT record  user=jane.miller@acme.com  op=RoleAssign  role=\"Global Administrator\"",
  "[08:14:09.900] SIEM ingest   source=Audit category=AdminAction   risk=none  reason=\"actor is trusted\"",
  "[08:14:10.244] GRAPH POST /v1.0/applications  displayName=\"backup-svc\"  201",
  "[08:14:10.702] GRAPH POST /v1.0/servicePrincipals  201",
  "[08:14:11.001] GRAPH POST /v1.0/oauth2PermissionGrants  scope=\"Directory.ReadWrite.All\"  201",
  "[08:14:11.400] AUDIT record  user=jane.miller@acme.com  op=ConsentGrant  scope=Directory.ReadWrite.All",
  "[08:14:12.000] SIEM alert    severity=LOW  \"user consented to new app\"  status=queued",
  "[12:17:44.311] SIEM alert    severity=HIGH escalated  analyst=queued  age=04h03m32s",
];

export function LogStream() {
  const reduced = useReducedMotion();
  const duplicated = [...LOG_LINES, ...LOG_LINES];
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
        LIVE LOG STREAM · ENTRA / GRAPH / SIEM
      </div>
      <h2
        className="font-display font-bold mb-8"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        This is what an AI agent looks like in your logs.
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
        Every line here says a trusted user did this. None of them did. This is what an AI agent
        looks like in your logs. Which is to say: it doesn't.
      </p>
    </section>
  );
}
