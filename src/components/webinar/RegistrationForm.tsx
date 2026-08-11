const ZOOM_REGISTER_URL =
  "https://us06web.zoom.us/webinar/register/WN_ZcNXcACUSUmfblvXSqnQmQ";

export function RegistrationForm() {
  return (
    <section
      id="register"
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <div className="font-mono text-xs tracking-widest mb-4" style={{ color: "#7A7974" }}>
        WEBINAR REGISTRATION · SEPTEMBER 17, 2026
      </div>
      <h2
        className="font-display font-bold mb-6"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        Your SOC Has
        <br />
        <span style={{ color: "#7A7974" }}>Already Lost.</span>
      </h2>
      <p className="max-w-2xl text-base md:text-lg mb-4" style={{ color: "#EDEDEC" }}>
        Registration runs on Zoom. Takes about 30 seconds — you get the join link and calendar
        invite by email immediately.
      </p>
      <p className="max-w-2xl font-mono text-xs md:text-sm mb-10" style={{ color: "#7A7974" }}>
        <time dateTime="2026-09-17T17:00:00+02:00">
          September 17, 2026 · 17:00 CEST / 11:00 AM ET / 8:00 AM PT
        </time>{" "}
        · 60 minutes · Live technical session
      </p>

      <div className="max-w-2xl">
        <a
          href={ZOOM_REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 w-full md:w-auto justify-center px-8 py-4 font-display font-bold text-base md:text-lg tracking-wider transition-opacity hover:opacity-90"
          style={{ background: "#E5484D", color: "#0B0B0C" }}
          aria-label="Reserve your seat on Zoom for the September 17 webinar"
        >
          RESERVE YOUR SEAT
          <span aria-hidden="true">→</span>
        </a>

        <ul className="mt-8 space-y-3 font-mono text-xs md:text-sm" style={{ color: "#7A7974" }}>
          <li>› 60 minutes, English, live technical session</li>
          <li>› Questions are collected and answered inside Zoom</li>
          <li>› Recording sent to everyone who registers</li>
          <li>› No sales call unless you ask for one</li>
        </ul>
      </div>
    </section>
  );
}
