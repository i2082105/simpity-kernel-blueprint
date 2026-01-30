import { Shield, Lock, FileCheck, Award, Star, ExternalLink } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    name: "NDA Protected",
    description: "All engagements covered",
  },
  {
    icon: Lock,
    name: "Secure Development",
    description: "Air-gapped environments",
  },
  {
    icon: FileCheck,
    name: "Microsoft Signed",
    description: "Trusted driver pipeline",
  },
  {
    icon: Award,
    name: "Enterprise Ready",
    description: "Fortune 500 proven",
  },
];

const partnerships = [
  {
    name: "Clutch",
    rating: "5.0",
    reviews: "24 reviews",
    link: "https://clutch.co/profile/gp-solutions",
    description: "Premier Verified",
  },
  {
    name: "Netwrix",
    type: "Technology Partner",
    link: "https://netwrix.com/en/partners/",
    description: "Security Solutions",
  },
];

export function ComplianceBadges() {
  return (
    <section className="py-12 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <cert.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Partner Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-border">
          {partnerships.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/30 border border-border hover:border-primary/40 hover:bg-muted/50 transition-all"
            >
              {partner.rating ? (
                // Clutch badge
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-sm font-semibold text-foreground">{partner.name}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">{partner.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{partner.reviews}</span>
                </div>
              ) : (
                // Netwrix badge
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-sm font-semibold text-foreground">{partner.name}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs text-primary font-medium">{partner.type}</span>
                  <span className="text-xs text-muted-foreground">{partner.description}</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
