
CREATE TABLE public.webinar_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  webinar_slug text NOT NULL DEFAULT 'soc-already-lost',
  email text NOT NULL,
  name text NOT NULL,
  company text,
  role text,
  user_agent text,
  referrer text,
  ip_hash text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX webinar_registrations_email_slug_uidx
  ON public.webinar_registrations (lower(email), webinar_slug);

CREATE INDEX webinar_registrations_ip_hash_created_idx
  ON public.webinar_registrations (ip_hash, created_at DESC);

GRANT INSERT ON public.webinar_registrations TO anon, authenticated;
GRANT ALL ON public.webinar_registrations TO service_role;

ALTER TABLE public.webinar_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for a webinar"
  ON public.webinar_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
