import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessInjectionCapability() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <Link to="/capabilities" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Capabilities
          </Link>
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// CAPABILITY</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              System Process Injection & API Interception
            </h1>
            <p className="text-xl text-muted-foreground">
              Injection into system processes to intercept internal Windows API calls at runtime, 
              enabling real-time visibility and enforcement inside trusted execution paths.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Challenge</h2>
            <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/10">
              <p className="text-muted-foreground">
                Standard security monitoring operates outside the trusted process context. External 
                observation cannot capture internal API calls, their parameters, or the execution 
                context. Attackers leverage this blind spot by operating within system processes 
                where their actions blend with legitimate operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Approach</h2>
              <p className="text-muted-foreground mb-6">
                We inject monitoring logic directly into system processes, intercepting API calls 
                at the point of invocation. This provides visibility into operations that external 
                monitoring cannot observe, including internal function calls, parameter values, and 
                the security context of each operation.
              </p>
              <ul className="space-y-4">
                {[
                  "Intercept internal API calls via inline hooks and IAT patching",
                  "Capture real parameter values before execution begins",
                  "Block or allow calls based on policy evaluation in real time",
                  "Execute detection logic inside the security context of the intercepted thread"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Interception Points</h3>
              <ul className="space-y-4">
                {[
                  { point: "NTDLL Syscall Layer", desc: "Capture system calls before kernel transition" },
                  { point: "Win32 API Wrappers", desc: "Monitor high-level API usage patterns" },
                  { point: "COM/RPC Interfaces", desc: "Intercept inter-process communication" },
                  { point: "Internal Undocumented APIs", desc: "Access calls hidden from standard tooling" },
                ].map((item) => (
                  <li key={item.point} className="p-4 rounded-lg bg-background border border-border">
                    <span className="font-medium text-foreground">{item.point}</span>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Technical Implementation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Safe Injection",
                description: "Inject into protected processes without triggering PPL violations or anti-cheat detection. Handle process initialization timing and thread synchronization correctly."
              },
              {
                title: "Hook Stability",
                description: "Implement hooks that survive module reloads, handle concurrent execution, and maintain integrity across Windows updates. Self-healing hook mechanisms."
              },
              {
                title: "Context Preservation",
                description: "Preserve the complete execution context including registers, stack state, and TEB/PEB values. Enable accurate policy decisions based on full call context."
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Process-Level Visibility?
            </h2>
            <p className="text-muted-foreground mb-8">
              Discuss your requirements for internal API monitoring and process instrumentation.
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
