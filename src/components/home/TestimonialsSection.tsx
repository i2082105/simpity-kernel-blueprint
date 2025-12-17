import { Quote, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jürgen Schimpf",
    title: "Managing Director & Inventor",
    company: "Vario Suite (Germany)",
    quote:
      "Since 2017 I have had the great luck to work with a highly professional team. There are sharp professionals who immediately understand and implement what I want to have implemented. They have saved my project and we will continue to perfect it in order to offer customers the best on the market.",
  },
  {
    name: "Rolandas Zakarevičius",
    title: "CEO",
    company: "UAB Visata (Lithuania)",
    quote:
      "Your hard work and dedication helped us complete the project successfully — on time, on budget and with high quality. Through your participation in the Web-based ERP-System development our customer is satisfied. It is a joy for me to work with such professional and talented colleagues.",
  },
  {
    name: "Kevin Foisy",
    title: "President & Founder",
    company: "UC Clearly Inc. / STEALTHbits (Canada)",
    quote:
      "The team delivered technically proficient, low-level, complex design work well beyond the skills of many developers I had employed in the past. In addition to technical skillset, their ability to plan and deliver on-time stood out. I highly recommend Simpity.",
  },
  {
    name: "Boris Droutman",
    title: "CTO",
    company: "Shoedazzle (USA)",
    quote:
      "It was a great pleasure working with Simpity Ltd. All deadlines were met, we stayed within budget and all deliverables were of top notch quality. During the whole engagement we always felt in complete control.",
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

        <Carousel
          className="relative max-w-5xl mx-auto"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="md:-ml-4 lg:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group flex flex-col justify-between">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />

                  <p className="text-foreground mb-6 leading-relaxed">
                    “{testimonial.quote}”
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2 rotate-45" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

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
