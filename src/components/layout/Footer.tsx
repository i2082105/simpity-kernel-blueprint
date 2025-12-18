import { Link } from "react-router-dom";
import { Mail, ArrowRight, Shield, FileCheck, Building2, Clock, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Capabilities", href: "/capabilities" },
  { name: "Technology", href: "/technology" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const trustBadges = [
  { icon: Shield, text: "NDA-protected engagements" },
  { icon: FileCheck, text: "Microsoft-signed driver pipeline" },
  { icon: Building2, text: "Used in Fortune 500 environments" },
  { icon: Clock, text: "Patch Tuesday resilience (24–48h)" },
];

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("light-dark");
    } else if (theme === "light-dark") {
      setTheme("mixed");
    } else {
      setTheme("dark");
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Discuss Your Security Engineering Challenge
              </h3>
              <p className="text-muted-foreground text-sm">
                Deep technical expertise for complex Windows security requirements.
              </p>
            </div>
            <Button asChild variant="default" size="lg" className="group">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Block */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-semibold text-foreground tracking-tight">Simpity</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Deep Windows Security Engineering since 2007.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>Microsoft-signed kernel development</li>
              <li>HVCI/WDAC compatible</li>
              <li>500+ DC scale</li>
              <li>24–48h Patch Tuesday recovery</li>
            </ul>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/company/simpity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/HQSimpity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Review our corporate brochure{" "}
                <a
                  href="/brochures/Simpity_Deep_Security_Engineering.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Why Simpity
            </h4>
            <ul className="space-y-3">
              {trustBadges.map((badge) => (
                <li key={badge.text} className="flex items-start gap-2">
                  <badge.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{badge.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Offices */}
          <div>
            <p className="text-sm font-medium text-foreground mb-4">
              Simpity | A GP Solutions Company
            </p>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Offices
            </h4>
            <div className="space-y-6">
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Germany</p>
                <p className="text-muted-foreground leading-relaxed">
                  Lise-Meitner Straße 1<br />
                  85716 Unterschleißheim
                </p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Poland</p>
                <p className="text-muted-foreground leading-relaxed">
                  The Warsaw Hub B<br />
                  Rondo Daszyńskiego 2B<br />
                  00-843 Warsaw
                </p>
              </div>
            </div>
            <a 
              href="mailto:info@simpity.eu" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium mt-6"
            >
              <Mail className="w-4 h-4" />
              info@simpity.eu
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              <button
                onClick={toggleTheme}
                className="hover:text-foreground transition-colors cursor-pointer inline-block bg-transparent border-0 p-0 font-inherit text-inherit"
                aria-label="Toggle theme"
                title={mounted ? `Switch to ${theme === "dark" ? "light" : theme === "light" ? "light-dark" : theme === "light-dark" ? "mixed" : "dark"} theme` : "Toggle theme"}
              >
                ©
              </button>
              {" "}2007-{new Date().getFullYear()}  Simpity division at GP Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <button 
                onClick={() => {
                  localStorage.removeItem("cookieConsent");
                  window.location.reload();
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
