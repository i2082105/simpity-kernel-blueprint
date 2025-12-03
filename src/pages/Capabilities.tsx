import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  KeyRound, 
  Calendar, 
  HardDrive, 
  Brain, 
  Network,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Kernel-Level Interception & Enforcement",
    slug: "kernel",
    description: "Intercept and block malicious operations inside the OS execution path, providing true pre-execution prevention.",
    features: [
      "Pre-execution blocking at kernel level",
      "Process callback implementation",
      "System hook integration",
      "HVCI/WDAC compatible development"
    ],
    problem: "Standard security solutions operate too late in the execution chain to prevent advanced threats.",
  },
  {
    icon: KeyRound,
    title: "Authentication Flow Control",
    slug: "authentication",
    description: "Safely instrument LSASS for real-time visibility and blocking of credential abuse like Golden Ticket, DCSync, and Pass-the-Hash.",
    features: [
      "Safe LSASS instrumentation",
      "Kerberos/NTLM flow monitoring",
      "Token manipulation detection",
      "Credential abuse blocking"
    ],
    problem: "Credential-based attacks like DCSync and Pass-the-Hash bypass traditional detection.",
  },
  {
    icon: Calendar,
    title: "Patch Tuesday Resilience",
    slug: "patch-tuesday",
    description: "24-48 hour recovery cycle for product compatibility after Microsoft updates through systematic reverse-engineering.",
    features: [
      "Automated change detection",
      "Rapid reverse-engineering",
      "Self-adapting modules",
      "Zero-downtime updates"
    ],
    problem: "Deep Windows integrations break with every major Microsoft update, causing weeks of downtime.",
  },
  {
    icon: HardDrive,
    title: "File System & NAS Security",
    slug: "filesystem",
    description: "Driver-level monitors to detect and stop ransomware and anomalous file activity at the earliest stages.",
    features: [
      "NTFS minifilter development",
      "IRP packet analysis",
      "NetApp/EMC integration",
      "Real-time encryption detection"
    ],
    problem: "Ransomware encrypts critical data before endpoint agents can react.",
  },
  {
    icon: Brain,
    title: "Behavior-Based Detection Engines",
    slug: "detection",
    description: "Detection logic based on sequences of action and behavioral anomalies, not brittle signatures.",
    features: [
      "Behavioral sequence analysis",
      "Context-aware detection",
      "Low false positive design",
      "Attack pattern correlation"
    ],
    problem: "Signature-based detection fails against novel attacks and generates excessive false positives.",
  },
  {
    icon: Network,
    title: "Active Directory at Scale",
    slug: "active-directory",
    description: "Stable, zero-lag monitoring solutions for high-load environments with hundreds of domain controllers.",
    features: [
      "500+ DC support",
      "600K+ user environments",
      "Zero-lag monitoring",
      "DC process integration"
    ],
    problem: "Enterprise AD environments require specialized engineering to monitor without performance impact.",
  },
];

export default function Capabilities() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// CAPABILITIES</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Engineering Capabilities
            </h1>
            <p className="text-xl text-muted-foreground">
              Deep technical engineering at the undocumented level of Windows. 
              We operate where standard development practices cannot.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {capabilities.map((capability, index) => (
              <div
                key={capability.slug}
                className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <capability.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {capability.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {capability.description}
                  </p>
                  <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-destructive font-medium">The Challenge: </span>
                      {capability.problem}
                    </p>
                  </div>
                  <Link to={`/capabilities/${capability.slug}`}>
                    <Button variant="outline">
                      Technical Deep Dive
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="text-sm font-semibold text-foreground mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Capability?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our engineering team can develop specialized modules for your unique security requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
