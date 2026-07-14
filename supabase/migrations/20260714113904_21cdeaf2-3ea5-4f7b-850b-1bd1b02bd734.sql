
DROP POLICY IF EXISTS "Anyone can register for a webinar" ON public.webinar_registrations;
REVOKE INSERT ON public.webinar_registrations FROM anon, authenticated;
