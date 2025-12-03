import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Lock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Deep Security Engineering</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            Engineering Security at the{" "}
            <span className="text-gradient">Undocumented Layer</span>{" "}
            of Windows
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up stagger-1">
            We solve problems where documentation ends and reverse engineering begins. 
            Trusted by teams building EDR, ITDR, AD Security, DSPM, DLP, PAM, and endpoint agents.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up stagger-2">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/capabilities">
              <Button variant="hero-outline" size="xl">
                Explore Capabilities
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up stagger-3">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">500+ DCs</p>
                <p className="text-xs text-muted-foreground">Enterprise Scale</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">24-48h</p>
                <p className="text-xs text-muted-foreground">Patch Tuesday Response</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">HVCI/WDAC</p>
                <p className="text-xs text-muted-foreground">Compatible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
