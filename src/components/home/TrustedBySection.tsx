import { Shield } from "lucide-react";

// Placeholder logos - in production these would be actual client logos
const trustedCompanies = [
  { name: "Enterprise EDR Vendor", sector: "Endpoint Security" },
  { name: "Fortune 500 ITDR", sector: "Identity Security" },
  { name: "Global PAM Provider", sector: "Access Management" },
  { name: "Leading DLP Platform", sector: "Data Protection" },
  { name: "Major AD Security", sector: "Directory Security" },
];

export function TrustedBySection() {
  return (
    <section className="py-16 border-y border-border bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Security Product Teams
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {trustedCompanies.map((company, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              {/* Placeholder for actual logo */}
              <div className="h-8 px-6 flex items-center justify-center rounded bg-muted/50 border border-border">
                <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {company.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{company.sector}</span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-muted-foreground mt-8">
          Client names protected under NDA • Logos shown with permission
        </p>
      </div>
    </section>
  );
}
