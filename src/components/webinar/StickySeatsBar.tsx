const TOTAL_SEATS = 60;
const START_TAKEN = 8;
const MAX_TAKEN = 54;
// Anchor day (UTC) from which the fill starts at START_TAKEN.
const ANCHOR_MS = Date.UTC(2026, 6, 27);

function jitter(dayIndex: number) {
  // deterministic 0..2 based on the day number
  const x = Math.sin(dayIndex * 12.9898) * 43758.5453;
  return Math.floor((x - Math.floor(x)) * 3);
}

export function computeTaken(now: number = Date.now()) {
  const days = Math.max(0, Math.floor((now - ANCHOR_MS) / 86_400_000));
  const raw = START_TAKEN + Math.floor(days * 3) + jitter(days);
  return Math.min(MAX_TAKEN, Math.max(START_TAKEN, raw));
}

export function StickySeatsBar() {
  const taken = computeTaken();
  const left = TOTAL_SEATS - taken;
  const pct = Math.round((taken / TOTAL_SEATS) * 100);

  const scrollToRegister = () =>
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "#0B0B0C", borderColor: "#1a1a1c" }}
      role="status"
      aria-live="polite"
    >
      <button
        onClick={scrollToRegister}
        className="w-full text-left"
        aria-label={`${left} of ${TOTAL_SEATS} seats left. Go to registration.`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 flex items-center gap-3 md:gap-5">
          <span
            className="font-mono text-lg md:text-2xl font-bold whitespace-nowrap"
            style={{ color: "#E5484D", fontVariantNumeric: "tabular-nums" }}
          >
            {left} SEATS LEFT
          </span>
          <div className="flex-1 min-w-0">
            <div className="h-[6px] w-full" style={{ background: "#1a1a1c" }}>
              <div className="h-full" style={{ width: `${pct}%`, background: "#E5484D" }} />
            </div>
            <span
              className="block mt-1 text-[11px] md:text-xs leading-tight"
              style={{ color: "#7A7974" }}
            >
              {TOTAL_SEATS} seats total · registration closes when full
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
