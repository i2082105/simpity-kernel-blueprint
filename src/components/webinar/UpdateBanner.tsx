export function UpdateBanner() {
  return (
    <aside
      className="border-b"
      style={{ background: "#101012", borderColor: "#1a1a1c" }}
      aria-label="Webinar date update"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 md:py-6 flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
        <div
          className="font-mono text-xs tracking-widest shrink-0 pt-0.5"
          style={{ color: "#E5484D" }}
        >
          NEW DATE · SEPTEMBER 17
        </div>
        <p className="text-sm md:text-base max-w-3xl leading-relaxed" style={{ color: "#EDEDEC" }}>
          We've expanded the session with fresh post–Patch Tuesday testing and new real-world cases.
          The result will be more technical, more current and more useful for teams building or
          operating security products.
        </p>
      </div>
    </aside>
  );
}
