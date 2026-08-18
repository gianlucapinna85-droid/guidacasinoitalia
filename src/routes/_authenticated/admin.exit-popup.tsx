import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { operators } from "@/lib/operators";
import {
  DEFAULT_EXIT_POPUP_CONFIG,
  fetchExitPopupConfig,
  saveExitPopupConfig,
  type ExitPopupConfig,
  type ExitPopupFrequency,
} from "@/lib/exit-popup";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/_authenticated/admin/exit-popup")({
  head: () => ({
    meta: [
      { title: "Dashboard Exit Popup | Guida Casinò Italia" },
      { name: "description", content: "Gestione del popup exit-intent e statistiche." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ExitPopupAdmin,
});

type Stats = { impressions: number; clicks: number; ctr: number; perOperator: Record<string, number> };

const EMPTY: Stats = { impressions: 0, clicks: 0, ctr: 0, perOperator: {} };

function ExitPopupAdmin() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [cfg, setCfg] = useState<ExitPopupConfig>(DEFAULT_EXIT_POPUP_CONFIG);
  const [days, setDays] = useState(30);
  const [stats, setStats] = useState<Stats>(EMPTY);
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

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
    fetchExitPopupConfig().then(setCfg).catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    const since = new Date(Date.now() - days * 86400_000).toISOString();
    supabase
      .from("exit_popup_events")
      .select("event_type, operator_slug")
      .gte("created_at", since)
      .limit(50000)
      .then(({ data }) => {
        const rows = data ?? [];
        const impressions = rows.filter((r) => r.event_type === "impression").length;
        const clickRows = rows.filter((r) => r.event_type === "click");
        const perOperator: Record<string, number> = {};
        clickRows.forEach((r) => {
          const k = r.operator_slug ?? "n.d.";
          perOperator[k] = (perOperator[k] ?? 0) + 1;
        });
        setStats({
          impressions,
          clicks: clickRows.length,
          ctr: impressions ? (clickRows.length / impressions) * 100 : 0,
          perOperator,
        });
      });
  }, [isAdmin, days]);

  const sortedOps = useMemo(() => [...operators].sort((a, b) => a.name.localeCompare(b.name)), []);

  async function onSave() {
    setBusy(true);
    setMsg(null);
    const { error } = await saveExitPopupConfig({
      enabled: cfg.enabled,
      title: cfg.title,
      body_text: cfg.body_text,
      cta_label: cfg.cta_label,
      badge_label: cfg.badge_label,
      frequency: cfg.frequency,
      cooldown_hours: cfg.cooldown_hours,
      slot_1: cfg.slot_1,
      slot_2: cfg.slot_2,
      slot_3: cfg.slot_3,
    });
    setBusy(false);
    setMsg(error ? `Errore: ${error}` : "Configurazione salvata.");
  }

  async function onLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  if (isAdmin === null) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-12 text-sm text-muted-foreground">Caricamento…</div>
      </PageShell>
    );
  }

  if (!isAdmin) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h1 className="font-serif text-2xl">Accesso non autorizzato</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Questo account non ha il ruolo di amministratore.
          </p>
          <button onClick={onLogout} className="mt-4 rounded-lg border border-border px-3 py-2 text-sm">
            Esci
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h1 className="font-serif text-2xl">Exit Popup</h1>
            <p className="text-sm text-muted-foreground">Configurazione e statistiche del popup di uscita.</p>
          </div>
          <button onClick={onLogout} className="rounded-lg border border-border px-3 py-2 text-xs">
            Esci
          </button>
        </div>

        {/* Statistiche */}
        <section className="mt-6 rounded-2xl border border-border bg-card p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-serif text-lg">Statistiche</h2>
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="rounded-lg border border-border bg-background px-2 py-1.5 text-xs"
              aria-label="Periodo statistiche"
            >
              <option value={7}>Ultimi 7 giorni</option>
              <option value={30}>Ultimi 30 giorni</option>
              <option value={90}>Ultimi 90 giorni</option>
            </select>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <Stat label="Impression" value={stats.impressions.toLocaleString("it-IT")} />
            <Stat label="Click" value={stats.clicks.toLocaleString("it-IT")} />
            <Stat label="CTR" value={`${stats.ctr.toFixed(1)}%`} />
          </div>
          <div className="mt-3">
            <h3 className="text-xs uppercase tracking-wide text-muted-foreground">Click per casinò</h3>
            <ul className="mt-1 space-y-1 text-sm">
              {Object.entries(stats.perOperator).length === 0 ? (
                <li className="text-xs text-muted-foreground">Nessun click nel periodo selezionato.</li>
              ) : (
                Object.entries(stats.perOperator)
                  .sort((a, b) => b[1] - a[1])
                  .map(([slug, n]) => (
                    <li key={slug} className="flex justify-between border-b border-border/60 py-1">
                      <span>{operators.find((o) => o.slug === slug)?.name ?? slug}</span>
                      <span className="font-semibold text-gold">{n}</span>
                    </li>
                  ))
              )}
            </ul>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Le conversioni (depositi/registrazioni) sono disponibili solo nel pannello del network
              affiliato: non vengono trasmesse al sito.
            </p>
          </div>
        </section>

        {/* Configurazione */}
        <section className="mt-6 space-y-3 rounded-2xl border border-border bg-card p-4">
          <h2 className="font-serif text-lg">Configurazione</h2>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={cfg.enabled}
              onChange={(e) => setCfg({ ...cfg, enabled: e.target.checked })}
              className="h-4 w-4 accent-[var(--gc-glow)]"
            />
            Popup attivo
          </label>

          <Field label="Badge">
            <input
              value={cfg.badge_label}
              onChange={(e) => setCfg({ ...cfg, badge_label: e.target.value })}
              className="input"
            />
          </Field>
          <Field label="Titolo">
            <input
              value={cfg.title}
              onChange={(e) => setCfg({ ...cfg, title: e.target.value })}
              className="input"
            />
          </Field>
          <Field label="Testo">
            <textarea
              rows={2}
              value={cfg.body_text}
              onChange={(e) => setCfg({ ...cfg, body_text: e.target.value })}
              className="input"
            />
          </Field>
          <Field label="Etichetta CTA">
            <input
              value={cfg.cta_label}
              onChange={(e) => setCfg({ ...cfg, cta_label: e.target.value })}
              className="input"
            />
          </Field>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Frequenza">
              <select
                value={cfg.frequency}
                onChange={(e) => setCfg({ ...cfg, frequency: e.target.value as ExitPopupFrequency })}
                className="input"
              >
                <option value="session">Una volta per sessione</option>
                <option value="cooldown">Una volta ogni N ore</option>
                <option value="always">Sempre (test)</option>
              </select>
            </Field>
            <Field label="Ore di attesa (se 'ogni N ore')">
              <input
                type="number"
                min={1}
                max={720}
                value={cfg.cooldown_hours}
                onChange={(e) => setCfg({ ...cfg, cooldown_hours: Number(e.target.value) })}
                className="input"
              />
            </Field>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {([1, 2, 3] as const).map((n) => {
              const key = `slot_${n}` as "slot_1" | "slot_2" | "slot_3";
              return (
                <Field key={key} label={`Casinò in posizione ${n}`}>
                  <select
                    value={cfg[key]}
                    onChange={(e) => setCfg({ ...cfg, [key]: e.target.value })}
                    className="input"
                  >
                    {sortedOps.map((o) => (
                      <option key={o.slug} value={o.slug}>
                        {o.name}
                      </option>
                    ))}
                  </select>
                </Field>
              );
            })}
          </div>

          {msg ? <p className="text-xs text-gold">{msg}</p> : null}
          <button
            onClick={onSave}
            disabled={busy}
            className="rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-60"
          >
            {busy ? "Salvataggio…" : "Salva configurazione"}
          </button>
        </section>
      </div>
    </PageShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gold/40 bg-gold/10 p-3 text-center">
      <p className="font-serif text-xl text-gold">{value}</p>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
      <div className="mt-1 [&_.input]:w-full [&_.input]:rounded-lg [&_.input]:border [&_.input]:border-border [&_.input]:bg-background [&_.input]:px-3 [&_.input]:py-2 [&_.input]:text-sm">
        {children}
      </div>
    </label>
  );
}
