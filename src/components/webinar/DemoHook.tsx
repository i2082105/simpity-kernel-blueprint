export function DemoHook() {
  const bullets = [
    "Watch a prompt-injected agent exfiltrate data using a real user's identity.",
    "Watch the same attack die at T+0 — blocked at the system-call level, before it commits.",
    "Leave with a 90-day plan to close the gap between what your stack detects and what it prevents.",
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <h2
        className="font-display font-bold mb-12"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        We'll break an AI agent live.
        <br />
        Then we'll stop it.{" "}
        <span style={{ color: "#7A7974" }}>Same attack. Two outcomes.</span>
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
            <span className="text-base md:text-lg leading-relaxed" style={{ color: "#EDEDEC" }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
