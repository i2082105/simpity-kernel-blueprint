export function WebinarFooter() {
  return (
    <footer
      className="border-t mt-8"
      style={{ borderColor: "#1a1a1c", background: "#0B0B0C" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <p className="text-sm" style={{ color: "#7A7974" }}>
          Simpity · Security engineering. Kernel-level Active Directory protection.
        </p>
        <div className="flex gap-6 text-xs font-mono tracking-widest" style={{ color: "#7A7974" }}>
          <a href="/privacy" className="hover:text-white transition-colors">PRIVACY</a>
          <a href="/terms" className="hover:text-white transition-colors">TERMS</a>
          <a href="https://simpity.eu" className="hover:text-white transition-colors">SIMPITY.EU</a>
        </div>
      </div>
    </footer>
  );
}
