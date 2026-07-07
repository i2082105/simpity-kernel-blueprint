## Plan: Webinar Landing Page — "Fighting Fire with Fire"

A single-page, provocative webinar landing page in a Karp/Palantir tone, deployed as a dedicated route on simpity.eu. Standalone visual system (no site Header/Footer) — this page intentionally breaks out of the corporate shell.

### Route & entry

- **New route**: `/webinar/soc-already-lost` in `src/App.tsx`.
- **No `<Layout>`**: renders bare so the sticky timer sits at the very top and the brutalist palette isn't diluted by the site header.
- **SEO**: page-level `<title>` + meta description via `react-helmet-async` (already viable) or a small `useEffect` swap — "Your SOC already lost. | Simpity Webinar".
- **Cross-link**: subtle text link added to `Header.tsx` "AI Security" dropdown → "Live Webinar" (one line, no visual change to the header otherwise).

### File structure

```
src/pages/webinar/SocAlreadyLost.tsx          # page shell, sticky timer, section composition
src/components/webinar/
  StickyAttackTimer.tsx                        # persistent monospace up-counter, alarm red
  HeroSection.tsx                              # headline + glitch-once + CTA
  BigNumbers.tsx                               # 49% / 89% / 82% count-up on scroll
  Indictment.tsx                               # 2 columns + "I disagree" rebuttal toggle
  TimelineSlider.tsx                           # T+0 → T+4h drag, prevention vs detection states
  LogStream.tsx                                # auto-scrolling OBO OAuth incident log, loops
  IncidentsWall.tsx                            # 4 stark proof cards
  BreachabilityQuiz.tsx                        # 3 yes/no toggles + conditional red panel
  DemoHook.tsx                                 # "We'll break an AI agent live"
  WebinarDetails.tsx                           # title, duration, speaker, credibility line
  RegistrationForm.tsx                         # zod-validated form + honeypot + confirmation state
  WebinarFooter.tsx                            # minimal footer
src/hooks/useCountUp.ts                        # IntersectionObserver-driven number counter
src/hooks/useReducedMotion.ts                  # respects prefers-reduced-motion
public/downloads/ (unchanged)
```

### Design system (scoped to this page only)

Applied via a wrapper `<div>` with inline CSS custom properties so the rest of the site is untouched:

- `--wb-bg: #0B0B0C`, `--wb-fg: #EDEDEC`, `--wb-muted: #7A7974`
- `--wb-alarm: #E5484D`, `--wb-safe: #01696F`
- Headline font: **Space Grotesk** (Google Fonts, weight 700), loaded via `<link>` injected in `index.html`.
- Body: Inter (already loaded). Mono: JetBrains Mono (already loaded).
- Tabular figures via `font-variant-numeric: tabular-nums` on all numeric spans.
- Hero clamp: `clamp(3rem, 9vw, 7.5rem)` line-height 0.95.
- Zero shadcn components on this page — raw Tailwind + native `<button>`, `<input>`, `<form>`. Reason: the polished shadcn surfaces would soften the brutalist tone.

### Interactive core (priority)

1. **StickyAttackTimer** — `position: fixed; top:0`; setInterval 1s; monospace MM:SS in `--wb-alarm`; caption "This is how long an AI attacker needs to own your Active Directory." Session-scoped only (resets on reload — no persistence). Body gets `padding-top` to clear it.
2. **BigNumbers** — `IntersectionObserver` triggers count-up (rAF-based, ~1.2s ease-out) on 49/89/82. Staggered 300ms.
3. **TimelineSlider** — native `<input type="range" min=0 max=240>` styled as a horizontal track; value drives which of the 4 scenario cards is highlighted; below T=29 the DETECTION column stays grey; PREVENTION column shows "BLOCKED" teal card fixed at T+0 regardless of slider position (that's the visual argument).
4. **LogStream** — hardcoded array of ~24 realistic log lines (OBO OAuth flow, Files.Read, Mail.Send attributed to legit user); rendered in a fixed-height terminal panel; auto-scrolls via CSS `@keyframes` translateY loop (30s linear infinite). Paused under `prefers-reduced-motion`.
5. **BreachabilityQuiz** — 3 controlled boolean toggles; conditional result panel (`all-yes` = red hard-hit, `mixed-yes` = softer, `all-no` = quiet "you're not the audience"); CTA scrolls to registration.

### Registration form

- Fields: email (required, zod email), full name (required, 1–100 chars), company (optional, ≤100), role (optional, ≤100), honeypot `website` (must stay empty).
- Client-side zod validation with inline errors in the Karp tone ("That's not an email.").
- On submit: currently POSTs to a **placeholder** `/api/webinar-register` with a clearly-marked `// TODO: wire to Instantly / Google Sheets / Cloud edge function` — per brief. No backend work in this plan.
- Confirmation state replaces the form: "You're in. Check your inbox. The attack we'll break is already running in someone's network right now."
- No console logging of submitted values.

### Motion & accessibility

- Custom `useReducedMotion` hook gates: glitch flicker, count-up (jumps straight to final), log auto-scroll, any transitions >150ms.
- Timer keeps ticking regardless — it's information, not decoration.
- Slider is keyboard-operable (native range). Toggles are `<button aria-pressed>`. Form has labels + `aria-invalid` + `aria-describedby` for errors.
- Colour contrast: `#EDEDEC` on `#0B0B0C` = 18:1. Red `#E5484D` on black = 4.9:1 (AA large). Muted `#7A7974` only used for de-emphasized captions ≥14px.

### Copy guardrails

- Banned-word linter pass on final copy: empower, seamless, solution, journey, unlock, trusted, leverage, cutting-edge, robust, synergy — none appear.
- Numbers/facts used verbatim from the brief; no invented statistics beyond the fabricated log lines (which are clearly a demo, not a claim).

### Out of scope

- No backend / Lovable Cloud writes (per brief: placeholder endpoint + TODO).
- No email sending, no analytics events beyond the existing GA pageview.
- No visual changes to any other page.
- No changes to the main site header/footer beyond a single nav link.

### Assumptions

- Webinar date/time left as an editable placeholder (`{DATE_TIME_TBD}` constant at the top of `WebinarDetails.tsx`) — the user can swap it in one line.
- Route slug `/webinar/soc-already-lost` chosen for campaign specificity; trivial to change.
- Registration submissions are dropped on the floor until the Instantly/Sheets webhook URL is provided.
