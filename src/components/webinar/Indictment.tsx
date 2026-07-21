import { useState } from "react";

export function Indictment() {
  const [showRebuttal, setShowRebuttal] = useState(false);
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <h2
        className="font-display font-bold"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        The control said no.
        <br />
        <span style={{ color: "#E5484D" }}>Windows said yes.</span>
      </h2>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="p-6 md:p-8 border-l-4"
          style={{ borderColor: "#E5484D", background: "rgba(229,72,77,0.06)" }}
        >
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#E5484D" }}>
            CONTROL LAYER
          </div>
          <p className="text-lg md:text-xl leading-snug mb-4" style={{ color: "#EDEDEC" }}>
            Policy set. Model refused. ACL denied. UI blocked. Checkbox green.
          </p>
          <p className="text-sm md:text-base" style={{ color: "#7A7974" }}>
            Everything you audit lives here. This is not the boundary.
          </p>
        </div>
        <div
          className="p-6 md:p-8 border-l-4"
          style={{ borderColor: "#01696F", background: "rgba(1,105,111,0.08)" }}
        >
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#01A9B0" }}>
            BOUNDARY LAYER
          </div>
          <p className="text-lg md:text-xl leading-snug mb-4" style={{ color: "#EDEDEC" }}>
            Process. Token. Memory. Windows API. Kernel.
          </p>
          <p className="text-sm md:text-base" style={{ color: "#7A7974" }}>
            This is where the attacker — and the AI agent — actually operate.
          </p>
        </div>
      </div>

      <p
        className="mt-10 font-display font-bold"
        style={{
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          lineHeight: 1.15,
          color: "#EDEDEC",
        }}
      >
        The control was real. It just wasn't the boundary.
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
            <div
              className="font-display font-bold text-lg md:text-xl mb-3"
              style={{ color: "#EDEDEC" }}
            >
              "We already have GPO, EDR, DLP and a hardened password policy."
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#EDEDEC" }}>
              All of them live at the control layer. GPO doesn't see{" "}
              <span className="font-mono" style={{ color: "#E5484D" }}>
                SamrSetInformationUser
              </span>
              . EDR doesn't stop{" "}
              <span className="font-mono" style={{ color: "#E5484D" }}>
                DuplicateTokenEx
              </span>{" "}
              on a documented API path. DLP doesn't inspect{" "}
              <span className="font-mono" style={{ color: "#E5484D" }}>
                ollama.exe
              </span>{" "}
              memory. In every demo we run, the control is intact and the outcome still happens —
              one layer lower.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
