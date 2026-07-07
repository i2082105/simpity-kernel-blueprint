import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection({ onCTA }: { onCTA: () => void }) {
  const reduced = useReducedMotion();
  const [glitch, setGlitch] = useState(!reduced);

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setGlitch(false), 900);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-16 md:pb-24">
      <h1
        className={`font-display font-bold tracking-tight ${glitch ? "wb-glitch" : ""}`}
        style={{
          fontSize: "clamp(2.75rem, 9vw, 7.5rem)",
          lineHeight: 0.95,
          color: "#EDEDEC",
        }}
      >
        Your SOC already lost.
        <br />
        <span style={{ color: "#7A7974" }}>It just doesn't know yet.</span>
      </h1>

      <p
        className="mt-8 md:mt-10 max-w-3xl text-base md:text-xl leading-relaxed"
        style={{ color: "#EDEDEC" }}
      >
        By the time your best analyst opens the alert, the attacker's AI has
        already finished. Breakout time:{" "}
        <span className="font-mono" style={{ fontVariantNumeric: "tabular-nums" }}>
          29 minutes
        </span>
        . Fastest observed:{" "}
        <span className="font-mono" style={{ fontVariantNumeric: "tabular-nums", color: "#E5484D" }}>
          27 seconds
        </span>
        . Your average alert dwell time:{" "}
        <span className="font-mono" style={{ fontVariantNumeric: "tabular-nums" }}>
          56 minutes
        </span>
        .
      </p>

      <div className="mt-10 md:mt-14">
        <button
          onClick={onCTA}
          className="group inline-flex items-center gap-3 px-8 py-4 font-display font-bold text-base md:text-lg tracking-wider transition-colors"
          style={{
            background: "#E5484D",
            color: "#0B0B0C",
          }}
        >
          TAKE A SEAT
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
