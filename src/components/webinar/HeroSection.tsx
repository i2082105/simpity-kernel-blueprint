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

  const scrollToAgenda = () =>
    document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-16 md:pb-24">
      <h1
        className={`font-display font-bold tracking-tight ${glitch ? "wb-glitch" : ""}`}
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
          lineHeight: 0.95,
          color: "#EDEDEC",
        }}
      >
        Your SOC
        <br />
        <span style={{ color: "#E5484D" }}>has already lost.</span>
      </h1>

      <p
        className="mt-8 md:mt-10 max-w-3xl text-lg md:text-2xl leading-snug"
        style={{ color: "#EDEDEC" }}
      >
        AI attacks are moving at machine speed. Your SOC still operates through alerts, queues and
        human decisions.
      </p>

      <div className="mt-8 max-w-3xl space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#7A7974" }}>
        <p>
          On September 17, Simpity will show where conventional SOC visibility stops: autonomous
          attack execution, invisible Windows authentication failures, and security-product
          conflicts that logs alone cannot explain.
        </p>
        <p>
          This is not another high-level AI security webinar. It is a technical session built around
          real attack cases, Windows internals and fresh post–Patch Tuesday validation.
        </p>
      </div>

      <div
        className="mt-10 inline-block border px-4 py-3 font-mono text-xs md:text-sm tracking-wide"
        style={{ borderColor: "#1a1a1c", background: "#101012", color: "#EDEDEC" }}
      >
        September 17, 2026 · 17:00 CEST / 11:00 AM ET / 8:00 AM PT · 60 minutes · Live technical session
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={onCTA}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 font-display font-bold text-base md:text-lg tracking-wider transition-opacity hover:opacity-90"
          style={{ background: "#E5484D", color: "#0B0B0C" }}
          aria-label="Reserve your seat for the September 17 webinar"
        >
          RESERVE YOUR SEAT
          <span aria-hidden="true">→</span>
        </button>
        <button
          onClick={scrollToAgenda}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 font-display font-bold text-base md:text-lg tracking-wider border transition-colors hover:bg-white/5"
          style={{ borderColor: "#3a3a3d", color: "#EDEDEC" }}
          aria-label="See what we will test during the session"
        >
          SEE WHAT WE'LL TEST
        </button>
      </div>
    </section>
  );
}
