import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(255),
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
  webinar_slug: z.string().trim().min(1).max(64).default("soc-already-lost"),
});

async function sha256(input: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const parsed = BodySchema.safeParse(raw);
  if (!parsed.success) {
    return json({ error: "validation", fields: parsed.error.flatten().fieldErrors }, 400);
  }
  const data = parsed.data;

  // honeypot — silently accept
  if (data.website) return json({ ok: true, already_registered: false });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const salt = Deno.env.get("WEBINAR_IP_SALT") ?? "";
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const ipHash = await sha256(`${salt}:${ip}`);

  // rate limit: max 5 registrations per IP hash per hour
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("webinar_registrations")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", hourAgo);
  if ((count ?? 0) >= 5) return json({ error: "rate_limited" }, 429);

  const row = {
    webinar_slug: data.webinar_slug,
    email: data.email,
    name: data.name,
    company: data.company || null,
    role: data.role || null,
    user_agent: req.headers.get("user-agent")?.slice(0, 500) ?? null,
    referrer: req.headers.get("referer")?.slice(0, 500) ?? null,
    ip_hash: ipHash,
  };

  const { error } = await supabase.from("webinar_registrations").insert(row);

  if (error) {
    // unique violation on (lower(email), webinar_slug) — treat as success
    if ((error as { code?: string }).code === "23505") {
      return json({ ok: true, already_registered: true });
    }
    console.error("insert error", error);
    return json({ error: "server_error" }, 500);
  }

  // TODO: notify i.lapsha@simpity.eu once email domain is set up on Lovable Cloud

  return json({ ok: true, already_registered: false });
});
