import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Shield, Cpu, Search, Network, Code, Lock } from "lucide-react";

const teamRoles = [
  {
    icon: Cpu,
    title: "Kernel Engineers",
    description: "C/C++ experts in WDM/WDF, focused on stability and performance under HVCI/WDAC environments."
  },
  {
    icon: Search,
    title: "Reverse Engineers",
    description: "Specialists in IDA Pro & WinDbg who analyze undocumented Windows components and map internal changes."
  },
  {
    icon: Shield,
    title: "Detection Engineers",
    description: "Experts who translate attack behaviors into high-fidelity detection logic with minimal false positives."
  },
  {
    icon: Network,
    title: "Active Directory Architects",
    description: "Senior engineers experienced in monitoring global-scale AD environments with zero performance impact."
  },
  {
    icon: Code,
    title: "Secure Coding Specialists",
    description: "Leaders of our SDL, responsible for code reviews, static analysis, and security validation."
  },
  {
    icon: Lock,
    title: "Microsoft Signing Pipeline Experts",
    description: "Engineers managing EV certificates, HLK testing, and WHQL certification processes."
  }
];

const values = [
  {
    title: "Technical Depth",
    description: "We operate at the undocumented layer of Windows where standard development practices cannot reach."
  },
  {
    title: "Engineering Rigor",
    description: "Every deliverable follows our secure development lifecycle with comprehensive testing and documentation."
  },
  {
    title: "No Vendor Lock-in",
    description: "Complete source code ownership and knowledge transfer ensure you're never dependent on us."
  },
  {
    title: "Confidentiality",
    description: "Strict NDA coverage and secure data handling protect your intellectual property."
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// ABOUT</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Multi-Disciplinary Team Built for Deep Security
            </h1>
            <p className="text-xl text-muted-foreground">
              We are the engineering team for the engineers. Specialized expertise 
              for security product companies that need to operate at the kernel level.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To provide security product companies with the specialized engineering required 
              to build robust, reliable, and bypass-proof solutions. We solve problems at the 
              depth where documentation ends and reverse engineering begins.
            </p>
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Specialist Roles
            </h2>
            <p className="text-muted-foreground">
              Our team combines deep expertise across multiple disciplines required 
              for Windows internals engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <role.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Principles
            </h2>
            <p className="text-muted-foreground">
              The foundation of every engagement we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Who We Serve
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "EDR Vendors",
                "ITDR Solutions",
                "AD Security Products",
                "DSPM Providers",
                "DLP Solutions",
                "PAM Vendors",
                "Endpoint Agents",
                "Security Platforms"
              ].map((client) => (
                <div
                  key={client}
                  className="p-4 rounded-lg bg-card border border-border text-center"
                >
                  <span className="text-sm font-medium text-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how our team can support your engineering challenges.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start Conversation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
