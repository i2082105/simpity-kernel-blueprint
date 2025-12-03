import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Shield, CheckCircle2, AlertTriangle } from "lucide-react";

export default function KernelCapability() {
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
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-mono text-primary">// CAPABILITY</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Kernel-Level Interception & Enforcement
              </h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Intercept and block malicious operations inside the OS execution path, 
            providing true pre-execution prevention at the kernel level.
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
                Standard security solutions operate too late in the execution chain. By the time 
                user-mode agents detect a threat, malicious code has already executed. Sophisticated 
                attacks bypass endpoint detection entirely by operating below the detection layer.
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
                We develop kernel-mode drivers that intercept system operations before 
                they execute. This provides true prevention capabilities—not just detection 
                after the fact.
              </p>
              <div className="space-y-4">
                {[
                  "Process creation callbacks to evaluate executables before launch",
                  "Registry callbacks to block malicious persistence mechanisms",
                  "File system minifilters to prevent unauthorized access",
                  "Network filter drivers to block C2 communication",
                  "Object manager callbacks for handle manipulation monitoring"
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
                Why Competitors Cannot
              </h3>
              <p className="text-muted-foreground mb-4">
                Kernel development requires deep expertise in Windows internals that most 
                security vendors lack. Additionally:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Microsoft driver signing requirements create high barriers to entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>HVCI/WDAC environments require specialized development approaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Kernel bugs cause BSODs—stability requires extensive experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Performance impact must be minimized—requires optimization expertise</span>
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
              <h3 className="font-semibold text-foreground mb-2">Callback Registration</h3>
              <p className="text-sm text-muted-foreground">
                We register kernel callbacks for process, thread, image load, registry, 
                and object operations using documented and undocumented interfaces.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">02</span>
              <h3 className="font-semibold text-foreground mb-2">Policy Engine</h3>
              <p className="text-sm text-muted-foreground">
                A high-performance policy engine evaluates each operation against 
                configurable rules, making allow/block decisions in microseconds.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">03</span>
              <h3 className="font-semibold text-foreground mb-2">Enforcement</h3>
              <p className="text-sm text-muted-foreground">
                Blocked operations are terminated before execution. The calling process 
                receives appropriate error codes while security events are logged.
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
              Need Kernel-Level Protection?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how kernel-mode enforcement can strengthen your security product.
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
