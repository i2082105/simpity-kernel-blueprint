import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Deep Discovery & Architecture",
    description: "Analysis of requirements and reverse-engineering of the target environment to create a detailed technical design.",
  },
  {
    number: "02",
    title: "Secure Development (SDL)",
    description: "C/C++/C# code developed with continuous static analysis (SAST) and rigorous peer review.",
  },
  {
    number: "03",
    title: "Iterative PoC & Prototyping",
    description: "Functional modules to validate assumptions and demonstrate viability in the target environment early.",
  },
  {
    number: "04",
    title: "Rigorous QA & Performance Testing",
    description: "Multi-faceted testing for stability, resource consumption, and compatibility across Windows versions.",
  },
  {
    number: "05",
    title: "Deployment & Handoff",
    description: "Signed binaries, complete source code, and comprehensive documentation. No vendor lock-in.",
  },
];

export function MethodologyPreview() {
  return (
    <section className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <p className="text-sm font-mono text-primary mb-4">// METHODOLOGY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Architecture to Signed Driver
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our engineering methodology ensures compatibility across Windows versions, 
              including in HVCI/WDAC environments. We don&apos;t rely on assumptions or 
              public APIs—our engineering is built on a deep, verifiable understanding 
              of Windows internals.
            </p>
            <p className="text-muted-foreground mb-6">
              Depending on the problem, we deliberately choose the appropriate execution level — kernel-mode, 
              user-mode, or the Windows authentication pipeline — to build precise, stable security mechanisms 
              where they are most effective.
            </p>
            <Link to="/methodology">
              <Button variant="outline">
                View Full Methodology
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-2xl font-mono font-bold text-primary/50">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
