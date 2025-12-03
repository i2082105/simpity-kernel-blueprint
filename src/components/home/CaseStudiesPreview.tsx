import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, TrendingDown } from "lucide-react";

const caseStudies = [
  {
    title: "Zero-Downtime LSASS Monitoring",
    category: "ITDR Vendor",
    problem: "Agent broke for weeks after every major Windows update",
    outcome: "24-48 hour recovery cycle restored customer confidence",
    icon: Clock,
    metric: "Weeks → 48h",
    href: "/case-studies#lsass",
  },
  {
    title: "Halting Ransomware on NAS Storage",
    category: "EDR Solution",
    problem: "Attacks encrypted critical file shares before detection",
    outcome: "Stops attacks within 1-2 seconds with near-zero data loss",
    icon: Shield,
    metric: "1-2 sec",
    href: "/case-studies#ransomware",
  },
  {
    title: "Blocking DCSync Without Disruption",
    category: "AD Security",
    problem: "High false positives blocking legitimate replication",
    outcome: "95% reduction in false positives",
    icon: TrendingDown,
    metric: "-95% FP",
    href: "/case-studies#dcsync",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-mono text-primary mb-4">// CASE STUDIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solving Real Security Challenges
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Engineering outcomes for security product companies facing 
              complex challenges at the Windows internals level.
            </p>
          </div>
          <Link to="/case-studies">
            <Button variant="outline">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              to={study.href}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {study.category}
                </span>
                <span className="text-lg font-mono font-bold text-primary">
                  {study.metric}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Problem:</span> {study.problem}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Outcome:</span> {study.outcome}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
