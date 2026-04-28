import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Lock, Radar } from "lucide-react";

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
              Your Team Already Pasted Sensitive Data Into ChatGPT. Now What?
            </h2>
            <p className="text-muted-foreground mb-4">
              Someone uploaded a board deck into Copilot. An engineer pasted
              production credentials into Claude. A support team connected an AI
              assistant to the internal knowledge base — with admin-level access.
              Meanwhile, employees across departments are installing a zoo of AI
              tools on their own: ChatGPT, Copilot, Claude, Cursor,
              Claw — each with its own data handling, each outside your
              security perimeter.
            </p>
            <p className="text-muted-foreground mb-8">
              The EU&nbsp;AI&nbsp;Act (Articles&nbsp;9, 10, 15, 26) now requires
              documented risk management, data governance, and cybersecurity
              controls for AI workflows. Your cyber insurer is asking the same
              questions. We take one risky workflow — the one keeping you up
              at night — and engineer the controls that make it safe,
              auditable, and insurable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/ai-workflow-security">
                <Button variant="hero" size="lg">
                  Review a Risky Workflow
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/ai-agent-attack-hub">
                <Button variant="hero-outline" size="lg">
                  Open Attack Hub
                </Button>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <Link
              to="/ai-agent-attack-hub"
              className="block p-5 rounded-xl bg-card border border-primary/30 hover:border-primary/60 transition-colors"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Radar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono text-primary mb-1">NEW CONTENT HUB</p>
                  <h3 className="font-semibold text-foreground mb-1">AI Agent Attack Hub</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Attack anatomy, OAuth abuse, prompt injection, recent signals, and a 10-question self-assessment for agentic AI exposure.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary">
                    Explore the hub
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
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
