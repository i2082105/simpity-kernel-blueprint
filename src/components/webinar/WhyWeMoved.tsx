const CARDS = [
  {
    title: "Post–Patch Tuesday Lab",
    text: "We will test Windows authentication and security-product behavior after the September update—and show what changed, what remained stable and where telemetry still leaves a gap.",
  },
  {
    title: "Agent-Driven Attack Cases",
    text: "We will examine how accessible AI models and orchestration frameworks are taking over larger parts of the attack chain—and why a human-speed SOC workflow cannot reliably keep pace.",
  },
  {
    title: "Inside a LogonUI Crash",
    text: "Three security products installed their own Windows Credential Providers. Their interaction caused LogonUI to fail. We used binary-level reverse engineering to trace the crash to incorrect memory handling inside a third-party provider.",
  },
];

export function WhyWeMoved() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
      aria-labelledby="why-we-moved"
    >
      <h2
        id="why-we-moved"
        className="font-display font-bold mb-8"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: 1.05, color: "#EDEDEC" }}
      >
        Why We Moved The Session
      </h2>
      <div className="max-w-3xl space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "#EDEDEC" }}>
        <p>The attack landscape is changing too quickly for a six-month-old presentation.</p>
        <p>
          We moved the webinar to September 17 so we can include new evidence rather than repeat
          familiar predictions. Our engineering team will test what changes after the September
          Windows security update, examine recent agent-driven attack cases, and demonstrate a real
          authentication failure that conventional SOC telemetry could not explain.
        </p>
        <p style={{ color: "#7A7974" }}>
          The extra time allows us to replace generic AI commentary with current technical findings
          and concrete engineering lessons.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {CARDS.map((c, i) => (
          <article
            key={c.title}
            className="border p-6"
            style={{ borderColor: "#1a1a1c", background: "#101012" }}
          >
            <div className="font-mono text-xs mb-4" style={{ color: "#E5484D" }}>
              0{i + 1}
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl mb-3" style={{ color: "#EDEDEC" }}>
              {c.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#7A7974" }}>
              {c.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
