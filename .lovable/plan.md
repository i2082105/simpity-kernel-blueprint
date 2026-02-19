

## Add Blog Article: "Your AD Password Policies Are Security Theater"

### Overview
Convert the uploaded HTML article into a new React blog post page, add routing for individual blog posts, update the blog listing, and style everything to match Simpity's brand (Inter font, JetBrains Mono for code, cyan accent `hsl(199 89% 48%)` instead of red, dark theme tokens from the site's CSS variables). Date set to February 19, 2026.

### Changes

#### 1. Create new blog post page component
**File:** `src/pages/blog/ADPasswordPolicies.tsx`

A full React component that renders the article content using the site's existing design system:
- Use `Layout` component for header/footer
- Use site fonts (Inter for body, JetBrains Mono for code/meta)
- Use site color tokens (`text-foreground`, `text-muted-foreground`, `text-primary`, `bg-card`, `border-border`, etc.)
- Replace the red accent (`#c9463d`) with the site's primary cyan (`hsl(var(--primary))`)
- Preserve all article content: headings, paragraphs, code blocks, lists, callout boxes, download buttons, image blocks with captions, and the author box
- Embed the two base64 images from the original HTML directly
- All links from the original article preserved as-is (Microsoft docs, EasyHook, etc.)
- Date displayed as "February 19, 2026"
- Author: "Ivan Googolev, CTO, Simpity"

#### 2. Add route for the new post
**File:** `src/App.tsx`

- Import `ADPasswordPolicies` component
- Add route: `<Route path="/blog/ad-password-policies-security-theater" element={<ADPasswordPolicies />} />`

#### 3. Update Blog listing page
**File:** `src/pages/Blog.tsx`

- Add the new article as the first entry in the `blogPosts` array with:
  - `slug: "ad-password-policies-security-theater"`
  - `title: "Your AD Password Policies Are Security Theater"`
  - `excerpt: "Here's proof with scripts you can test today. Plus a defense that actually works."`
  - `author: "Ivan Googolev"`
  - `date: "2026-02-19"`
  - `readTime: "12 min read"`
  - `category: "AD Security"`
- This post renders as a clickable `Link` to `/blog/ad-password-policies-security-theater` instead of "Coming Soon"
- Other posts remain with "Coming Soon" badge

### Technical Details

**Styling approach for the article page:**
- `<article>` container: `max-w-3xl mx-auto` for readable width
- Meta line: `font-mono text-xs text-muted-foreground uppercase tracking-widest`
- Headings: `text-foreground font-semibold`
- Title accent word "Security Theater": styled with `text-primary` (cyan) instead of red
- Code blocks: `bg-secondary border border-border rounded-lg font-mono text-sm`
- Inline code: `bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border`
- Callout boxes: `bg-card border-l-4 border-primary rounded-r-lg p-5`
- Download buttons: `bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30 font-mono`
- Image blocks: `bg-card border border-border rounded-lg overflow-hidden` with caption below
- Author box: `bg-card border border-border rounded-lg p-6` at bottom
- Lists use `list-disc` with `marker:text-primary` for cyan bullets
- Ordered lists use `marker:text-primary marker:font-mono`

**No new dependencies required.** Everything uses existing Tailwind classes and site tokens.

