CREATE TYPE public.app_role AS ENUM ('admin','moderator','user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can read own roles" ON public.user_roles
FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.exit_popup_config (
  id integer PRIMARY KEY DEFAULT 1,
  enabled boolean NOT NULL DEFAULT true,
  title text NOT NULL DEFAULT '🔥 ASPETTA! PRIMA DI ANDARE VIA',
  body_text text NOT NULL DEFAULT 'Scopri i nostri 3 casinò consigliati del momento.',
  cta_label text NOT NULL DEFAULT 'Visita il sito ufficiale',
  badge_label text NOT NULL DEFAULT 'Consigliato',
  frequency text NOT NULL DEFAULT 'session',
  cooldown_hours integer NOT NULL DEFAULT 24,
  slot_1 text NOT NULL DEFAULT 'leovegas',
  slot_2 text NOT NULL DEFAULT 'lottomatica',
  slot_3 text NOT NULL DEFAULT 'netbet',
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT exit_popup_config_singleton CHECK (id = 1),
  CONSTRAINT exit_popup_config_frequency CHECK (frequency IN ('session','cooldown','always'))
);
GRANT SELECT ON public.exit_popup_config TO anon, authenticated;
GRANT INSERT, UPDATE ON public.exit_popup_config TO authenticated;
GRANT ALL ON public.exit_popup_config TO service_role;
ALTER TABLE public.exit_popup_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read exit popup config" ON public.exit_popup_config
FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins can insert exit popup config" ON public.exit_popup_config
FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can update exit popup config" ON public.exit_popup_config
FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

INSERT INTO public.exit_popup_config (id) VALUES (1);

CREATE TABLE public.exit_popup_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  operator_slug text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT exit_popup_events_type CHECK (event_type IN ('impression','click'))
);
CREATE INDEX exit_popup_events_created_at_idx ON public.exit_popup_events (created_at DESC);
GRANT INSERT ON public.exit_popup_events TO anon, authenticated;
GRANT SELECT ON public.exit_popup_events TO authenticated;
GRANT ALL ON public.exit_popup_events TO service_role;
ALTER TABLE public.exit_popup_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log exit popup events" ON public.exit_popup_events
FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can read exit popup events" ON public.exit_popup_events
FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));