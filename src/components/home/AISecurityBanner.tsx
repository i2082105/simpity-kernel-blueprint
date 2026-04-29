import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Fingerprint, Radar, Shield } from "lucide-react";

const cards = [
  {
    icon: Radar,
    title: "Detection Modernization",
    description:
      "Extend UEBA and SOC baselines for agent behavior, computer-use loops, prompt-driven actions, and anomalous tool execution.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Resilience",
    description:
      "Map AI Act Article 26, NIS2 Article 21, DORA ICT risk, and GDPR exposure into evidence-backed controls.",
  },
  {
    icon: Fingerprint,
    title: "Identity Posture",
    description:
      "Inventory non-human identities, govern OAuth scopes, and reduce over-permissioned agents before they become lateral paths.",
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
              Claude Code — each with its own data handling, each outside your
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
                  Start AI Workflow Security Review
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
                  <p className="text-xs font-mono text-primary mb-1">THREAT MODEL LAYER</p>
                  <h3 className="font-semibold text-foreground mb-1">AI Agent Attack Hub</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use the hub to understand the attack model; use the security review to harden one real AI workflow.
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
