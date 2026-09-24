import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/_authenticated/admin/statistiche")({
  head: () => ({
    meta: [
      { title: "Statistiche clic | Guida Casinò Italia" },
      { name: "description", content: "Conteggio dei clic verso gli operatori." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: StatsPage,
});

type Row = { event_type: string; label: string | null; path: string | null };

function StatsPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [days, setDays] = useState(30);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      const uid = userData.user?.id;
      if (!uid) return setIsAdmin(false);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(Boolean(data));
    })();
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    const since = new Date(Date.now() - days * 86400_000).toISOString();
    supabase
      .from("site_events")
      .select("event_type, label, path")
      .gte("created_at", since)
      .limit(50000)
      .then(({ data }) => setRows(data ?? []));
  }, [isAdmin, days]);

  const summary = useMemo(() => {
    const clicks = rows.filter((r) => r.event_type === "operator_click");
    const perOperator: Record<string, number> = {};
    const perPage: Record<string, number> = {};
    clicks.forEach((r) => {
      const op = r.label ?? "n.d.";
      const pg = r.path ?? "n.d.";
      perOperator[op] = (perOperator[op] ?? 0) + 1;
      perPage[pg] = (perPage[pg] ?? 0) + 1;
    });
    const sort = (o: Record<string, number>) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, 15);
    return { clicks: clicks.length, perOperator: sort(perOperator), perPage: sort(perPage) };
  }, [rows]);

  if (isAdmin === false) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-serif text-2xl">Area riservata</h1>
          <p className="mt-2 text-sm text-muted-foreground">Questo pannello è visibile solo alla redazione.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-serif text-2xl md:text-3xl">Clic verso gli operatori</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Conteggio anonimo, senza cookie: quante volte i visitatori toccano i pulsanti verso gli
          operatori.
        </p>

        <div className="mt-5 flex gap-2">
          {[7, 30, 90].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDays(d)}
              className={`rounded-md border px-3 py-1.5 text-sm ${days === d ? "border-gold bg-gold/15 text-gold" : "border-border"}`}
            >
              {d} giorni
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Clic verso gli operatori", summary.clicks],
          ].map(([label, value]) => (
            <div key={String(label)} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
              <p className="mt-1 font-serif text-3xl text-gold">{value}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-serif text-xl">Operatori più cliccati</h2>
        <ul className="mt-3 space-y-1.5">
          {summary.perOperator.length === 0 ? (
            <li className="text-sm text-muted-foreground">Nessun clic registrato nel periodo.</li>
          ) : (
            summary.perOperator.map(([k, v]) => (
              <li key={k} className="flex justify-between rounded-md border border-border px-3 py-2 text-sm">
                <span>{k}</span>
                <span className="font-semibold text-gold">{v}</span>
              </li>
            ))
          )}
        </ul>

        <h2 className="mt-10 font-serif text-xl">Pagine che generano clic</h2>
        <ul className="mt-3 space-y-1.5">
          {summary.perPage.length === 0 ? (
            <li className="text-sm text-muted-foreground">Nessun dato nel periodo.</li>
          ) : (
            summary.perPage.map(([k, v]) => (
              <li key={k} className="flex justify-between rounded-md border border-border px-3 py-2 text-sm">
                <span className="truncate">{k}</span>
                <span className="font-semibold text-gold">{v}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </PageShell>
  );
}
