import { useCountUp } from "@/hooks/useCountUp";

function Stat({ value, caption, delay }: { value: number; caption: string; delay: number }) {
  const { ref, value: n } = useCountUp(value, 1200, delay);
  return (
    <div>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="font-display font-bold"
        style={{
          fontSize: "clamp(3.5rem, 12vw, 9rem)",
          lineHeight: 0.9,
          color: "#EDEDEC",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {n}
        <span style={{ color: "#E5484D" }}>%</span>
      </div>
      <p
        className="mt-4 text-sm md:text-base max-w-xs"
        style={{ color: "#7A7974" }}
      >
        {caption}
      </p>
    </div>
  );
}

export function BigNumbers() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <Stat value={49} delay={0} caption="of attacks now use AI assistance (up from 18% in 2024)." />
        <Stat value={89} delay={200} caption="year-over-year rise in AI-driven adversary operations." />
        <Stat value={82} delay={400} caption="of intrusions used NO traditional malware — just valid credentials and trusted access." />
      </div>
      <p
        className="mt-16 font-display font-bold"
        style={{
          fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
          lineHeight: 1.1,
          color: "#EDEDEC",
        }}
      >
        And you're still hiring humans to watch dashboards.
      </p>
    </section>
  );
}
