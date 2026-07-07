import { useState } from "react";

export function Indictment() {
  const [showRebuttal, setShowRebuttal] = useState(false);
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <h2
        className="font-display font-bold"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        Detection is not defense.
        <br />
        It's an autopsy.
      </h2>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="p-6 md:p-8 border-l-4"
          style={{ borderColor: "#E5484D", background: "rgba(229,72,77,0.06)" }}
        >
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#E5484D" }}>
            DETECTION
          </div>
          <p className="text-lg md:text-xl leading-snug" style={{ color: "#EDEDEC" }}>
            You find out after. The log tells you at T+4h. The data is already gone.
          </p>
        </div>
        <div
          className="p-6 md:p-8 border-l-4"
          style={{ borderColor: "#01696F", background: "rgba(1,105,111,0.08)" }}
        >
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#01A9B0" }}>
            PREVENTION
          </div>
          <p className="text-lg md:text-xl leading-snug" style={{ color: "#EDEDEC" }}>
            It never happens. The action is blocked at the system-call level, at T+0, before it commits.
          </p>
        </div>
      </div>

      <p className="mt-10 text-base md:text-lg" style={{ color: "#7A7974" }}>
        SIEM and Defender are excellent — at documenting your funeral.
      </p>

      <div className="mt-8">
        <button
          onClick={() => setShowRebuttal((v) => !v)}
          className="text-xs font-mono tracking-widest px-4 py-2 border transition-colors"
          style={{
            color: "#EDEDEC",
            borderColor: "#3a3a3d",
            background: showRebuttal ? "#1a1a1c" : "transparent",
          }}
          aria-expanded={showRebuttal}
        >
          {showRebuttal ? "— HIDE REBUTTAL" : "+ I DISAGREE"}
        </button>

        {showRebuttal && (
          <div
            className="mt-6 p-6 md:p-8 border animate-fade-in"
            style={{ borderColor: "#3a3a3d", background: "#101012" }}
          >
            <div className="font-display font-bold text-lg md:text-xl mb-3" style={{ color: "#EDEDEC" }}>
              "We already have Defender."
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#EDEDEC" }}>
              Defender logs the attack after it propagates. Logging and preventing are different
              products solving different problems. The gap between{" "}
              <span className="font-mono" style={{ color: "#E5484D" }}>T+4h</span> and{" "}
              <span className="font-mono" style={{ color: "#01A9B0" }}>T+0</span> is where every
              breach lives.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
