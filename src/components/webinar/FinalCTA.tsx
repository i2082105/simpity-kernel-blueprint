export function FinalCTA({ onCTA }: { onCTA: () => void }) {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
      aria-labelledby="final-cta"
    >
      <h2
        id="final-cta"
        className="font-display font-bold mb-6"
        style={{ fontSize: "clamp(1.75rem, 5.5vw, 4rem)", lineHeight: 1.02, color: "#EDEDEC" }}
      >
        Don't Just Watch The Next
        <br />
        <span style={{ color: "#E5484D" }}>Attack Get Faster</span>
      </h2>
      <p className="max-w-3xl text-base md:text-lg leading-relaxed" style={{ color: "#EDEDEC" }}>
        See what changes when attack execution moves to machine speed, while your SOC still depends
        on logs, queues and human decisions.
      </p>
      <p className="mt-6 font-mono text-xs md:text-sm tracking-widest" style={{ color: "#7A7974" }}>
        SEPTEMBER 17, 2026 · 17:00 CEST / 11:00 AM ET
      </p>

      <div className="mt-10">
        <button
          onClick={onCTA}
          className="inline-flex items-center gap-3 px-8 py-4 font-display font-bold text-base md:text-lg tracking-wider transition-opacity hover:opacity-90"
          style={{ background: "#E5484D", color: "#0B0B0C" }}
          aria-label="Reserve your seat for the September 17 webinar"
        >
          RESERVE YOUR SEAT
          <span aria-hidden="true">→</span>
        </button>
        <p className="mt-4 text-sm" style={{ color: "#7A7974" }}>
          Technical content. Real cases. No generic AI predictions.
        </p>
      </div>
    </section>
  );
}
