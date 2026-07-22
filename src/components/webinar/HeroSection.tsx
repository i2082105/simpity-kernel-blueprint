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

  const claims = [
    "The model refused.",
    "Deny-Everyone was set.",
    "No password was stolen.",
    "Policy said OK.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-16 md:pb-24">
      <h1
        className={`font-display font-bold tracking-tight ${glitch ? "wb-glitch" : ""}`}
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
          lineHeight: 0.95,
          color: "#EDEDEC",
        }}
      >
        Your security boundary
        <br />
        <span style={{ color: "#7A7974" }}>is not where you think it is.</span>
      </h1>

      <p
        className="mt-8 md:mt-10 max-w-3xl text-base md:text-xl leading-relaxed"
        style={{ color: "#EDEDEC" }}
      >
        Four live Windows, Active Directory and AI demos — why attackers (and
        agents) win{" "}
        <span style={{ color: "#E5484D" }}>one layer lower</span> than every
        control you own.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
        {claims.map((c) => (
          <div
            key={c}
            className="px-4 py-3 border font-mono text-xs md:text-sm"
            style={{
              borderColor: "#1a1a1c",
              background: "#101012",
              color: "#EDEDEC",
            }}
          >
            <span style={{ color: "#7A7974" }}>✓ </span>
            {c}
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-base md:text-lg" style={{ color: "#E5484D" }}>
        None of them stopped the attack.
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
          RESERVE YOUR SEAT
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
