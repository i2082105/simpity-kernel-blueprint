import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Kernel Callbacks: A Deep Dive into Windows Security Architecture",
    excerpt: "Explore how kernel callbacks work at the deepest level of Windows and why they're essential for modern endpoint security products.",
    author: "Simpity Engineering",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Kernel Engineering",
  },
  {
    id: 2,
    title: "Surviving Patch Tuesday: Our 24-Hour Response Framework",
    excerpt: "How we maintain product stability when Microsoft updates break undocumented APIs — a look at our reverse-engineering methodology.",
    author: "Simpity Engineering",
    date: "2024-11-28",
    readTime: "8 min read",
    category: "Methodology",
  },
  {
    id: 3,
    title: "LSASS Hooking Done Right: Balancing Security and Stability",
    excerpt: "The technical challenges of intercepting authentication flows without triggering Credential Guard or causing system instability.",
    author: "Simpity Engineering",
    date: "2024-11-10",
    readTime: "15 min read",
    category: "Authentication",
  },
  {
    id: 4,
    title: "Building Mimikatz-Proof Defenses Without Breaking Admin Workflows",
    excerpt: "Context-aware detection strategies that stop credential theft while preserving legitimate administrative operations.",
    author: "Simpity Engineering",
    date: "2024-10-22",
    readTime: "10 min read",
    category: "AD Security",
  },
  {
    id: 5,
    title: "Mini-Filter Drivers for NAS Security: NetApp and EMC Integration",
    excerpt: "Technical overview of implementing file system monitoring at the driver level for enterprise storage systems.",
    author: "Simpity Engineering",
    date: "2024-10-05",
    readTime: "14 min read",
    category: "File Systems",
  },
  {
    id: 6,
    title: "Scaling AD Monitoring to 600K+ Users: Architecture Lessons",
    excerpt: "Performance optimization strategies for real-time Active Directory security at enterprise scale.",
    author: "Simpity Engineering",
    date: "2024-09-18",
    readTime: "11 min read",
    category: "Performance",
  },
  {
    id: 7,
    title: "Getting Your Kernel Driver Through Microsoft Code Signing",
    excerpt: "Navigating the WHQL certification process for drivers that use hooking and injection techniques.",
    author: "Simpity Engineering",
    date: "2024-09-02",
    readTime: "9 min read",
    category: "Compliance",
  },
  {
    id: 8,
    title: "Early Ransomware Detection: Blocking After 3-5 File Operations",
    excerpt: "Behavior-based detection patterns that identify encryption attempts before significant damage occurs.",
    author: "Simpity Engineering",
    date: "2024-08-15",
    readTime: "13 min read",
    category: "Threat Detection",
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary font-mono text-sm mb-4">ENGINEERING INSIGHTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical deep-dives, methodology insights, and lessons from the field of Windows security engineering.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <Link 
                  to="#" 
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                >
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get notified about new technical articles and engineering insights. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
