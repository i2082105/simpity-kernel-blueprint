import { Layout } from "@/components/layout/Layout";

const historyData = [
  {
    year: "2025",
    title: "A Specialized Subcontractor for the Deepest Windows Layer",
    content: `In 2025 Simpity became a niche engineering lab used by vendors who need components inside Windows itself: kernel callbacks, LSASS hooking, NTFS internals, NAS protocols, undocumented authentication behavior.

Our work now spans:
• Low-level modules for B2B security products: AD security, DLP, threat detection, file monitoring.
• White-label engineering for large development vendors and product companies.
• Architecture, research, and development of protection components that interact with Windows in ways most teams prefer not to touch.`
  },
  {
    year: "2024",
    title: "Kernel Engineering as a Service",
    content: `By 2024 our positioning became clear: we design and build Windows components that other teams cannot safely modify.

What we introduced:
• A structured method for reverse-engineering undocumented Windows flows — the reason we can fix Patch Tuesday breakages within 24–48 hours, not weeks.
• Next-generation anti-ransomware filters blocking encryption attempts after 3–5 suspicious file operations (far earlier than AV engines).
• A unified real-time correlation layer for AD + File System + NAS events.

We also formalized our ICP: security product companies that need deep engineering, not system integration.`
  },
  {
    year: "2023",
    title: "Deep Integration With Security Vendors",
    content: `In 2023 Simpity became an engineering partner for several security vendors, including continued work aligned with the Netwrix ecosystem.

We delivered:
• Optimized kernel drivers for environments with Credential Guard, HVCI, and other strict protections enabled.
• Context-aware defenses against Golden Ticket, Pass-the-Hash, and DCSync ("Mimikatz-proof logic") without breaking legitimate admin workflows.
• High-performance NAS security modules for NetApp, EMC and other enterprise storage systems.

A critical milestone: our kernel driver passed Microsoft's code-signing review, even though it uses injection and hooking techniques normally flagged as malware.`
  },
  {
    year: "2022",
    title: "Scaling to Enterprise-Level Workloads",
    content: `2022 was the year we entered high-load environments and real enterprise security tasks.

Highlights:
• Built an AD monitoring and blocking engine that worked across 500+ domain controllers and 600K+ users with no performance degradation.
• Implemented kernel-level interception for AD operations before Windows processes them.
• Designed a behavior-based detection layer (mass deletions, lateral movement, insider activity) that worked in real time.

This is where our "AD security at impossible scale" expertise began to take shape.`
  },
  {
    year: "2021",
    title: "Reboot and New Direction",
    content: `In 2021 we consolidated experience from earlier products like Visual Rights Identity, TouchTrack, and TouchDefense and launched a dedicated engineering track focused on deep Windows internals.

Key steps:
• First stable mini-filter drivers for NTFS and NAS.
• Experiments with LSASS call interception and undocumented authentication flows.
• Our own reverse-engineering toolkit for Windows components and kernel behavior.

This set the foundation for what Simpity is today: a team working safely inside Windows where most engineering teams avoid going.`
  },
  {
    year: "2020",
    title: "Adapting to New Realities",
    content: `2020 was not an easy year for all people in the world! On the one hand, we were forced to live with restrictions. On the other hand, 2020 made it clear that we have unlimited opportunities — we have become even stronger. Simpity quickly adapted to the new realities of the time. As before, our team of highly qualified specialists is focused on achieving your goals in the most optimal and profitable way for you. Your business does not stand still, and so we do. We are constantly developing our knowledge and skills to provide the highest level of service to our customers.`
  },
  {
    year: "2019",
    title: "Team Growth and Expansion",
    content: `We are pleased to announce that last year our Simpity team has increased by 20%. Young and ambitious people with fresh and new ideas joined us, so we continue to work with enthusiasm with our clients from Europe and America and we are ready to cooperate with new customers to help them to solve the challenges of our time. With over 9 years of experience in IT spheres, we expertly steer our clients through their digital journey.`
  },
  {
    year: "2018",
    title: "Expanding Horizons",
    content: `We continue working hard to expand our horizons and expertise. The 1st half of 2018 is marked by getting new experience in development of various services of transport telematics systems, blockchain solutions, digitizing retail management solutions, involving in the development of the commercial industrial software for pipe and sewer technology.`
  },
  {
    year: "2017",
    title: "Strategic Partnership with GP Solutions",
    content: `We are pleased to announce strategic cooperation between GP Solutions and Simpity. GP Solutions is an established European software development house with a proven track record of delivering exceptional quality in custom software development, IT consulting and support. The Headquarters of GP Solutions is located in Munich, Germany. As you must be aware that Simpity is known for its delivery of services in the field of software development and outstaffing services, we have thought to expand our services and deliveries by working in the close cooperation with GP Solutions. Our ultimate goal is to fulfill our customer's satisfaction and therefore we have joined hands with GP Solutions – a company with over 150 experts. The partnership is surely an important step for us because we are aiming to grow in the IT industry, providing finest services to our customers.`
  },
  {
    year: "2016",
    title: "Building Strong Foundations",
    content: `At Simpity we believe that successful relationships and quality product development are based on well-understood requirements and a sound software engineering process. We continue to develop expertise to meet challenging new markets, to make IT outsourcing more beneficial undertaking for global enterprises and we're not complacent.`
  },
  {
    year: "2015",
    title: "First Product Development",
    content: `Simpity's team started to work on their own software product. The product applies to B2C market segment. Solutions implemented in the Product is a new look at the goods and services searching process on the off-line market. Together we identify marked needs and design complete solutions and it is no surprise that our products are well received.`
  },
  {
    year: "2014",
    title: "European Expansion",
    content: `We're excited to open our doors to businesses. In June 2014 Simpity has opened a representative office in Germany and continue to attract talented professionals. Hard working in close collaboration to achieve a common goal – this all adds up to a well rounded, efficient and lively team. New office reflects a demand for dynamic, proactive, personalized IT collaboration.`
  },
  {
    year: "2013",
    title: "Mobile Applications Development",
    content: `Mobile phones already became a part of everyday life for over 4 billion people all over the world. Mobile phone use is not limited to calling — people want to access business information, play games and chat from anywhere. End users today expect elegant and easy-to-use mobile apps. In 2013 Simpity's team is successfully involved in the next direction – Mobile Applications Development.`
  },
  {
    year: "2012",
    title: "IT Security Focus Begins",
    content: `Since 2012 one of the key areas at Simpity becomes IT Security using technologies C#, .Net. Information security is not a single technology, it's a strategy comprised of the processes, tools and policies necessary to prevent, detect, document and counter threats to digital and non-digital information. Solution we work on range from large security and compliance systems to desktop applications.`
  },
  {
    year: "2011",
    title: "Foundation Year",
    content: `Simpity was founded in the year of 2011. Our experienced professionals dedicated to satisfying client requirements for technologically innovative software solutions. The main mission was formulated as follows: "To provide our clients with the most optimal, cost-effective and robust solutions, which boost up the increase in returns and productivity of their businesses."`
  },
  {
    year: "2007",
    title: "The Beginning",
    content: `The founding team began their journey in software development and IT consulting, laying the groundwork for what would become Simpity. Early focus on quality engineering and client satisfaction set the tone for nearly two decades of growth.`
  }
];

export default function History() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary font-mono text-sm mb-4">SINCE 2007</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From software development roots to becoming a specialized Windows internals engineering lab trusted by security vendors worldwide.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            {historyData.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year badge */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center z-10">
                  <span className="text-primary font-mono font-bold text-sm">{item.year}</span>
                </div>
                
                {/* Content card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                    <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
