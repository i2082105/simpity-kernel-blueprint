import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, KeyRound, CheckCircle2, AlertTriangle } from "lucide-react";

export default function AuthenticationCapability() {
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
              <KeyRound className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-mono text-primary">// CAPABILITY</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Authentication Flow Control
              </h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Deep integration with Windows authentication pipeline for complete visibility 
            and control over credential operations, from Credential Providers to LSASS.
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
                Identity-based attacks exploit gaps in authentication monitoring. Standard solutions 
                lack visibility into the Windows authentication pipeline, missing credential theft, 
                pass-the-hash attacks, and unauthorized authentication attempts at their source.
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
                We instrument the complete Windows authentication stack, providing deep visibility 
                and control at every stage of the authentication process.
              </p>
              <div className="space-y-4">
                {[
                  "Custom Credential Providers for authentication interception at the UI layer",
                  "LogonUI integration for pre-authentication policy enforcement",
                  "LSASS monitoring using controlled instrumentation techniques",
                  "Kerberos and NTLM protocol analysis for anomaly detection",
                  "Session management hooks for post-authentication control"
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
                Authentication Pipeline Coverage
              </h3>
              <p className="text-muted-foreground mb-4">
                Our solutions cover the complete authentication flow:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Credential Providers</strong> — Capture and validate credentials before they enter the system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">LogonUI</strong> — Enforce policies at the Windows logon interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">LSA/LSASS</strong> — Monitor credential operations safely using documented and controlled techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Authentication Packages</strong> — Analyze Kerberos, NTLM, and custom authentication protocols</span>
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
              <h3 className="font-semibold text-foreground mb-2">Credential Provider Framework</h3>
              <p className="text-sm text-muted-foreground">
                Custom credential providers that integrate seamlessly with Windows logon, 
                enabling MFA, conditional access, and credential validation at the entry point.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">02</span>
              <h3 className="font-semibold text-foreground mb-2">Authentication Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Safe instrumentation of authentication subsystems using documented APIs 
                and controlled techniques to detect credential theft and anomalous access.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <span className="text-4xl font-mono font-bold text-primary/20 block mb-4">03</span>
              <h3 className="font-semibold text-foreground mb-2">Protocol Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Deep inspection of Kerberos tickets and NTLM exchanges to detect 
                golden ticket attacks, pass-the-hash, and lateral movement attempts.
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
              Need Authentication Security?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how authentication flow control can strengthen your identity security product.
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