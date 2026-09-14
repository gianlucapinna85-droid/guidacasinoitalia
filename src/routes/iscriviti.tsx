import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Check, ShieldCheck, Bell } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { subscribeToNewsletter } from "@/lib/newsletter.functions";

const CANONICAL = "https://www.guidacasino-italia.it/iscriviti";
const TITLE = "Iscriviti alla newsletter di GuidaCasinò.IT";
const DESCRIPTION =
  "Ricevi via email le nuove guide, le analisi sui concessionari ADM e gli aggiornamenti informativi di GuidaCasinò.IT. Iscrizione gratuita, disiscrizione in un clic. +18.";

export const Route = createFileRoute("/iscriviti")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Page,
});

function Page() {
  const subscribe = useServerFn(subscribeToNewsletter);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<"new" | "already" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      return setError("Inserisci un indirizzo email valido.");
    }
    if (!consent) return setError("Serve il consenso per completare l'iscrizione.");
    setBusy(true);
    try {
      const res = await subscribe({ data: { email: value, source: "pagina-iscriviti" } });
      setDone(res.already ? "already" : "new");
      setEmail("");
      setConsent(false);
    } catch {
      setError("Iscrizione non riuscita. Riprova tra qualche minuto.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-2xl px-4 py-10 md:py-14">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold">
          <Bell className="h-3.5 w-3.5" aria-hidden="true" /> Newsletter gratuita
        </span>
        <h1 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
          Iscriviti e ricevi le nostre analisi sui casinò ADM
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{DESCRIPTION}</p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-3">
          {[
            "Nuove guide e recensioni",
            "Analisi bonus dei concessionari",
            "Aggiornamenti normativi ADM",
          ].map((v) => (
            <li
              key={v}
              className="flex items-start gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-[13px] font-medium"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} aria-hidden="true" />
              {v}
            </li>
          ))}
        </ul>

        {done ? (
          <div className="mt-7 rounded-2xl border border-gold/50 bg-gold/10 p-5">
            <p className="font-serif text-xl text-foreground">
              {done === "already" ? "Sei già iscritto" : "Iscrizione registrata"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {done === "already"
                ? "Questo indirizzo è già nella nostra lista: non serve fare altro."
                : "Grazie: riceverai i prossimi aggiornamenti a questo indirizzo. Puoi disiscriverti quando vuoi dal link presente in ogni email."}
            </p>
            <button
              type="button"
              onClick={() => setDone(null)}
              className="mt-4 text-xs font-semibold text-gold underline-offset-2 hover:underline"
            >
              Iscrivi un altro indirizzo
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-7 rounded-2xl border border-gold/40 bg-card p-5 shadow-sm"
            noValidate
          >
            <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Il tuo indirizzo email
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                required
                maxLength={255}
                placeholder="nome@email.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm outline-none focus:border-gold"
              />
              <button
                type="submit"
                disabled={busy}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {busy ? "Invio…" : "Iscrivimi"}
              </button>
            </div>

            <label className="mt-4 flex items-start gap-2.5 text-[12px] leading-snug text-muted-foreground">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--gold)]"
              />
              <span>
                Ho più di 18 anni e acconsento a ricevere le comunicazioni informative di
                GuidaCasinò.IT. Leggi la{" "}
                <a href="/privacy" className="underline hover:text-foreground">
                  privacy policy
                </a>
                .
              </span>
            </label>

            {error ? <p className="mt-3 text-xs font-semibold text-destructive">{error}</p> : null}

            <p className="mt-4 flex items-start gap-2 text-[11px] text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              Nessuna pubblicità di terze parti: usiamo il tuo indirizzo solo per le comunicazioni del
              sito. Puoi disiscriverti in qualsiasi momento.
            </p>
          </form>
        )}

        <p className="mt-6 text-[11px] text-muted-foreground">
          Sei della redazione? L'accesso riservato è nell'{" "}
          <a href="/auth" className="underline hover:text-foreground">
            area riservata
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
