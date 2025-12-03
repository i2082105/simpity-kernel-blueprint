import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const footerLinks = {
  capabilities: [
    { name: "Kernel-Level Enforcement", href: "/capabilities/kernel" },
    { name: "Authentication Flow Control", href: "/capabilities/authentication" },
    { name: "Patch Tuesday Resilience", href: "/capabilities/patch-tuesday" },
    { name: "File System & NAS Security", href: "/capabilities/filesystem" },
    { name: "Behavior-Based Detection", href: "/capabilities/detection" },
    { name: "Active Directory at Scale", href: "/capabilities/active-directory" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Methodology", href: "/methodology" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Technology", href: "/technology" },
    { name: "Engagement Models", href: "/engagement" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Technical Resources", href: "/resources" },
    { name: "Engineering Briefs", href: "/resources#briefs" },
    { name: "Architecture Overview", href: "/resources#architecture" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-mono font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Simpity</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Deep Windows Security Engineering. Trusted by teams building EDR, ITDR, AD Security, and endpoint agents.
            </p>
            <a 
              href="mailto:info@simpity.eu" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@simpity.eu
            </a>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Capabilities</h4>
            <ul className="space-y-2">
              {footerLinks.capabilities.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Simpity. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Deep Security Engineering for Windows Internals
          </p>
        </div>
      </div>
    </footer>
  );
}
