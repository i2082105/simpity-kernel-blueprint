import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Lock, CheckCircle2 } from "lucide-react";

const technicalProof = [
  "Kernel callbacks and runtime enforcement",
  "LSASS / authentication flow instrumentation",
  "AD, OAuth, and non-human identity boundaries",
  "Patch Tuesday resilience for undocumented APIs",
  "Enterprise-scale behavior detection baselines",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* 50/50 Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Deep Security Engineering since 2007</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
              Engineering Security at the{" "}
              <span className="text-gradient">Undocumented Layer</span>{" "}
              of Windows
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl animate-slide-up stagger-1">
              We solve problems where documentation ends and reverse engineering begins. 
              Trusted by teams building EDR, ITDR, AD Security, DSPM, DLP, PAM, and endpoint agents.
            </p>

            {/* NDA Badge - builds trust early */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-slide-up stagger-1">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-muted-foreground">All engagements protected by NDA</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
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
          </div>

          {/* Right Column - Technical Proof */}
          <div className="relative animate-fade-in lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card/80 shadow-xl">
              <div className="border-b border-border px-6 py-4">
                <p className="text-xs font-mono text-primary mb-2">CONTROL BOUNDARIES</p>
                <h2 className="text-2xl font-bold text-foreground">
                  Built where vendor documentation stops
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {technicalProof.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 border-t border-border">
                {[
                  ["500+", "DCs"],
                  ["24-48h", "Patch response"],
                  ["HVCI", "WDAC aware"],
                ].map(([value, label]) => (
                  <div key={label} className="p-4 border-r border-border last:border-r-0">
                    <p className="text-lg font-bold text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Trust indicators - Full width below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-slide-up stagger-3">
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
    </section>
  );
}
