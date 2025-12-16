import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const technologies = [
  { category: "Windows Security", items: ["HVCI", "WDAC", "Credential Guard"] },
  { category: "Active Directory", items: ["Large-Scale (500+ DCs)", "600K+ Users"] },
  { category: "Authentication", items: ["Kerberos", "NTLM", "LSASS Internals"] },
  { category: "Kernel Development", items: ["WDM/WDF", "Callbacks", "Hooks"] },
  { category: "File Systems", items: ["NTFS Minifilters", "IRP Analysis"] },
  { category: "NAS Storage", items: ["NetApp", "EMC"] },
];

export function TechStackPreview() {
  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-mono text-primary mb-4">// SUPPORTED TECHNOLOGIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert-Level Windows Internals Coverage
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Deep expertise across the Windows security stack, from kernel drivers 
              to enterprise Active Directory deployments. Our engineers operate where 
              documentation ends.
            </p>
            <Link to="/technology" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline">
                View Full Technology Matrix
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Tech grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="p-4 rounded-lg bg-background border border-border"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {tech.category}
                </h4>
                <ul className="space-y-1">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
