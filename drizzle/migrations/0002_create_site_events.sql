CREATE TABLE public.site_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  label text,
  path text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX site_events_created_at_idx ON public.site_events (created_at DESC);
CREATE INDEX site_events_type_idx ON public.site_events (event_type);

GRANT INSERT ON public.site_events TO anon;
GRANT INSERT, SELECT ON public.site_events TO authenticated;
GRANT ALL ON public.site_events TO service_role;

ALTER TABLE public.site_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can log anonymous site events"
ON public.site_events FOR INSERT TO anon, authenticated
WITH CHECK (
  event_type IN ('operator_click','newsletter_submit','newsletter_view','assistant_click')
  AND (label IS NULL OR length(label) BETWEEN 1 AND 64)
  AND (path IS NULL OR length(path) BETWEEN 1 AND 200)
);

CREATE POLICY "admins read site events"
ON public.site_events FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));