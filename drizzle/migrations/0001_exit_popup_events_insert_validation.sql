-- Limita le insert anonime su exit_popup_events a valori attesi:
-- solo event_type ammessi e slug ragionevoli. Niente piu WITH CHECK (true).

DROP POLICY IF EXISTS "Anyone can log exit popup events" ON public.exit_popup_events;

CREATE POLICY "Anyone can log valid exit popup events"
ON public.exit_popup_events
FOR INSERT
TO anon, authenticated
WITH CHECK (
  event_type IN ('impression', 'click')
  AND (operator_slug IS NULL OR (length(operator_slug) BETWEEN 1 AND 64))
);