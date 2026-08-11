const TAKEAWAYS = [
  "A practical model for distinguishing AI-assisted attacks from genuinely agent-driven execution",
  "A clear view of where SOC telemetry ends and runtime engineering begins",
  "A technical breakdown of a real Windows authentication failure",
  "Fresh observations from the September Windows security update",
  "An architecture checklist for making security products more observable, interoperable and patch-resilient",
  "Questions to take back to your product, SOC, detection-engineering or identity-security team",
];

const AUDIENCE = [
  "CTOs, VPs of Engineering and product leaders at cybersecurity vendors",
  "Windows agent, endpoint, identity and authentication engineering teams",
  "CISOs, Heads of Security and SOC leaders",
  "MDR and MSSP technical leaders",
  "Detection engineers, security architects and incident-response teams",
];

export function TakeawaysAudience() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2
            className="font-display font-bold mb-8"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", lineHeight: 1.05, color: "#EDEDEC" }}
          >
            What You'll Leave With
          </h2>
          <ul className="space-y-4">
            {TAKEAWAYS.map((t) => (
              <li key={t} className="flex gap-3 text-sm md:text-base leading-relaxed" style={{ color: "#EDEDEC" }}>
                <span className="font-mono shrink-0" style={{ color: "#E5484D" }} aria-hidden="true">
                  ›
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className="font-display font-bold mb-8"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", lineHeight: 1.05, color: "#EDEDEC" }}
          >
            Who Should Attend
          </h2>
          <p className="text-sm md:text-base mb-5" style={{ color: "#7A7974" }}>
            This session is designed for:
          </p>
          <ul className="space-y-4">
            {AUDIENCE.map((t) => (
              <li key={t} className="flex gap-3 text-sm md:text-base leading-relaxed" style={{ color: "#EDEDEC" }}>
                <span className="font-mono shrink-0" style={{ color: "#7A7974" }} aria-hidden="true">
                  ›
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div
            className="mt-8 border-l-4 p-5 text-sm md:text-base leading-relaxed"
            style={{ borderColor: "#E5484D", background: "#101012", color: "#EDEDEC" }}
          >
            Especially relevant if your product installs an endpoint agent, Credential Provider,
            authentication component, kernel driver or other software inside a business-critical
            Windows execution path.
          </div>
        </div>
      </div>
    </section>
  );
}
