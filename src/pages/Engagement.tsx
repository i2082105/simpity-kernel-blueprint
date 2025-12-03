import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Users, Package, Check, Clock } from "lucide-react";

const engagementModels = [
  {
    icon: User,
    title: "Dedicated Engineer",
    subtitle: "Long-term integration",
    description: "One or more Simpity engineers integrated directly into your team.",
    whenToUse: "For long-term projects or augmenting your team with continuous Windows internals expertise.",
    timeline: "6-24+ months",
    included: [
      "Full-time engineer integration",
      "Daily collaboration with your team",
      "Knowledge transfer throughout",
      "Flexible scope adjustment",
      "Direct communication channels"
    ],
    ideal: "Security vendors building complex, evolving products"
  },
  {
    icon: Users,
    title: "Specialized Team",
    subtitle: "Standalone development",
    description: "A self-contained Simpity team (devs, RE, QA) building a complex, standalone module.",
    whenToUse: "To accelerate time-to-market for a new feature by outsourcing the most challenging component.",
    timeline: "3-12 months",
    included: [
      "Complete development team",
      "Reverse engineering specialists",
      "Quality assurance included",
      "Project management",
      "Regular milestone deliveries"
    ],
    ideal: "Vendors needing a complex capability built from scratch"
  },
  {
    icon: Package,
    title: "Project Delivery",
    subtitle: "Fixed-scope engagement",
    description: "A fixed-scope engagement for a PoC, a specific module, or resolving a critical compatibility issue.",
    whenToUse: "A low-risk way to validate a technical approach or solve an urgent, isolated problem.",
    timeline: "1-4 months",
    included: [
      "Defined deliverables",
      "Fixed timeline",
      "Complete documentation",
      "Source code handover",
      "Post-delivery support period"
    ],
    ideal: "Vendors validating approaches or solving specific issues"
  }
];

const securityPractices = [
  "All engagements covered by strict NDA",
  "Secure development lifecycle (SDL) followed",
  "Code reviews and static analysis on all deliverables",
  "Secure data handling and storage",
  "No vendor lock-in - full source code ownership"
];

export default function Engagement() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// ENGAGEMENT MODELS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Flexible Engagement Models
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the engagement structure that fits your project scope, 
              timeline, and team dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <model.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{model.title}</h2>
                    <p className="text-sm text-muted-foreground">{model.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {model.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-primary mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Timeline: {model.timeline}</span>
                </div>

                <div className="p-4 rounded-lg bg-background border border-border mb-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">When to use: </span>
                    {model.whenToUse}
                  </p>
                </div>

                <div className="mb-6 flex-1">
                  <h3 className="text-sm font-semibold text-foreground mb-3">What&apos;s Included</h3>
                  <ul className="space-y-2">
                    {model.included.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">Ideal for: </span>
                    {model.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Security & Confidentiality
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              All engagements follow strict security and confidentiality practices.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {securityPractices.map((practice) => (
                <div
                  key={practice}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{practice}</span>
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
              Not Sure Which Model Fits?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss your project requirements and find the right engagement structure.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
