import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

const technologies = [
  {
    category: "Windows Security",
    items: [
      { name: "HVCI (Hypervisor-Protected Code Integrity)", level: "Expert", expertise: "Agent/Driver Development & Compatibility" },
      { name: "WDAC (Windows Defender Application Control)", level: "Expert", expertise: "Policy-compliant driver development" },
      { name: "Credential Guard", level: "Expert", expertise: "Secure enclave interaction" },
    ]
  },
  {
    category: "Active Directory",
    items: [
      { name: "Large-Scale (500-1000+ DCs)", level: "Expert", expertise: "Performance optimization, zero-lag monitoring" },
      { name: "Domain Controller Processes", level: "Expert", expertise: "Safe instrumentation and monitoring" },
      { name: "Replication Monitoring", level: "Expert", expertise: "DRS protocol analysis" },
    ]
  },
  {
    category: "Authentication",
    items: [
      { name: "Kerberos", level: "Expert", expertise: "Packet-level analysis, TGT/TGS interception" },
      { name: "NTLM", level: "Expert", expertise: "Challenge-response monitoring" },
      { name: "LSASS Internals", level: "Expert", expertise: "Safe instrumentation, memory analysis" },
    ]
  },
  {
    category: "Windows Internals",
    items: [
      { name: "Kernel Drivers (WDM/WDF)", level: "Expert", expertise: "NTFS Minifilters, Process/Registry hooks" },
      { name: "Process Callbacks", level: "Expert", expertise: "Creation, termination monitoring" },
      { name: "System Hooks", level: "Expert", expertise: "Kernel-mode interception" },
    ]
  },
  {
    category: "File Systems",
    items: [
      { name: "NTFS Driver Ecosystem", level: "Expert", expertise: "Minifilter development for Windows Servers" },
      { name: "IRP Analysis", level: "Expert", expertise: "I/O request packet monitoring" },
      { name: "File System Callbacks", level: "Expert", expertise: "Pre/post operation handlers" },
    ]
  },
  {
    category: "NAS Storage",
    items: [
      { name: "NetApp", level: "Advanced", expertise: "Driver-level monitoring via host" },
      { name: "EMC", level: "Advanced", expertise: "Storage integration and monitoring" },
      { name: "SMB/CIFS", level: "Expert", expertise: "Protocol-level analysis" },
    ]
  },
  {
    category: "Development & Deployment",
    items: [
      { name: "Microsoft Driver Signing Pipeline", level: "Core Competency", expertise: "EV Certs, HLK, WHQL certification" },
      { name: "Static Analysis (SAST)", level: "Standard Practice", expertise: "Continuous code quality" },
      { name: "Reverse Engineering Tools", level: "Expert", expertise: "IDA Pro, Ghidra, WinDbg" },
    ]
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "text-primary bg-primary/10 border-primary/20";
    case "Advanced":
      return "text-primary/80 bg-primary/5 border-primary/10";
    case "Core Competency":
      return "text-foreground bg-secondary border-border";
    default:
      return "text-muted-foreground bg-muted border-border";
  }
};

export default function Technology() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// TECHNOLOGY</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Supported Technologies & Environments
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert-level coverage across the Windows security stack, from kernel drivers 
              to enterprise Active Directory deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Matrix */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {technologies.map((category) => (
              <div
                key={category.category}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  {category.category}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Technology</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Level</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Expertise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item) => (
                        <tr key={item.name} className="border-b border-border/50 last:border-0">
                          <td className="py-3 px-4 text-sm text-foreground font-medium">
                            {item.name}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`text-xs font-medium px-2 py-1 rounded border ${getLevelColor(item.level)}`}>
                              {item.level}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {item.expertise}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Environment Compatibility
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Windows Server 2016+",
                "Windows 10/11 Enterprise",
                "HVCI-enabled systems",
                "WDAC-enforced environments",
                "Credential Guard active",
                "VBS-enabled systems",
                "Azure AD joined",
                "Hybrid AD environments"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border"
                >
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Support for a Specific Environment?
            </h2>
            <p className="text-muted-foreground mb-8">
              We can assess compatibility and develop solutions for your target infrastructure.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Discuss Requirements
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
