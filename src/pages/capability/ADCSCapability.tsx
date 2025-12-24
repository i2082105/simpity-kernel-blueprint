import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ADCSCapability() {
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
              Active Directory Certificate Services (AD CS) Security
            </h1>
            <p className="text-xl text-muted-foreground">
              Detection and prevention of certificate-based attacks abusing AD Certificate Services, 
              including privilege escalation and persistence techniques.
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
                AD CS environments frequently contain misconfigured certificate templates that 
                enable privilege escalation, lateral movement, and persistent access. Traditional 
                monitoring focuses on Kerberos and NTLM while certificate-based authentication 
                paths remain largely unmonitored. Attacks like ESC1-ESC8 exploit these blind spots.
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
                We instrument the certificate enrollment and authentication paths to detect 
                and block abuse of AD CS. Monitoring occurs at the CA server, domain controllers, 
                and endpoints to provide comprehensive visibility into certificate-based operations.
              </p>
              <ul className="space-y-4">
                {[
                  "Detect malicious certificate enrollment patterns",
                  "Prevent abuse of misconfigured templates (ESC1-ESC8)",
                  "Block certificate-based lateral movement",
                  "Monitor for certificate persistence techniques"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Attack Vectors Covered</h3>
              <ul className="space-y-4">
                {[
                  { point: "Template Misconfiguration", desc: "Detect enrollment in templates allowing SAN specification or manager approval bypass" },
                  { point: "NTLM Relay to CA", desc: "Identify certificate requests from relayed authentication" },
                  { point: "Certificate Theft", desc: "Monitor for export of certificates with private keys" },
                  { point: "Shadow Credentials", desc: "Detect msDS-KeyCredentialLink abuse for persistence" },
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
                title: "CA Server Instrumentation",
                description: "Monitor certificate request processing, policy module decisions, and issued certificate properties at the Certificate Authority server."
              },
              {
                title: "PKINIT Monitoring",
                description: "Intercept Kerberos PKINIT authentication at domain controllers to detect certificates used for ticket requests and identify anomalies."
              },
              {
                title: "Template Analysis",
                description: "Real-time evaluation of certificate templates against known vulnerable configurations with automatic detection of dangerous permissions."
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
              Secure Your Certificate Infrastructure
            </h2>
            <p className="text-muted-foreground mb-8">
              Discuss your requirements for AD CS monitoring and attack prevention.
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
