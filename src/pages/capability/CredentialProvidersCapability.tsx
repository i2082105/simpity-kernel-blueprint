import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CredentialProvidersCapability() {
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
              Windows Credential Providers Engineering
            </h1>
            <p className="text-xl text-muted-foreground">
              Low-level customization and wrapping of Windows Credential Providers to control 
              and extend authentication behavior without breaking OS stability.
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
                Windows Credential Providers operate at a critical point in the authentication 
                chain. The interfaces are partially documented, behavior varies across Windows 
                versions, and incorrect implementation can lock users out of their systems. 
                Standard development practices cannot safely operate in this space.
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
                We develop Credential Providers that wrap or chain with existing providers, 
                enabling custom authentication logic without replacing the underlying infrastructure. 
                Our implementations handle edge cases across Windows versions and survive OS updates.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom logon UI behavior with proper tile rendering",
                  "Wrapping and chaining existing credential providers",
                  "Safe integration into Windows authentication flow",
                  "Stable operation across Windows 10/11 and Server editions"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Implementation Capabilities</h3>
              <ul className="space-y-4">
                {[
                  { point: "Multi-Factor Integration", desc: "Chain MFA with existing password providers" },
                  { point: "Custom Logon Scenarios", desc: "Smart card, biometric, and hybrid flows" },
                  { point: "Provider Wrapping", desc: "Intercept and modify credentials pre/post authentication" },
                  { point: "Remote Desktop Support", desc: "Proper CredUI and Network logon handling" },
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
                title: "ICredentialProvider Interface",
                description: "Full implementation of V1 and V2 interfaces with proper COM registration, thread handling, and serialization for credential tiles."
              },
              {
                title: "Provider Chaining",
                description: "Wrap existing providers to intercept SetSerialization and GetSerialization, enabling credential injection, transformation, or blocking."
              },
              {
                title: "LogonUI Integration",
                description: "Correct handling of credential tile lifecycle, UI field updates, and asynchronous events across interactive and remote sessions."
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
              Custom Authentication Flow Required?
            </h2>
            <p className="text-muted-foreground mb-8">
              Discuss your requirements for Windows Credential Provider development.
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
