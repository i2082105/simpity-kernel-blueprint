export function CentralQuestion() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
      aria-labelledby="central-question"
    >
      <div className="font-mono text-xs tracking-widest mb-6" style={{ color: "#7A7974" }}>
        THE CENTRAL QUESTION
      </div>
      <h2
        id="central-question"
        className="font-display font-bold max-w-5xl"
        style={{ fontSize: "clamp(1.5rem, 4.5vw, 3.25rem)", lineHeight: 1.1, color: "#EDEDEC" }}
      >
        If an AI agent can execute actions faster than your SOC can investigate them—and the
        decisive failure happens{" "}
        <span style={{ color: "#E5484D" }}>below your logs</span>—what exactly is your SOC
        controlling?
      </h2>
    </section>
  );
}
