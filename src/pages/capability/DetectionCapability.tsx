import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Activity, CheckCircle2, AlertTriangle } from "lucide-react";

export default function DetectionCapability() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <Link to="/capabilities" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Capabilities
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Activity className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-mono text-primary">// CAPABILITY</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Behavior-Based Detection
              </h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Real-time analysis of user behavior, logon patterns, and file activity 
            to detect threats that signature-based solutions miss.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 bg-destructive/5 border-y border-destructive/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-4xl">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">The Challenge</h2>
              <p className="text-muted-foreground">
                Attackers using legitimate credentials and living-off-the-land techniques 
                evade traditional signature-based detection. Standard security tools 
                fail to distinguish between normal user activity and malicious behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Approach
              </h2>
              <p className="text-muted-foreground mb-6">
                We build behavioral detection engines that analyze patterns across 
                user activity, authentication events, and file operations to identify 
                anomalies indicating compromise.
              </p>
              <div className="space-y-4">
                {[
                  "User logon pattern analysis for anomalous access detection",
                  "File activity monitoring for data exfiltration indicators",
                  "Process behavior correlation for lateral movement detection",
                  "Timing and frequency analysis for automated attack identification",
                  "Context-aware alerting to minimize false positives"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Behavioral Indicators
              </h3>
              <p className="text-muted-foreground mb-4">
                Our detection focuses on actionable behavioral signals:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Logon Anomalies</strong> — Unusual times, locations, or authentication patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">File Access Patterns</strong> — Mass downloads, unusual file types, or access to sensitive directories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Process Chains</strong> — Suspicious parent-child process relationships and command patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Network Activity</strong> — Unusual connection patterns or data transfer volumes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Depth */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Technical Implementation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">01</span>
              <h3 className="font-semibold text-foreground mb-2">Baseline Establishment</h3>
              <p className="text-sm text-muted-foreground">
                Build behavioral profiles for users, systems, and applications 
                to establish normal activity patterns for accurate anomaly detection.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">02</span>
              <h3 className="font-semibold text-foreground mb-2">Real-Time Correlation</h3>
              <p className="text-sm text-muted-foreground">
                Correlate events across logon, file, process, and network activity 
                to identify attack patterns invisible to single-source analysis.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">03</span>
              <h3 className="font-semibold text-foreground mb-2">Contextual Alerting</h3>
              <p className="text-sm text-muted-foreground">
                Evaluate anomalies against user context, time, and business activity 
                to deliver high-fidelity alerts that security teams can act on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Behavioral Detection?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how behavior-based detection can enhance your threat detection product.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}