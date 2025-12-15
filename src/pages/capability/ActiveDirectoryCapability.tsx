import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Network, CheckCircle2, AlertTriangle } from "lucide-react";

export default function ActiveDirectoryCapability() {
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
              <Network className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-mono text-primary">// CAPABILITY</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Active Directory at Scale
              </h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Enterprise-scale AD security with deep analysis of permissions, delegation, 
            and effective rights across complex multi-domain environments.
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
                Enterprise AD environments with hundreds of domain controllers and hundreds of 
                thousands of users create complex permission structures that are impossible 
                to audit manually. Hidden delegation paths and excessive permissions create 
                attack vectors that standard tools cannot identify at scale.
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
                We build AD security solutions that operate at enterprise scale, 
                analyzing complex permission structures and delegation paths 
                across entire forests without impacting authentication performance.
              </p>
              <div className="space-y-4">
                {[
                  "AD permission analysis across multi-domain forests",
                  "Delegation mapping to identify hidden admin paths",
                  "Effective rights calculation for attack path identification",
                  "Real-time monitoring of privilege changes and group modifications",
                  "Zero-impact deployment across 500+ domain controller environments"
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
                Enterprise Scale Proven
              </h3>
              <p className="text-muted-foreground mb-4">
                Our solutions are deployed in the largest AD environments:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">500+ Domain Controllers</strong> — Complete visibility without performance impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">600K+ Users</strong> — Analyze permissions and effective rights for every identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Zero Auth Latency</strong> — Asynchronous monitoring with no measurable impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Multi-Forest Support</strong> — Cross-forest trust analysis and monitoring</span>
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
              <h3 className="font-semibold text-foreground mb-2">Permission Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Deep analysis of discretionary ACLs, system ACLs, and inherited permissions 
                across all AD objects to identify excessive access and misconfigurations.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">02</span>
              <h3 className="font-semibold text-foreground mb-2">Delegation Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Graph-based analysis of delegation relationships to uncover hidden 
                administrative paths and identify unintended privilege escalation routes.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">03</span>
              <h3 className="font-semibold text-foreground mb-2">Effective Rights</h3>
              <p className="text-sm text-muted-foreground">
                Calculate effective permissions considering group memberships, inheritance, 
                and delegation to show actual access each identity has to AD objects.
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
              Need AD Security at Scale?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how our enterprise AD expertise can strengthen your identity security product.
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