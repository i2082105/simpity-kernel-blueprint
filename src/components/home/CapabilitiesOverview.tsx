import { Link } from "react-router-dom";
import { 
  Shield, 
  KeyRound, 
  Calendar, 
  HardDrive, 
  Brain, 
  Network,
  ArrowRight 
} from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Kernel-Level Interception & Enforcement",
    description: "Intercept and block malicious operations inside the OS execution path, providing true pre-execution prevention.",
    href: "/capabilities/kernel",
  },
  {
    icon: KeyRound,
    title: "Authentication Flow Control",
    description: "Safely instrument LSASS for real-time visibility and blocking of credential abuse like Golden Ticket, DCSync, and Pass-the-Hash.",
    href: "/capabilities/authentication",
  },
  {
    icon: Calendar,
    title: "Patch Tuesday Resilience",
    description: "24-48 hour recovery cycle for product compatibility after Microsoft updates through systematic reverse-engineering.",
    href: "/capabilities/patch-tuesday",
  },
  {
    icon: HardDrive,
    title: "File System & NAS Security",
    description: "Driver-level monitors to detect and stop ransomware and anomalous file activity at the earliest stages.",
    href: "/capabilities/filesystem",
  },
  {
    icon: Brain,
    title: "Behavior-Based Detection Engines",
    description: "Detection logic based on sequences of action and behavioral anomalies, not brittle signatures.",
    href: "/capabilities/detection",
  },
  {
    icon: Network,
    title: "Active Directory at Scale",
    description: "Stable, zero-lag monitoring solutions for high-load environments with hundreds of domain controllers.",
    href: "/capabilities/active-directory",
  },
];

export function CapabilitiesOverview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid-fade" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-primary mb-4">// CORE CAPABILITIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Engineering for Mission-Critical Security Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep technical capabilities at the undocumented level of Windows, 
            where standard development practices cannot operate.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Link
              key={capability.title}
              to={capability.href}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-subtle"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {capability.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
