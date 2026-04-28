import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  FileSearch,
  Fingerprint,
  KeyRound,
  ListChecks,
  Radar,
  ShieldAlert,
  Workflow,
} from "lucide-react";

const attackSteps = [
  "Prompt injection lands in content the agent is allowed to read.",
  "The agent follows the external instruction as part of a trusted workflow.",
  "A connected app or OAuth token is used under a real employee identity.",
  "Enterprise systems record legitimate user activity, not an attacker session.",
  "Sensitive files, records, or decisions are collected, modified, or exposed.",
  "The SIEM sees the user, but lacks agent context for the actual action path.",
];

const techniques = [
  {
    icon: BrainCircuit,
    title: "Prompt injection against connected agents",
    text: "Instructions hidden in tickets, documents, emails, pages, or repositories that the agent is allowed to process.",
  },
  {
    icon: KeyRound,
    title: "OAuth scope abuse",
    text: "Tokens and delegated permissions become the real blast radius when an agent can act through a user account.",
  },
  {
    icon: Workflow,
    title: "Tool and connector over-permissioning",
    text: "Agents receive broad access to files, knowledge bases, SaaS tools, or internal actions before anyone maps the workflow risk.",
  },
  {
    icon: FileSearch,
    title: "Agentic data exfiltration",
    text: "The data path looks like normal search, summarization, export, or assistant activity until the output leaves the boundary.",
  },
  {
    icon: Bot,
    title: "Shadow AI and unmanaged workspaces",
    text: "Employees install a zoo of AI tools with separate retention, identity, connector, and data handling models.",
  },
  {
    icon: Radar,
    title: "Computer-use loop abuse",
    text: "Agents interact with browsers and applications in ways existing controls may only attribute to the logged-in user.",
  },
  {
    icon: Fingerprint,
    title: "NHI and service account confusion",
    text: "Human identity, non-human identity, and agent-mediated activity blur together inside logs and access reviews.",
  },
];

const signals = [
  "Lovable Apr 2026 — agentic development workflows and connected project actions.",
  "Vercel Apr 2026 — AI-assisted deployment and platform automation exposure patterns.",
  "Cursor CVEs Q1 2026 — developer-agent surfaces inside local and repository workflows.",
  "NomShub Apr 2026 — agent-driven discovery and supply-chain style abuse patterns.",
];

const assessment = [
  "Do you know which agents can act through user OAuth?",
  "Can your SIEM distinguish user activity from agent-mediated activity?",
  "Do you inventory AI tools installed by employees outside procurement?",
  "Do you detect excessive OAuth scopes and risky connected apps?",
  "Do you review which knowledge bases and file stores agents can read?",
  "Do you monitor tool calls, exports, summaries, and downstream actions?",
  "Do you separate human identities from non-human and agent identities?",
  "Can DLP see prompt uploads, file ingestion, and assistant output paths?",
  "Do you have a kill switch for unsafe agent workflows?",
  "Can you prove AI workflow controls to an auditor, regulator, or insurer?",
];

const pillars = [
  {
    title: "Detection Modernization",
    buyer: "CISO / SOC / Detection Engineering",
    text: "Extend UEBA and detection baselines so agent-mediated behavior does not disappear inside normal user activity.",
  },
  {
    title: "Regulatory Resilience",
    buyer: "Compliance / Risk / Legal / CISO",
    text: "Map AI Act Article 26 deployer obligations, NIS2 Article 21 supply-chain expectations, and DORA ICT controls to real workflows.",
  },
  {
    title: "Identity Posture",
    buyer: "IAM / Identity Security / Platform Security",
    text: "Review OAuth scope governance, non-human identity inventory, connected apps, and computer-use loop detection.",
  },
];

export default function AIAgentAttackHub() {
  useEffect(() => {
    document.title = "AI Agent Attack Hub | SimpITy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "AI Agent Attack Hub by SimpITy: attack anatomy, techniques, incident signals, self-assessment, and trust audit entry points for agentic AI risk."
      );
    }
    return () => {
      document.title = "Simpity | Built Deep for Security";
    };
  }, []);

  return (
    <Layout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-primary mb-4">// AI AGENT ATTACK HUB</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AI Agent Attack Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                AI agents do not just answer prompts. They inherit user identity, call tools, move data, and create activity your SIEM may attribute to a legitimate employee.
              </p>
              <p className="text-muted-foreground mb-8">
                This hub maps the attack anatomy, techniques, incident signals, and control questions behind agentic AI risk — so security, identity, and compliance teams can recognize the problem before the first incident review.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Assess Your Agent Exposure
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="#anatomy">
                  <Button variant="hero-outline" size="lg">
                    Explore Attack Anatomy
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-card border border-border p-6">
              <p className="text-xs font-mono text-primary mb-4">THE BLIND SPOT</p>
              <div className="space-y-4">
                {[
                  ["Identity", "Agent acts through a real user account"],
                  ["Telemetry", "Logs show user activity without agent context"],
                  ["Data", "Files and prompts cross unclear boundaries"],
                  ["Control", "Policy exists, workflow controls do not"],
                ].map(([label, text]) => (
                  <div key={label} className="border-l border-primary/40 pl-4">
                    <p className="font-semibold text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="anatomy" className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Anatomy of an AI Agent Attack</h2>
            <p className="text-muted-foreground">
              The dangerous part is not only the malicious prompt. It is the normal-looking chain of identity, tools, data access, and telemetry that follows.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attackSteps.map((step, index) => (
              <div key={step} className="rounded-xl bg-background border border-border p-5">
                <p className="text-xs font-mono text-primary mb-3">STEP {String(index + 1).padStart(2, "0")}</p>
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Attack Techniques</h2>
            <p className="text-muted-foreground">
              These are the recurring categories we track when AI agents become connected to enterprise identity, data, developer tools, and business workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique) => (
              <article key={technique.title} className="rounded-xl bg-card border border-border p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <technique.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{technique.title}</h3>
                <p className="text-sm text-muted-foreground">{technique.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-mono text-primary mb-4">// RECENT SIGNALS</p>
              <h2 className="text-3xl font-bold text-foreground mb-6">Incidents and signals worth tracking</h2>
              <p className="text-muted-foreground mb-6">
                The categories are moving faster than traditional governance cycles. Treat these as signals to investigate, validate, and convert into control questions for your own stack.
              </p>
              <ul className="space-y-3">
                {signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldAlert className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-background border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <ListChecks className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Self-Assessment</h3>
              </div>
              <div className="space-y-3">
                {assessment.map((question) => (
                  <p key={question} className="text-sm text-muted-foreground border-b border-border pb-3 last:border-b-0 last:pb-0">
                    {question}
                  </p>
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground mt-6">
                If you answer “no” to more than three questions, start with an AI Agent Trust Audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Three entry points for the same risk</h2>
            <p className="text-muted-foreground">
              AI agent exposure looks different depending on who owns the problem. The control work connects detection, regulation, and identity posture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-xl bg-card border border-border p-6">
                <p className="text-xs font-mono text-primary mb-3">{pillar.buyer}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Turn the attack model into a control plan
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We review one agentic workflow end-to-end: data paths, OAuth scopes, identity boundaries, logs, tool calls, and the controls needed to make it auditable and insurable.
            </p>
            <Link to="/ai-workflow-security">
              <Button variant="hero" size="xl">
                Review One Agent Workflow
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}