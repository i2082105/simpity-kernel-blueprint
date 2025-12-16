import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "lsass",
    title: "Ensuring Zero-Downtime LSASS Monitoring",
    category: "ITDR Vendor",
    problem: "An Identity Threat Detection & Response (ITDR) vendor's agent which relied on LSASS instrumentation would break for weeks after every major Windows update, damaging their reputation.",
    rootCause: "The agent depended on static memory offsets within LSASS that changed with every Microsoft update. No dynamic adaptation mechanism existed.",
    method: [
      "Re-engineered the module to stop relying on static offsets.",
      "Built a dynamic analysis engine that programmatically identifies the location of critical data structures after each system boot and update.",
      "Made the agent self-adapting to Windows internal changes."
    ],
    outcome: "The time-to-fix for Patch Tuesday compatibility dropped from weeks to a consistent 24-48 hours. Product downtime was eliminated, restoring customer confidence.",
    metric: "Weeks → 48h",
  },
  {
    id: "ransomware",
    title: "Halting Ransomware on NAS Storage",
    category: "EDR Solution",
    problem: "A client's EDR solution was ineffective against ransomware targeting their NetApp NAS. Attacks encrypted critical file shares before the endpoint agent could react, leading to significant data loss.",
    rootCause: "Endpoint-based detection operated too late in the attack chain. By the time the agent detected the threat, encryption was already underway.",
    method: [
      "Developed a behavior-based detection module that analyzes file access patterns for signs of encryption activity, including high-entropy write patterns and rapid file modifications.",
      "Upon detecting anomalous write patterns, the system immediately alerts and terminates the offending process before widespread damage occurs."
    ],
    outcome: "The solution stops ransomware attacks within the first 1-2 seconds of activity. Malicious processes are terminated with near-zero data loss, before widespread file damage can occur.",
    metric: "1-2 sec response",
  },
  {
    id: "dcsync",
    title: "Blocking DCSync Attacks Without Disrupting Admins",
    category: "AD Security Product",
    problem: "An AD security product generated high false positives by blocking legitimate replication and backup tools that behaved similarly to Mimikatz DCSync.",
    rootCause: "Their detection logic was based on simple monitoring of the DrsGetNCChanges API call, which is used by both malicious and legitimate processes. It lacked the context to differentiate intent.",
    method: [
      "Built a detection module that analyzed the full context of the API call.",
      "Evaluated the parent process, call stack, user context, and whether the source was a known domain controller.",
      "Enabled distinction between legitimate replication requests and malicious ones."
    ],
    outcome: "False positives were reduced by over 95%, allowing security teams to focus on real threats while administrators could perform their duties without interruption.",
    metric: "-95% FP",
  },
  {
    id: "hvci",
    title: "Building Agents for HVCI/WDAC Environments",
    category: "Endpoint Security",
    problem: "A security vendor needed to deploy their kernel-mode agent in highly restricted enterprise environments with HVCI and WDAC enforced.",
    rootCause: "Standard driver development approaches failed validation. The agent required Microsoft attestation signing and compliance with strict code integrity requirements.",
    method: [
      "Redesigned the driver architecture for HVCI compliance.",
      "Implemented secure memory allocation patterns.",
      "Navigated the Microsoft driver signing pipeline including HLK testing and WHQL certification."
    ],
    outcome: "The agent successfully deploys in the most restrictive Windows environments, opening access to enterprise customers with strict security policies.",
    metric: "Full HVCI/WDAC support",
  },
  {
    id: "scale",
    title: "Zero-Lag AD Monitoring at Global Scale",
    category: "Enterprise Security",
    problem: "A global enterprise with 500+ domain controllers and 600K+ users required real-time AD monitoring without any performance impact on authentication operations.",
    rootCause: "Existing solutions caused authentication latency spikes during peak hours, impacting business operations and user experience.",
    method: [
      "Developed lightweight monitoring hooks that operate asynchronously.",
      "Implemented efficient data collection with minimal memory footprint.",
      "Built distributed processing architecture to handle the event volume."
    ],
    outcome: "Complete AD visibility across all domain controllers with zero measurable impact on authentication performance.",
    metric: "500+ DCs, 0 lag",
  },
  {
    id: "nas-anomaly",
    title: "Early Detection of NAS Behavioral Anomalies",
    category: "Data Protection",
    problem: "Unauthorized data exfiltration from NAS storage went undetected until significant damage was done. Traditional DLP solutions failed to catch the activity.",
    rootCause: "Detection relied on known patterns. The attack used legitimate access credentials and operated within normal-looking parameters.",
    method: [
      "Built behavioral baselines for normal NAS access patterns.",
      "Implemented anomaly detection for access frequency, timing, and data volume.",
      "Created alerting for deviations that indicated potential exfiltration."
    ],
    outcome: "Early warning system now detects anomalous access patterns within minutes, enabling rapid response before significant data loss.",
    metric: "Minutes to detect",
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// CASE STUDIES</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Engineering Outcomes
            </h1>
            <p className="text-xl text-muted-foreground">
              Real solutions for security product companies facing complex challenges 
              at the Windows internals level.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                id={study.id}
                className="scroll-mt-24"
              >
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-lg font-mono font-bold text-primary">
                      {study.metric}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {study.title}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">Problem</h3>
                        <p className="text-muted-foreground text-sm">{study.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">Root Cause</h3>
                        <p className="text-muted-foreground text-sm">{study.rootCause}</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">Simpity Method</h3>
                        <ul className="space-y-2">
                          {study.method.map((step, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex gap-2">
                              <span className="text-primary font-mono">{i + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <h3 className="text-sm font-semibold text-primary mb-2">Outcome</h3>
                        <p className="text-foreground text-sm">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Facing a Similar Challenge?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our engineering team has solved complex Windows internals problems 
              for security vendors worldwide.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Discuss Your Challenge
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
