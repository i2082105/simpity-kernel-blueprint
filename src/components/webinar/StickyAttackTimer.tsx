import { useEffect, useState } from "react";

export function StickyAttackTimer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "#0B0B0C", borderColor: "#1a1a1c" }}
      role="status"
      aria-live="off"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 flex items-center gap-3 md:gap-5">
        <span
          className="font-mono text-lg md:text-2xl font-bold"
          style={{ color: "#E5484D", fontVariantNumeric: "tabular-nums" }}
          aria-label={`Attack timer ${mm} minutes ${ss} seconds`}
        >
          {mm}:{ss}
        </span>
        <span
          className="text-[11px] md:text-xs leading-tight"
          style={{ color: "#7A7974" }}
        >
          This is how long an AI attacker needs to own your Active Directory.
        </span>
      </div>
    </div>
  );
}
