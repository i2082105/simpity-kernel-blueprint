import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Code, TestTube, FileCheck, Truck, Shield } from "lucide-react";

const methodologySteps = [
  {
    number: "01",
    icon: Search,
    title: "Deep Discovery & Architecture",
    description: "We begin with comprehensive analysis of requirements and reverse-engineering of the target environment to create a detailed technical design.",
    details: [
      "Requirements gathering and scope definition",
      "Target environment analysis using IDA Pro, Ghidra, WinDbg",
      "Mapping of undocumented Windows internals",
      "Technical architecture documentation",
      "Risk assessment and mitigation planning"
    ]
  },
  {
    number: "02",
    icon: Code,
    title: "Secure Development (SDL)",
    description: "C/C++/C# code is developed with continuous static analysis (SAST) and rigorous peer review following our Secure Development Lifecycle.",
    details: [
      "Secure coding standards enforcement",
      "Continuous SAST scanning",
      "Mandatory peer code review",
      "Memory safety validation",
      "Documentation as code"
    ]
  },
  {
    number: "03",
    icon: TestTube,
    title: "Iterative PoC & Prototyping",
    description: "We build functional modules to validate assumptions and demonstrate viability in the target environment early in the process.",
    details: [
      "Rapid prototype development",
      "Early stakeholder validation",
      "Technical assumption testing",
      "Performance baseline establishment",
      "Iterative refinement cycles"
    ]
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Rigorous QA & Performance Testing",
    description: "We conduct multi-faceted testing for stability, resource consumption, and compatibility across Windows versions.",
    details: [
      "Multi-version Windows testing",
      "HVCI/WDAC compatibility validation",
      "Performance benchmarking",
      "Stress and stability testing",
      "Security vulnerability scanning"
    ]
  },
  {
    number: "05",
    icon: Truck,
    title: "Deployment & Handoff",
    description: "We deliver signed binaries, complete source code, and comprehensive documentation. No vendor lock-in.",
    details: [
      "Microsoft-signed driver delivery",
      "Complete source code transfer",
      "Comprehensive technical documentation",
      "Knowledge transfer sessions",
      "Ongoing support options"
    ]
  }
];

const reverseEngineeringProcess = [
  {
    title: "Analysis",
    description: "We use disassemblers (IDA Pro, Ghidra) and debuggers (WinDbg) to analyze undocumented Windows components."
  },
  {
    title: "Mapping",
    description: "We map changes to LSASS, Kerberos, AD, and file system internals after every update."
  },
  {
    title: "Adaptation",
    description: "This analysis enables us to build resilient components that adapt to changes, rather than break."
  }
];

export default function Methodology() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// METHODOLOGY</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              From Architecture to Signed Driver
            </h1>
            <p className="text-xl text-muted-foreground">
              Our engineering methodology ensures compatibility across Windows versions, 
              including in HVCI/WDAC environments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principle */}
      <section className="py-12 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl font-medium text-foreground mb-4">
              "We don't rely on assumptions or public APIs. Our engineering is built on a 
              deep, verifiable understanding of Windows internals."
            </blockquote>
            <p className="text-muted-foreground">
              This foundation enables us to operate in highly protected areas like LSASS, 
              guarantee resilience against undocumented changes, and create security controls 
              that cannot be achieved through standard development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Engineering Process
            </h2>
            <p className="text-muted-foreground">
              A systematic approach to developing kernel-level security components 
              with enterprise-grade reliability.
            </p>
          </div>

          <div className="space-y-8">
            {methodologySteps.map((step) => (
              <div
                key={step.number}
                className="grid lg:grid-cols-3 gap-6 p-6 rounded-xl bg-card border border-border"
              >
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-mono font-bold text-primary/40">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <div className="lg:col-span-2 bg-background rounded-lg p-6 border border-border">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reverse Engineering */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Reverse Engineering Foundation
            </h2>
            <p className="text-muted-foreground">
              Every engagement is grounded in systematic reverse engineering of 
              undocumented Windows components.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reverseEngineeringProcess.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <span className="text-4xl font-mono font-bold text-primary/20 mb-4 block">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
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
              Ready to See Our Methodology in Action?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our engineering process can address your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule Technical Discussion
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
