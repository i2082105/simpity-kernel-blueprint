import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  const auth = req.headers.get("x-admin-token") ?? "";
  const expected = Deno.env.get("WEBINAR_ADMIN_TOKEN") ?? "";
  // constant-time-ish compare
  if (!expected || auth.length !== expected.length) return json({ error: "unauthorized" }, 401);
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= auth.charCodeAt(i) ^ expected.charCodeAt(i);
  if (diff !== 0) return json({ error: "unauthorized" }, 401);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data, error } = await supabase
    .from("webinar_registrations")
    .select("id, webinar_slug, email, name, company, role, created_at, referrer")
    .order("created_at", { ascending: false })
    .limit(1000);

  if (error) {
    console.error(error);
    return json({ error: "server_error" }, 500);
  }
  return json({ registrations: data ?? [] });
});
