import { Layout } from "@/components/layout/Layout";
import { Shield, Lock, Server, Eye, FileCheck, AlertTriangle } from "lucide-react";

export default function Security() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Security</h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              At Simpity, security is at the core of everything we do. As a company specializing in deep Windows security engineering, we apply the same rigorous standards to protecting our own infrastructure and your data.
            </p>

            <div className="space-y-12">
              <section className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Data Protection</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  All data transmitted to and from our website is encrypted using industry-standard TLS 1.3 encryption. We implement strict access controls and follow the principle of least privilege across all our systems. Personal data is processed in accordance with GDPR requirements and stored within the European Economic Area.
                </p>
              </section>

              <section className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Infrastructure Security</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our infrastructure is hosted in secure data centers located in Germany, meeting the highest European standards for physical and network security. We employ multi-layered security measures including firewalls, intrusion detection systems, and continuous monitoring to protect against unauthorized access and threats.
                </p>
              </section>

              <section className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Secure Development</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our development processes follow secure coding practices and undergo regular security reviews. All code changes are subject to peer review and automated security scanning before deployment. We maintain a Microsoft-signed driver pipeline, ensuring our kernel-level components meet the strictest security requirements.
                </p>
              </section>

              <section className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Monitoring & Response</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain 24/7 security monitoring and have established incident response procedures to quickly address any security events. Our team stays current with the latest security advisories and patches, with a proven track record of 24-48 hour response time to critical Windows security updates (Patch Tuesday resilience).
                </p>
              </section>

              <section className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Compliance & Certifications</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain compliance with relevant data protection regulations including GDPR. Our security practices are designed to meet the requirements of Fortune 500 enterprises. All client engagements are protected by comprehensive NDAs, and we operate under strict confidentiality protocols.
                </p>
              </section>

              <section className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Vulnerability Disclosure</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  If you believe you have discovered a security vulnerability in our systems, please report it responsibly by contacting us at <a href="mailto:info@simpity.eu" className="text-primary hover:text-primary/80">info@simpity.eu</a>. We appreciate the security research community's efforts in helping us maintain a secure environment and will acknowledge responsible disclosures.
                </p>
              </section>

              <section className="mt-12 p-8 bg-muted/30 rounded-lg">
                <h2 className="text-xl font-semibold text-foreground mb-4">Questions About Security?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our security practices or would like to discuss security requirements for your project, please contact us at <a href="mailto:info@simpity.eu" className="text-primary hover:text-primary/80">info@simpity.eu</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
