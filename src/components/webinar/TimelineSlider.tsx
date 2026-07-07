import { useState } from "react";

// slider value in minutes: 0..240
const CHECKPOINTS = [
  { t: 0, label: "T+0", scenario: "AI agent issues a privileged AD modification." },
  { t: 2, label: "T+2min", scenario: "Lateral movement begins." },
  { t: 29, label: "T+29min", scenario: "Breakout complete." },
  { t: 240, label: "T+4h", scenario: "Alert fires. Analyst notified. Data already exfiltrated." },
];

function formatT(min: number) {
  if (min < 60) return `T+${min}min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `T+${h}h` : `T+${h}h${m}m`;
}

export function TimelineSlider() {
  const [t, setT] = useState(0);

  const activeIdx = CHECKPOINTS.reduce((acc, cp, i) => (t >= cp.t ? i : acc), 0);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
        DRAG THE TIMELINE. SEE WHERE EACH APPROACH ACTS.
      </div>
      <h2
        className="font-display font-bold mb-10"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        Prevention acts at T+0. Detection acts after the fact.
      </h2>

      <div className="mb-10">
        <div className="flex justify-between font-mono text-xs mb-2" style={{ color: "#7A7974" }}>
          <span>T+0</span>
          <span>T+2min</span>
          <span>T+29min</span>
          <span>T+4h</span>
        </div>
        <input
          type="range"
          min={0}
          max={240}
          value={t}
          onChange={(e) => setT(Number(e.target.value))}
          className="wb-range w-full"
          aria-label="Attack timeline slider"
        />
        <div className="mt-3 font-mono text-sm" style={{ color: "#EDEDEC", fontVariantNumeric: "tabular-nums" }}>
          NOW: {formatT(t)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prevention path */}
        <div
          className="p-6 border"
          style={{
            borderColor: "#01696F",
            background: "rgba(1,105,111,0.1)",
          }}
        >
          <div className="font-mono text-xs tracking-widest mb-4" style={{ color: "#01A9B0" }}>
            PREVENTION PATH
          </div>
          <div className="font-display font-bold text-2xl md:text-3xl mb-2" style={{ color: "#01A9B0" }}>
            BLOCKED @ T+0
          </div>
          <p className="text-sm md:text-base" style={{ color: "#EDEDEC" }}>
            The privileged AD modification never commits. The kernel intercepts the syscall.
            Nothing further happens. There is no incident to investigate.
          </p>
        </div>

        {/* Detection path */}
        <div
          className="p-6 border"
          style={{
            borderColor: activeIdx >= 3 ? "#E5484D" : "#3a3a3d",
            background: activeIdx >= 3 ? "rgba(229,72,77,0.08)" : "#101012",
          }}
        >
          <div
            className="font-mono text-xs tracking-widest mb-4"
            style={{ color: activeIdx >= 3 ? "#E5484D" : "#7A7974" }}
          >
            DETECTION PATH
          </div>
          <div className="space-y-3">
            {CHECKPOINTS.map((cp, i) => {
              const reached = activeIdx >= i;
              const isLast = i === CHECKPOINTS.length - 1;
              const color = !reached
                ? "#3a3a3d"
                : isLast
                ? "#E5484D"
                : "#EDEDEC";
              return (
                <div key={cp.t} className="flex gap-4">
                  <span
                    className="font-mono text-xs w-16 shrink-0 pt-1"
                    style={{ color, fontVariantNumeric: "tabular-nums" }}
                  >
                    {cp.label}
                  </span>
                  <span className="text-sm md:text-base" style={{ color }}>
                    {cp.scenario}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
