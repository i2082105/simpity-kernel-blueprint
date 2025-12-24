import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ExchangeCapability() {
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
              Microsoft Exchange Security Instrumentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Monitoring and blocking sensitive Microsoft Exchange actions through low-level 
              instrumentation, without relying on mailbox-level logs only.
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
                Exchange administrators and compromised service accounts can access sensitive 
                mailboxes without generating complete audit trails. Standard mailbox audit logs 
                can be disabled or circumvented. Delegate access, full access permissions, and 
                administrative cmdlets provide paths to sensitive data that evade monitoring.
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
                We instrument Exchange at the process level, intercepting operations before 
                they reach standard logging mechanisms. This provides visibility into administrative 
                access patterns, delegate operations, and authentication paths that bypass 
                mailbox-level auditing.
              </p>
              <ul className="space-y-4">
                {[
                  "Detect and block administrative mailbox access",
                  "Detect delegate logons and privilege misuse",
                  "Monitor critical Exchange authentication paths",
                  "Low-level instrumentation beyond standard logs"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Monitored Operations</h3>
              <ul className="space-y-4">
                {[
                  { point: "ApplicationImpersonation", desc: "Detect service accounts accessing mailboxes on behalf of applications" },
                  { point: "Full Access Delegates", desc: "Monitor mailbox access using delegated permissions" },
                  { point: "Admin Cmdlet Execution", desc: "Track New-MailboxExportRequest, Search-Mailbox, and similar" },
                  { point: "EWS/MAPI Operations", desc: "Intercept programmatic access to mailbox contents" },
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
                title: "Process Instrumentation",
                description: "Inject into Exchange worker processes to intercept Store operations, authentication events, and RPC calls before they reach the information store."
              },
              {
                title: "Transport Agent Integration",
                description: "Deploy custom transport agents to monitor message flow, detect data exfiltration patterns, and enforce routing policies at the MTA layer."
              },
              {
                title: "RBAC Monitoring",
                description: "Track Exchange management role assignments, cmdlet execution, and permission changes that could enable unauthorized access."
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
              Secure Your Exchange Infrastructure
            </h2>
            <p className="text-muted-foreground mb-8">
              Discuss your requirements for Exchange security monitoring and instrumentation.
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
