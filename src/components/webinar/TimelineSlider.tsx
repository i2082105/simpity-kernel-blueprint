import { useState } from "react";

const LAYERS = [
  {
    key: "interface",
    label: "INTERFACE",
    assume: "The UI blocked it. The chat model refused. The button is greyed out.",
    reality:
      "Interfaces enforce nothing. They render intent. The actual call never has to pass through them.",
    tone: "#7A7974",
  },
  {
    key: "policy",
    label: "POLICY",
    assume: "GPO applied. Password policy enforced. Deny ACE set on the sensitive object.",
    reality:
      "SamrSetInformationUser writes NT hashes directly. Deny ACEs can be silently removed. Policy is a suggestion at this layer.",
    tone: "#EDEDEC",
  },
  {
    key: "process",
    label: "PROCESS / TOKEN",
    assume: "The service runs under a scoped account. Tokens are protected by the OS.",
    reality:
      "OpenProcess → OpenProcessToken → DuplicateTokenEx → CreateProcessWithTokenW. Local admin becomes Domain Admin in <10 seconds. No password required.",
    tone: "#E5484D",
  },
  {
    key: "api",
    label: "API / KERNEL",
    assume: "The kernel is a black box, someone else's problem, out of scope.",
    reality:
      "This is the only layer where the outcome is actually decided. Prevention lives here or it does not exist.",
    tone: "#01A9B0",
  },
];

export function TimelineSlider() {
  const [active, setActive] = useState(2);

  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
        THE FOUR LAYERS · CLICK EACH ONE
      </div>
      <h2
        className="font-display font-bold mb-10"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        Every defender assumes the boundary is up here.
        <br />
        <span style={{ color: "#E5484D" }}>The attacker works down there.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          {LAYERS.map((l, i) => {
            const isActive = i === active;
            return (
              <button
                key={l.key}
                onClick={() => setActive(i)}
                className="text-left px-4 py-4 border font-mono text-xs tracking-widest shrink-0 transition-colors"
                style={{
                  borderColor: isActive ? l.tone : "#1a1a1c",
                  background: isActive ? "rgba(255,255,255,0.03)" : "#101012",
                  color: isActive ? l.tone : "#7A7974",
                }}
                aria-pressed={isActive}
              >
                <span className="opacity-60 mr-2">0{i + 1}</span>
                {l.label}
              </button>
            );
          })}
        </div>

        <div
          className="p-6 md:p-8 border"
          style={{ borderColor: LAYERS[active].tone, background: "#101012" }}
        >
          <div
            className="font-mono text-xs tracking-widest mb-4"
            style={{ color: LAYERS[active].tone }}
          >
            LAYER {active + 1} · {LAYERS[active].label}
          </div>

          <div className="mb-6">
            <div className="font-mono text-[11px] tracking-widest mb-2" style={{ color: "#7A7974" }}>
              WHAT DEFENDERS ASSUME LIVES HERE
            </div>
            <p className="text-base md:text-lg" style={{ color: "#EDEDEC" }}>
              {LAYERS[active].assume}
            </p>
          </div>

          <div>
            <div
              className="font-mono text-[11px] tracking-widest mb-2"
              style={{ color: LAYERS[active].tone }}
            >
              WHAT ACTUALLY DECIDES THE OUTCOME
            </div>
            <p className="text-base md:text-lg" style={{ color: "#EDEDEC" }}>
              {LAYERS[active].reality}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-10 font-mono text-sm md:text-base" style={{ color: "#7A7974" }}>
        Anchor phrase for the hour: <span style={{ color: "#EDEDEC" }}>"one layer lower."</span>
      </p>
    </section>
  );
}
