const INCIDENTS = [
  {
    date: "2025 · JUN",
    title: "EchoLeak — CVE-2025-32711",
    body: "Zero-click Microsoft 365 Copilot exfiltration. CVSS 9.3. A single crafted email the victim never had to open.",
  },
  {
    date: "2026 · FEB–MAR",
    title: "LiteLLM supply chain",
    body: "An autonomous bot, \"hackerbot-claw\", pushed a backdoor to PyPI. ~47,000 downloads in a 3-hour window. No human directed it. You probably ran it.",
  },
  {
    date: "2025 · OCT",
    title: "FortiBleed",
    body: "437,000 firewalls compromised. 105M+ credentials harvested. The end target: your Active Directory.",
  },
  {
    date: "2026 · Q1",
    title: "Shadow AI",
    body: "20% of breached orgs were hit through unsanctioned AI tools. +$670,000 per breach.",
  },
];

export function IncidentsWall() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <h2
        className="font-display font-bold mb-12"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        This is not hypothetical.
        <br />
        <span style={{ color: "#E5484D" }}>It already happened.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {INCIDENTS.map((inc) => (
          <article
            key={inc.title}
            className="p-6 md:p-8 border"
            style={{ borderColor: "#1a1a1c", background: "#101012" }}
          >
            <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
              {inc.date}
            </div>
            <h3 className="font-display font-bold text-xl md:text-2xl mb-3" style={{ color: "#EDEDEC" }}>
              {inc.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#EDEDEC" }}>
              {inc.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
