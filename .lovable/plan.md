

## Fix Download Links for Blog Post

### Problem
The two download buttons ("Download SetNtlmPassword.zip" and "Download Protect.zip") both have `href="#"` placeholder links. The original HTML source also had `href="#"` -- the actual files were never provided.

### What's Needed From You
Please upload the two ZIP files:
1. **SetNtlmPassword.zip** -- the attack PoC script
2. **Protect.zip** -- the defense/hook script

### Implementation (after files are uploaded)

**File:** `src/pages/blog/ADPasswordPolicies.tsx`

1. Place both ZIP files in `public/blog/` (e.g., `public/blog/SetNtlmPassword.zip` and `public/blog/Protect.zip`)
2. Update the two download links:
   - Line ~102: Change `href="#"` to `href="/blog/SetNtlmPassword.zip"` and add `download` attribute
   - Line ~159: Change `href="#"` to `href="/blog/Protect.zip"` and add `download` attribute

Both links will also get `target="_blank" rel="noopener noreferrer"` for clean download behavior.

### No other changes needed
The EasyHook download link (line ~173) already points to the correct external URL and works fine.
