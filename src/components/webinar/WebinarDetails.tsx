// EDIT THIS ONE LINE WHEN THE DATE IS SET:
const DATE_TIME_TBD = "Date & time — announcing shortly.";

export function WebinarDetails() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <div className="font-mono text-xs tracking-widest mb-4" style={{ color: "#7A7974" }}>
        LIVE WEBINAR · 60 MIN · TWO LIVE DEMOS
      </div>
      <h2
        className="font-display font-bold mb-8"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        Fighting Fire with Fire:
        <br />
        <span style={{ color: "#7A7974" }}>
          Using AI to Defend Against AI-Powered Attacks.
        </span>
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
            WHEN
          </div>
          <p className="text-lg md:text-xl" style={{ color: "#EDEDEC" }}>
            {DATE_TIME_TBD}
          </p>
        </div>
        <div>
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
            SPEAKER
          </div>
          <p className="text-lg md:text-xl mb-2" style={{ color: "#EDEDEC" }}>
            <strong>Alexei Belous</strong> — Simpity.
          </p>
          <p className="text-sm md:text-base" style={{ color: "#7A7974" }}>
            Built the prevention layer inside Netwrix Threat Prevention. 20+ years defending Active
            Directory at the kernel level.
          </p>
        </div>
      </div>

      <p
        className="mt-12 font-display font-bold"
        style={{
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          lineHeight: 1.15,
          color: "#EDEDEC",
        }}
      >
        Simpity engineered the products other vendors resell.
      </p>
    </section>
  );
}
