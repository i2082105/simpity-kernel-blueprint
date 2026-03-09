

## Add "AI Workflow Security" Page and Nav Item

### Changes

**1. New page: `src/pages/AIWorkflowSecurity.tsx`**
- Follows existing page patterns (Layout wrapper, same section styling, `bg-grid`, `py-24`, card borders, etc.)
- Hero with `// AI WORKFLOW SECURITY` mono label, H1, subheadline, support text, primary CTA
- "What is happening now" — prose section
- "Four practical risks" — 4 cards in a `grid md:grid-cols-2 gap-6` layout with icons (ShieldAlert, Users, Zap, Clock)
- "How this is usually handled today" — prose with bullet list
- "What we propose" — structured with bullet lists, readable subsections
- "Why SimpITy" — bullet list of strength areas
- "Best fit" — bullet list of target audiences
- Final CTA section matching existing CTA pattern
- Meta tags via `document.title` + meta description in useEffect (matching existing pages)

**2. Navigation: `src/components/layout/Header.tsx`**
- Add `{ name: "AI Workflow Security", href: "/ai-workflow-security" }` to the navigation array (after "Blog")

**3. Routing: `src/App.tsx`**
- Import `AIWorkflowSecurity` and add route for `/ai-workflow-security`

**4. Meta tags in `index.html`**
- Handled at page level via useEffect, consistent with other pages

No homepage changes. No other pages affected.

