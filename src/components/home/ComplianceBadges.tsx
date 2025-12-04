import { Shield, Lock, FileCheck, Award } from "lucide-react";

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

export function ComplianceBadges() {
  return (
    <section className="py-12 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
