const DATE_TIME = "September 17, 2026 · 17:00 CEST / 11:00 AM ET";

export function WebinarDetails() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <div className="font-mono text-xs tracking-widest mb-4" style={{ color: "#7A7974" }}>
        LIVE WEBINAR · 60 MIN · ENGLISH · LIVE TECHNICAL SESSION
      </div>
      <h2
        className="font-display font-bold mb-8"
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
      <p className="max-w-3xl text-base md:text-lg" style={{ color: "#EDEDEC" }}>
        Agent-driven attack execution, Windows authentication failures below the log layer, and a
        real multi-vendor Credential Provider conflict — validated against the September Windows
        security update.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
            WHEN
          </div>
          <p className="text-lg md:text-xl" style={{ color: "#EDEDEC" }}>
            <time dateTime="2026-09-17T17:00:00+02:00">{DATE_TIME}</time>
          </p>
          <p className="text-sm mt-2" style={{ color: "#7A7974" }}>
            60 minutes · English
          </p>
        </div>
        <div>
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "#7A7974" }}>
            SPEAKER
          </div>
          <p className="text-lg md:text-xl mb-1" style={{ color: "#EDEDEC" }}>
            <strong>Alexei Belous</strong>
          </p>
          <p className="text-sm md:text-base mb-3" style={{ color: "#7A7974" }}>
            Co-founder, Simpity
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#7A7974" }}>
            Alexei works with security-product teams solving engineering problems at the
            undocumented layer of Windows. Simpity's engineers have spent years building and
            supporting enterprise security products across Active Directory, authentication,
            endpoint protection and identity security.
          </p>
        </div>
      </div>

      <p
        className="mt-14 font-display font-bold"
        style={{
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          lineHeight: 1.15,
          color: "#EDEDEC",
        }}
      >
        The control was real.
        <br />
        It just wasn't the boundary.
      </p>
    </section>
  );
}
