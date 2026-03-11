import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Lock } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "EU AI Act Compliant",
    description:
      "Articles 9, 10, 15, 26 — risk management, data governance, cybersecurity, and deployer obligations covered.",
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Controls",
    description:
      "Documented data paths, identity boundaries, and permission models ready for regulators and auditors.",
  },
  {
    icon: Lock,
    title: "Insurable by Design",
    description:
      "Engineering controls that satisfy cyber insurance requirements for enterprise AI use.",
  },
];

export function AISecurityBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-mono text-primary mb-4">// PREMIUM SERVICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Make Your AI Workflows Safe, Compliant, and Insurable
            </h2>
            <p className="text-muted-foreground mb-4">
              The EU AI Act is now in force. Articles&nbsp;9, 10, and 15 require risk
              management systems, data governance, and technical documentation for
              high-risk AI. Article&nbsp;26 places direct obligations on deployers.
              Your enterprise AI workflows — from chat tools to automated
              decisions — need engineering-level controls, not just policies.
            </p>
            <p className="text-muted-foreground mb-8">
              We review one risky AI workflow end-to-end: data paths, identity
              boundaries, permission models, and control gaps — so your AI
              adoption is auditable, insurable, and EU&nbsp;AI&nbsp;Act ready.
            </p>
            <Link to="/ai-workflow-security">
              <Button variant="hero" size="lg">
                Review a Risky Workflow
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
