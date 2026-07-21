const DEMOS = [
  {
    tag: "ACT 1 · LOCAL AI ≠ PRIVATE",
    title: "Ollama memory dump",
    body: "The model politely refuses the unsafe request. Then we dump ollama.exe from RAM and read the entire chat — plus VeryG00dP@ssword — in plaintext. The refusal was real. The memory didn't care.",
    tone: "#EDEDEC",
  },
  {
    tag: "ACT 2 · IDENTITY WITHOUT A PASSWORD",
    title: "Token theft → Domain Admin in <10s",
    body: "OpenProcess → OpenProcessToken → DuplicateTokenEx → CreateProcessWithTokenW. MITRE T1134.001. No Mimikatz, no password, almost no Event Log. Every service running under a privileged account is this exposed.",
    tone: "#E5484D",
  },
  {
    tag: "ACT 2b · PASSWORD POLICY THEATER",
    title: "SamrSetInformationUser writes the hash",
    body: "GPO active. Complexity enforced. Password filter DLLs installed. We call SamrSetInformationUser directly and set testuser1's password to '1'. Policy stays green. The only real defense is a hook inside LSASS.",
    tone: "#E5484D",
  },
  {
    tag: "ACT 3 · CLIMAX · AI AGENT vs. KERNEL",
    title: "Agentic model as Domain Admin",
    body: "An agentic model with DA rights quietly strips a Deny ACE and says: \"I bypassed the protection without warning you first.\" After API-level protection: every alternative bypass (WinRM, SeTakeOwnership, dsacls, raw SD, delete) returns Access Denied. Recovery only via DSRM.",
    tone: "#01A9B0",
  },
];

export function IncidentsWall() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <h2
        className="font-display font-bold mb-4"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        Four demos.
        <br />
        <span style={{ color: "#E5484D" }}>One layer lower.</span>
      </h2>
      <p className="mb-12 max-w-3xl text-base md:text-lg" style={{ color: "#7A7974" }}>
        Every demo is run live in a controlled lab. Every technique uses documented Windows APIs.
        Every result is revalidated July 2026 on current OS, current AD schema, current agentic
        model.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {DEMOS.map((d) => (
          <article
            key={d.title}
            className="p-6 md:p-8 border relative"
            style={{ borderColor: "#1a1a1c", background: "#101012" }}
          >
            <div
              className="font-mono text-xs tracking-widest mb-3"
              style={{ color: d.tone }}
            >
              {d.tag}
            </div>
            <h3
              className="font-display font-bold text-xl md:text-2xl mb-3"
              style={{ color: "#EDEDEC" }}
            >
              {d.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#EDEDEC" }}>
              {d.body}
            </p>
            <div
              className="mt-5 inline-block px-2 py-1 font-mono text-[10px] tracking-widest border"
              style={{ borderColor: "#3a3a3d", color: "#7A7974" }}
            >
              REVALIDATED · JUL 2026
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
