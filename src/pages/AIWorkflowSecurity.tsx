import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert, Users, Zap, Clock, CheckCircle2, Map, FileCheck, Fingerprint } from "lucide-react";

const risks = [
  {
    icon: ShieldAlert,
    title: "Sensitive data leaks into AI tools",
    text: "Employees paste confidential information into prompts, upload internal files, summarize customer data, or move sensitive context into AI workspaces faster than governance catches up.\n\nEven when the vendor is approved, the company still needs its own control over what should or should not enter those workflows.",
  },
  {
    icon: Users,
    title: "Identity and permissions become messy",
    text: "As AI tools connect to enterprise accounts, workspaces, knowledge bases, and internal systems, the real question becomes: who can access what, from where, and with which level of privilege?\n\nVendor settings alone rarely give a complete answer at the workflow level.",
  },
  {
    icon: Zap,
    title: "AI-enabled workflows trigger unsafe actions",
    text: 'The biggest risk is not only "bad output." It is trusted workflows making the wrong action easier: exposing data, overusing permissions, or moving through a business process nobody fully reviewed.\n\nThat is where runtime control and hardening matter more than policy documents.',
  },
  {
    icon: Clock,
    title: "Security review lags behind rollout speed",
    text: "By the time security starts asking the right questions, teams may already be using AI in day-to-day work or embedding it into product features.\n\nThis creates a familiar gap: adoption is real, but the highest-risk paths were never properly assessed.",
  },
];

const proposeItems = [
  "Enterprise chat use involving internal documents.",
  "AI assistants connected to internal knowledge.",
  "AI-enabled product features touching identity, access, or sensitive actions.",
  "Workflow automation where no one fully trusts the execution path yet.",
];

const hardenSteps = [
  "Map the data path.",
  "Review identity and permission boundaries.",
  "Identify the real control gaps.",
  "Define concrete hardening steps.",
  "Turn the result into a focused PoC or technical remediation effort.",
];

const deliverables = [
  "AI workflow risk map",
  "Sensitive data path review",
  "OAuth / NHI exposure map",
  "Control gap list and remediation backlog",
  "Computer-use loop abuse scenarios",
  "Audit-ready evidence pack",
];

const buyerPillars = [
  {
    icon: Map,
    title: "Detection Modernization",
    audience: "For CISO and SOC teams",
    text: "Extend UEBA baselines and detection logic for agent behavior, prompt-driven actions, tool execution, and computer-use loops.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Resilience",
    audience: "For compliance and risk owners",
    text: "Translate AI Act Article 26, NIS2 Article 21, DORA ICT risk, and GDPR data exposure into concrete technical evidence.",
  },
  {
    icon: Fingerprint,
    title: "Identity Posture",
    audience: "For IAM and platform leads",
    text: "Review OAuth scopes, non-human identities, agent permissions, and over-privileged access paths around AI workflows.",
  },
];

const whyStrengths = [
  "Sensitive corporate data.",
  "Identity, authentication, authorization, or privileged actions.",
  "Enterprise Windows or Microsoft-centric environments.",
  "Runtime behavior that is hard to validate through policy alone.",
];

const bestFitItems = [
  "CIOs and CISOs who know AI adoption is already happening, but control is still incomplete.",
  "Product and engineering leaders introducing AI-enabled features into sensitive environments.",
  "Security-focused software teams that need a narrow, technical, fixed-scope engagement rather than a large consulting program.",
];

export default function AIWorkflowSecurity() {
  useEffect(() => {
    document.title = "AI Workflow Security | SimpITy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "SimpITy helps companies review and harden risky AI workflows involving enterprise chat tools, internal knowledge, identity, permissions, and sensitive data.");
    }
    return () => {
      document.title = "Simpity | Built Deep for Security";
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// AI WORKFLOW SECURITY</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI Workflow Security
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your employees already use AI tools. Your teams are testing enterprise AI assistants, uploading internal documents, connecting knowledge bases, and experimenting with AI-driven workflows. The real problem is no longer access to AI. It is control over what data goes in, what actions come out, and what security risk that creates.
            </p>
            <p className="text-muted-foreground mb-8">
              SimpITy helps CIOs, CISOs, and product leaders review and harden risky AI workflows before they become incident exposure, compliance pain, or product debt.
            </p>
            <p className="text-muted-foreground mb-10">
              We focus on the engineering side of the problem: identity, runtime behavior, sensitive data paths, permissions, and control points inside real enterprise systems.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Review a risky workflow
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is happening now */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What is happening now
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In many companies, AI adoption starts informally and spreads fast. One team uses ChatGPT. Another tests Claude. Someone uploads internal documents into an enterprise workspace. Someone connects AI to internal knowledge or operational workflows.
              </p>
              <p>
                Very quickly, the company ends up with a mixed environment of AI tools, internal data exposure, and unclear ownership of security boundaries.
              </p>
              <p>
                This is where security leadership starts losing visibility.
              </p>
              <p>
                The issue is not whether AI is useful. The issue is whether the company actually understands where sensitive data flows, how permissions are used, and what risky actions these workflows can trigger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four practical risks */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Four practical risks
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <risk.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {risk.title}
                </h3>
                {risk.text.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-muted-foreground mb-2 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How this is usually handled today */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              How this is usually handled today
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Usually, companies do only part of the job.
              </p>
              <p>
                They approve the vendor, enable SSO, publish a policy, maybe restrict a few settings, and assume the main risk is covered.
              </p>
              <p>
                That helps with procurement and baseline governance.
              </p>
              <p>
                But it does not answer the harder questions:
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "Which workflows expose sensitive data?",
                "Which permissions are too broad?",
                "Which AI-assisted actions need stronger control?",
                "Which risky paths should be hardened before wider rollout?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we propose */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What we propose
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not sell a vague AI transformation project.
            </p>
            <p className="text-muted-foreground mb-6">
              We help you take one risky AI workflow and review it as an engineering problem.
            </p>
            <p className="text-sm font-semibold text-foreground mb-3">That can include:</p>
            <ul className="space-y-2 mb-8">
              {proposeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm font-semibold text-foreground mb-3">For that workflow, we help you:</p>
            <ul className="space-y-2">
              {hardenSteps.map((step) => (
                <li key={step} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why SimpITy */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why SimpITy
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                This problem is not just about AI policy. It is a security engineering problem inside real systems.
              </p>
              <p>
                SimpITy brings custom cybersecurity expertise grounded in identity security, data protection, Windows-heavy environments, behavior-based detection, secure code hardening, and engineering for sensitive corporate contexts since 2011.
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground mb-3">We are most useful when the workflow touches:</p>
            <ul className="space-y-2">
              {whyStrengths.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Best fit */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Best fit
            </h2>
            <p className="text-muted-foreground mb-4">This page is most relevant for:</p>
            <ul className="space-y-2">
              {bestFitItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Attack Hub bridge */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl rounded-xl bg-background border border-border p-8">
            <p className="text-sm font-mono text-primary mb-4">// AI AGENT ATTACK HUB</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore the attack model before the workflow review
            </h2>
            <p className="text-muted-foreground mb-6">
              The hub maps agent attack anatomy, OAuth abuse, prompt injection, unmanaged AI tools, recent signals, and a self-assessment for teams that need to understand where their AI exposure starts.
            </p>
            <Link to="/ai-agent-attack-hub">
              <Button variant="hero-outline" size="lg">
                Open AI Agent Attack Hub
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Before AI becomes your next unmanaged workflow
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If your teams are already using enterprise AI tools, uploading internal knowledge, or adding AI-enabled flows to products and operations, we can help review one risky workflow and harden it before it becomes a bigger security problem.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Review one risky workflow
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
