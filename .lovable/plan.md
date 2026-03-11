

## Add Premium "AI Workflow Security" Section to Homepage (After Hero)

### Placement
Right after `<HeroSection />` and before `<TrustedBySection />` — top billing as the premium offer.

### Messaging Angle
Shift from generic "AI risk" to **safe, compliant, insurable AI adoption** with EU AI Act specifics. Position SimpITy as the engineering partner that makes AI workflows auditable and regulation-ready.

### New Component: `src/components/home/AISecurityBanner.tsx`

**Layout:** Full-width section with `bg-gradient-to-r from-primary/5 via-background to-primary/5`, border top/bottom. Two-column grid on desktop, stacked on mobile.

**Left column:**
- Mono label: `// PREMIUM SERVICE`
- Headline: **"Make Your AI Workflows Safe, Compliant, and Insurable"**
- Supporting text: "The EU AI Act is now in force. Articles 9, 10, and 15 require risk management systems, data governance, and technical documentation for high-risk AI. Article 26 places direct obligations on deployers. Your enterprise AI workflows — from chat tools to automated decisions — need engineering-level controls, not just policies."
- Second paragraph: "We review one risky AI workflow end-to-end: data paths, identity boundaries, permission models, and control gaps — so your AI adoption is auditable, insurable, and EU AI Act ready."
- CTA: "Review a Risky Workflow →" linking to `/ai-workflow-security`

**Right column:** 3 compact cards stacked vertically:
1. **Shield icon** — "EU AI Act Compliant" / "Articles 9, 10, 15, 26 — risk management, data governance, monitoring obligations"
2. **FileCheck icon** — "Audit-Ready Controls" / "Documented data paths, identity boundaries, and permission models"
3. **Lock icon** — "Insurable by Design" / "Engineering controls that satisfy cyber insurance requirements for AI use"

### EU AI Act References (specific clauses)
- **Article 9** — Risk management system for high-risk AI
- **Article 10** — Data and data governance requirements
- **Article 15** — Accuracy, robustness, and cybersecurity
- **Article 26** — Obligations of deployers of high-risk AI systems

### Files Changed
1. **Create** `src/components/home/AISecurityBanner.tsx`
2. **Edit** `src/pages/Index.tsx` — insert `<AISecurityBanner />` between `<HeroSection />` and `<TrustedBySection />`

