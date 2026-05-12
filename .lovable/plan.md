## Plan: New Blog Post — Token Theft via Domain Admin Service Accounts

Add the uploaded whitepaper as a new blog article, matching the existing `ADPasswordPolicies` post pattern.

### Files

1. **Create** `src/pages/blog/DomainAdminTokenTheft.tsx`
   - Full article with hero, intro, attack walkthrough, PowerShell + C code blocks (using existing JetBrains Mono styling), tables (problem steps, defense gaps), best-practices list, NTP/Process Guardian section, conclusion.
   - Include the full `Invoke-TokenTheft.ps1` script as a downloadable/expandable code block (copy the uploaded .ps1 into `public/downloads/Invoke-TokenTheft.ps1`).
   - Skip the lab screenshots (Task Manager / PowerShell windows) — they're low-res raster captures; render equivalent terminal output as styled code blocks instead, matching site aesthetic.
   - Author: Alexei Belous. Category: "AD Security". Date: 2026-05-12. Read time: ~10 min.

2. **Edit** `src/App.tsx` — add route `/blog/domain-admin-token-theft` → `DomainAdminTokenTheft`.

3. **Edit** `src/pages/Blog.tsx` — prepend new post entry (with `slug: "domain-admin-token-theft"`) to `blogPosts` array so it appears first.

4. **Copy** `user-uploads://Invoke-TokenTheft.ps1` → `public/downloads/Invoke-TokenTheft.ps1` for download link.

### Design

Match `ADPasswordPolicies.tsx` layout exactly: dark theme, cyan accent, semantic tokens, Inter body + JetBrains Mono for code, container `max-w-4xl`, MITRE ATT&CK callout box, table styling consistent with rest of site.

No backend changes. No header/footer changes (Blog already in nav).
