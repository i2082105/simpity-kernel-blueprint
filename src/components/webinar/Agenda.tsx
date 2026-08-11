const ITEMS = [
  {
    n: "01",
    title: "Why the SOC operating model is falling behind",
    text: "How attack execution moved from human-speed activity to agent-assisted and increasingly autonomous workflows.",
  },
  {
    n: "02",
    title: "What existing security telemetry misses",
    text: "Why alerts and logs show symptoms but often fail to reveal the runtime decision, memory failure or cross-product interaction that caused them.",
  },
  {
    n: "03",
    title: "A real multi-vendor authentication failure",
    text: "How conflicting Credential Providers crashed Windows LogonUI—and how reverse engineering isolated the defect inside a third-party binary.",
  },
  {
    n: "04",
    title: "September Patch Tuesday: the engineering test",
    text: "Fresh validation of Windows authentication flows, Credential Provider behavior, agent compatibility and observable telemetry after the September security update.",
  },
  {
    n: "05",
    title: "What security products must change",
    text: "Practical implications for EDR, ITDR, PAM, DLP, identity-security and MDR platforms: runtime observability, interoperability testing, machine-speed response and patch resilience.",
  },
  {
    n: "06",
    title: "Technical Q&A",
    text: "A direct discussion with the Simpity engineering team about Windows internals, authentication instrumentation and difficult customer-environment failures.",
  },
];

export function Agenda() {
  return (
    <section
      id="agenda"
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
      aria-labelledby="agenda-heading"
    >
      <h2
        id="agenda-heading"
        className="font-display font-bold mb-12"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: 1.05, color: "#EDEDEC" }}
      >
        What We'll Cover
      </h2>
      <ol className="space-y-0 max-w-4xl">
        {ITEMS.map((it) => (
          <li
            key={it.n}
            className="flex flex-col md:flex-row gap-2 md:gap-8 py-6 border-t"
            style={{ borderColor: "#1a1a1c" }}
          >
            <span
              className="font-mono text-sm shrink-0 md:w-16"
              style={{ color: "#E5484D", fontVariantNumeric: "tabular-nums" }}
            >
              {it.n}
            </span>
            <div>
              <h3 className="font-display font-bold text-lg md:text-2xl mb-2" style={{ color: "#EDEDEC" }}>
                {it.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: "#7A7974" }}>
                {it.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
