import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Check, Bell, ShieldCheck } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/newsletter.functions";

/**
 * Invito newsletter a tutta larghezza, collocato a fine pagina (dopo i contenuti,
 * prima del footer): posizione strategica, senza occupare spazio nell'intestazione.
 */
export function NewsletterCTA() {
  const subscribe = useServerFn(subscribeToNewsletter);
  const [email, setEmail] = useState("");
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
    setBusy(true);
    try {
      const res = await subscribe({ data: { email: value, source: "fascia-sito" } });
      setDone(res.already ? "already" : "new");
      setEmail("");
    } catch {
      setError("Iscrizione non riuscita. Riprova tra qualche minuto.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section
      aria-label="Iscrizione alla newsletter"
      className="border-y border-gold/35 bg-gradient-to-br from-secondary via-card to-secondary"
    >
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-center md:gap-8 md:px-6 md:py-10 xl:max-w-7xl">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
            <Bell className="h-3.5 w-3.5" aria-hidden="true" /> Newsletter gratuita
          </span>
          <h2 className="mt-2.5 font-serif text-xl leading-tight md:text-2xl">
            Nuovi bonus ADM e analisi, prima degli altri
          </h2>
          <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-muted-foreground md:text-sm">
            Una email quando cambiano i bonus dei concessionari o pubblichiamo nuove guide e
            recensioni. Niente pubblicità di terze parti, disiscrizione in un clic.
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-medium text-foreground/80">
            {["Bonus verificati", "Solo operatori ADM", "Zero spam"].map((v) => (
              <li key={v} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.6} aria-hidden="true" />
                {v}
              </li>
            ))}
          </ul>
        </div>

        {done ? (
          <div className="rounded-2xl border border-gold/50 bg-gold/10 p-4">
            <p className="font-serif text-lg">
              {done === "already" ? "Sei già iscritto" : "Iscrizione registrata"}
            </p>
            <p className="mt-1.5 text-[12px] text-muted-foreground">
              {done === "already"
                ? "Questo indirizzo è già nella nostra lista."
                : "Grazie: riceverai i prossimi aggiornamenti a questo indirizzo."}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="w-full min-w-0">
            <label htmlFor="nl-strip-email" className="sr-only">
              Il tuo indirizzo email
            </label>
            <div className="flex w-full min-w-0 flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
              <input
                id="nl-strip-email"
                type="email"
                autoComplete="email"
                required
                maxLength={255}
                placeholder="nome@email.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-w-0 rounded-xl border border-border bg-background px-3.5 py-3 text-sm outline-none focus:border-gold"
              />
              <button
                type="submit"
                disabled={busy}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {busy ? "Invio…" : "Iscrivimi"}
              </button>
            </div>
            {error ? <p className="mt-2 text-xs font-semibold text-destructive">{error}</p> : null}
            <p className="mt-2 flex items-start gap-1.5 text-[10px] leading-snug text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-3 w-3 shrink-0 text-gold" aria-hidden="true" />
              Iscrivendoti dichiari di avere più di 18 anni e accetti la{" "}
              <a href="/privacy" className="underline hover:text-foreground">
                privacy policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
