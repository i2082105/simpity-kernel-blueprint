import { Quote, Shield } from "lucide-react";

const testimonials = [
  {
    quote: "Simpity's kernel engineering expertise saved our product after a critical Patch Tuesday broke our driver. They had us back online in under 24 hours.",
    role: "VP of Engineering",
    company: "Enterprise EDR Vendor",
    highlight: "24h recovery",
  },
  {
    quote: "Their deep understanding of LSASS internals allowed us to implement detection capabilities our competitors still can't match.",
    role: "CTO",
    company: "Identity Security Platform",
    highlight: "Competitive advantage",
  },
  {
    quote: "We needed HVCI-compatible agents for government contracts. Simpity delivered a solution that passed Microsoft's strictest requirements.",
    role: "Director of Product",
    company: "PAM Solution Provider",
    highlight: "Government compliant",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary mb-4">// CLIENT FEEDBACK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Security Teams Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering partnerships that deliver measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-medium text-primary">{testimonial.highlight}</span>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2 rotate-45" />
              </div>
            </div>
          ))}
        </div>

        {/* NDA Notice */}
        <div className="mt-12 flex items-center justify-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 max-w-xl mx-auto">
          <Shield className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            All client relationships protected by NDA. Testimonials shared with explicit permission.
          </p>
        </div>
      </div>
    </section>
  );
}
