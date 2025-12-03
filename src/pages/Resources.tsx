import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowRight, Shield, Cpu, Calendar, Book } from "lucide-react";

const resources = [
  {
    icon: Book,
    title: "Simpity Deep Security Engineering Overview",
    description: "Comprehensive overview of our capabilities, methodology, and engagement models.",
    type: "PDF",
    category: "Overview"
  },
  {
    icon: Cpu,
    title: "Architectural Overview: Kernel-Level Interception",
    description: "Technical deep-dive into our approach to kernel-mode interception and enforcement.",
    type: "PDF",
    category: "Architecture"
  },
  {
    icon: Calendar,
    title: "Methodology: Our Patch Tuesday Response Process",
    description: "How we achieve 24-48 hour recovery cycles after Microsoft updates.",
    type: "PDF",
    category: "Methodology"
  },
  {
    icon: Shield,
    title: "Technical Deep Dive: Instrumenting LSASS Safely",
    description: "Our approach to safe LSASS instrumentation for authentication monitoring.",
    type: "PDF",
    category: "Technical"
  }
];

const categories = [
  { name: "All", count: 4 },
  { name: "Overview", count: 1 },
  { name: "Architecture", count: 1 },
  { name: "Methodology", count: 1 },
  { name: "Technical", count: 1 },
];

export default function Resources() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-primary mb-4">// RESOURCES</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Engineering briefs, architecture overviews, and technical documentation 
              for security professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-xl bg-card border border-border sticky top-24">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                        <span>{category.name}</span>
                        <span className="text-xs bg-secondary px-2 py-0.5 rounded">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources List */}
            <div className="lg:col-span-3 space-y-6">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {resource.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                        Request Access
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Custom Documentation?
            </h2>
            <p className="text-muted-foreground mb-8">
              We can provide detailed technical briefs specific to your requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Custom Brief
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
