import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, RefreshCw, CheckCircle2, AlertTriangle } from "lucide-react";

export default function PatchTuesdayCapability() {
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
              <RefreshCw className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-mono text-primary">// CAPABILITY</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Patch Tuesday Resilience
              </h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Systematic reverse engineering and rapid adaptation to Windows updates 
            ensures your security components remain operational within 24-48 hours of any release.
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
                Windows updates frequently change undocumented internals that security products depend on. 
                Agents relying on static offsets or undocumented structures break unpredictably, 
                leaving customers unprotected for days or weeks after each Patch Tuesday.
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
                We combine systematic reverse engineering with self-adapting architecture 
                to ensure rapid recovery from any Windows update.
              </p>
              <div className="space-y-4">
                {[
                  "Continuous monitoring of Windows Insider and beta channels",
                  "Systematic reverse engineering using IDA Pro, Ghidra, and WinDbg",
                  "Dynamic offset resolution instead of hardcoded values",
                  "Self-adapting engines that locate structures at runtime",
                  "Automated testing across all supported Windows versions"
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
                24-48 Hour Recovery Guarantee
              </h3>
              <p className="text-muted-foreground mb-4">
                Our systematic approach ensures rapid adaptation:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Pre-release analysis</strong> — We analyze Windows Insider builds before public release</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Automated detection</strong> — Systems flag structural changes immediately upon update availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Rapid re-engineering</strong> — Expert team adapts components within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Verified deployment</strong> — Full regression testing before customer rollout</span>
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
              <h3 className="font-semibold text-foreground mb-2">Continuous Analysis</h3>
              <p className="text-sm text-muted-foreground">
                We maintain detailed maps of LSASS, Kerberos, AD, and file system internals, 
                updated with every Windows release to track all structural changes.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">02</span>
              <h3 className="font-semibold text-foreground mb-2">Dynamic Resolution</h3>
              <p className="text-sm text-muted-foreground">
                Self-adapting engines programmatically locate critical data structures 
                after each system boot, eliminating dependency on static offsets.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">03</span>
              <h3 className="font-semibold text-foreground mb-2">Multi-Version Testing</h3>
              <p className="text-sm text-muted-foreground">
                Automated test infrastructure validates compatibility across all supported 
                Windows versions, including HVCI/WDAC environments.
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
              Tired of Post-Update Breakages?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how our Patch Tuesday resilience can eliminate your compatibility issues.
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