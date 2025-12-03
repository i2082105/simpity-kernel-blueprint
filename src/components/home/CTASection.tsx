import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Discuss Your Engineering Challenge?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our senior architects are available for confidential technical consultations. 
            All engagements are covered by strict NDA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <Mail className="w-5 h-5" />
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="hero-outline" size="xl">
                <FileText className="w-5 h-5" />
                Access Engineering Briefs
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Email us directly at{" "}
            <a href="mailto:info@simpity.eu" className="text-primary hover:underline">
              info@simpity.eu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
