export function DemoHook() {
  const bullets = [
    "Watch a local LLM refuse an unsafe request — then watch its own RAM leak the chat and the password.",
    "Watch a local admin become Domain Admin in under 10 seconds without a password, without Mimikatz, without alerts.",
    "Watch an agentic AI model quietly strip a Deny ACE — then watch every alternative bypass die at Access Denied once the boundary lives at the API layer.",
  ];
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <h2
        className="font-display font-bold mb-12"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        Four demos. One thesis.
        <br />
        <span style={{ color: "#7A7974" }}>One layer lower.</span>
      </h2>
      <ul className="space-y-6 max-w-3xl">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-5">
            <span
              className="font-mono text-sm pt-1 shrink-0"
              style={{ color: "#E5484D", fontVariantNumeric: "tabular-nums" }}
            >
              0{i + 1}
            </span>
            <span
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#EDEDEC" }}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
