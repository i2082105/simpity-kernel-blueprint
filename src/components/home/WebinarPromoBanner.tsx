import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, Users } from "lucide-react";
import { computeTaken } from "@/components/webinar/StickySeatsBar";

const TOTAL_SEATS = 60;

export function WebinarPromoBanner() {
  const taken = computeTaken();
  const left = TOTAL_SEATS - taken;
  const pct = Math.round((taken / TOTAL_SEATS) * 100);

  return (
    <section className="border-y border-primary/30 bg-gradient-to-r from-primary/10 via-background to-primary/10">
      <div className="container mx-auto px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-primary/40 bg-primary/10">
              <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-primary">
                LIVE WEBINAR · SEPT 17 · 17:00 CEST / 11:00 AM ET · 60 MIN
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
              Your Security Boundary Is Not Where You Think It Is
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Watch a local admin turn into Domain Admin using only documented
              Windows APIs — no exploit, no stolen password, every control
              still green. Plus a local AI memory leak, a password-policy
              bypass, and an AI agent against kernel-level protection. Live, on
              real systems.
            </p>
          </div>

          <div className="lg:w-[320px] shrink-0">
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-foreground">
                  {left} of {TOTAL_SEATS} seats left
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden mb-4">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <Link to="/webinar/soc-already-lost" className="block">
                <Button variant="hero" size="lg" className="w-full">
                  Reserve My Seat
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Free · Recording sent to every registrant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
