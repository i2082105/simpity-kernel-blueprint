import { useCountUp } from "@/hooks/useCountUp";

function Stat({
  value,
  suffix,
  prefix,
  caption,
  delay,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  caption: string;
  delay: number;
}) {
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
        {prefix}
        {n}
        {suffix && <span style={{ color: "#E5484D" }}>{suffix}</span>}
      </div>
      <p className="mt-4 text-sm md:text-base max-w-xs" style={{ color: "#7A7974" }}>
        {caption}
      </p>
    </div>
  );
}

export function BigNumbers() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <Stat
          value={29}
          suffix="%"
          delay={0}
          caption="of organizations say they are ready to defend against agentic AI. The other 71% are guessing."
        />
        <Stat
          value={1}
          prefix="#"
          delay={200}
          caption="Agentic AI is the top-ranked attack vector for 2026 in independent industry forecasts."
        />
        <Stat
          value={10}
          suffix="s"
          prefix="<"
          delay={400}
          caption="Local admin → Domain Admin via OpenProcess → DuplicateTokenEx → CreateProcessWithTokenW. MITRE T1134.001. No Mimikatz. Almost no Event Log."
        />
      </div>
      <p
        className="mt-16 font-display font-bold"
        style={{
          fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
          lineHeight: 1.1,
          color: "#EDEDEC",
        }}
      >
        And your controls are still written at the policy layer.
      </p>
    </section>
  );
}
