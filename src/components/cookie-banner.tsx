import { useEffect, useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useConsent } from "@/hooks/use-consent";
import { consentExpiryDate } from "@/lib/cookie-consent";

type PrefState = { preferences: boolean; analytics: boolean; marketing: boolean };

const dateFmt = new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" });
function formatDate(ts: number) {
  return dateFmt.format(new Date(ts));
}

export function CookieBanner() {
  const { hydrated, hasDecision, consent, acceptAll, rejectAll, save } = useConsent();
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<PrefState>({ preferences: false, analytics: false, marketing: false });
  const expiry = consentExpiryDate(consent);


  useEffect(() => {
    if (consent) {
      setPrefs({
        preferences: consent.preferences,
        analytics: consent.analytics,
        marketing: consent.marketing,
      });
    }
  }, [consent]);

  // Global opener for "manage cookies" links.
  useEffect(() => {
    const open = () => setShowPrefs(true);
    window.addEventListener("gc:open-cookie-preferences", open);
    return () => window.removeEventListener("gc:open-cookie-preferences", open);
  }, []);

  if (!hydrated) return null;

  const showBanner = !hasDecision && !showPrefs;

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Informativa cookie"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 shadow-2xl backdrop-blur"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Rispettiamo la tua privacy</p>
                <p className="mt-1 leading-relaxed">
                  Usiamo cookie tecnici, necessari al funzionamento del sito e installati senza consenso. Previo tuo
                  consenso usiamo anche cookie di preferenza e di misurazione statistica con IP anonimizzato. Non
                  installiamo cookie di profilazione pubblicitaria. Puoi accettare, rifiutare o scegliere categoria per
                  categoria: rifiutare non limita la navigazione. Il consenso dura 6 mesi ed è revocabile in ogni
                  momento dal link «Preferenze cookie» nel piè di pagina. Dettagli nella{" "}
                  <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground">
                    Privacy &amp; Cookie Policy
                  </Link>.
                </p>
              </div>

            </div>
            <div className="flex flex-wrap gap-2 md:shrink-0">
              <button
                onClick={() => rejectAll()}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Rifiuta tutto
              </button>
              <button
                onClick={() => setShowPrefs(true)}
                className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Settings2 className="h-4 w-4" /> Preferenze
              </button>
              <button
                onClick={() => acceptAll()}
                className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                Accetta tutto
              </button>
            </div>
          </div>
        </div>
      )}

      {showPrefs && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Preferenze cookie"
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 md:items-center md:p-4"
        >
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-xl border border-border bg-background p-6 shadow-2xl md:rounded-xl">
            <button
              onClick={() => setShowPrefs(false)}
              aria-label="Chiudi"
              className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <h2 className="font-serif text-xl font-semibold text-foreground">Preferenze cookie</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Scegli quali categorie autorizzare. La scelta viene conservata per 6 mesi, dopodiché ti verrà richiesta
              di nuovo. Puoi modificarla in qualsiasi momento dal piè di pagina.
            </p>

            <div className="mt-5 space-y-3">
              <CategoryRow
                title="Strettamente necessari"
                description="Indispensabili per il funzionamento del sito: sicurezza, bilanciamento del carico e memorizzazione della tua scelta sui cookie (gc_consent_v2, 6 mesi). Non richiedono consenso ai sensi dell'art. 122 del Codice Privacy."
                checked
                disabled
                onChange={() => {}}
              />
              <CategoryRow
                title="Preferenze"
                description="Memorizzano impostazioni non essenziali come tema e opzioni di visualizzazione, per non doverle reimpostare a ogni visita. Durata massima 6 mesi."
                checked={prefs.preferences}
                onChange={(v) => setPrefs((p) => ({ ...p, preferences: v }))}
              />
              <CategoryRow
                title="Statistica / Misurazione"
                description="Cookie di terza parte (Google Analytics 4) con IP anonimizzato, usati in forma aggregata per capire quali pagine sono più consultate. Durata fino a 14 mesi (_ga, _ga_*). Attivati solo con il tuo consenso."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <CategoryRow
                title="Marketing / Profilazione"
                description="Nessun cookie di questo tipo è attualmente installato sul sito. La categoria resta visibile per trasparenza e per il Consent Mode di Google; lasciandola attiva autorizzi in anticipo eventuali misurazioni pubblicitarie future."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>

            {expiry && (
              <p className="mt-4 text-xs text-muted-foreground">
                Scelta attuale registrata il {formatDate(consent!.timestamp)} — valida fino al {formatDate(expiry.getTime())}.
              </p>
            )}

            <div className="mt-6 flex flex-wrap justify-end gap-2">

              <button
                onClick={() => {
                  rejectAll();
                  setShowPrefs(false);
                }}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Rifiuta tutto
              </button>
              <button
                onClick={() => {
                  save(prefs);
                  setShowPrefs(false);
                }}
                className="inline-flex items-center justify-center rounded-md border border-gold/60 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Salva preferenze
              </button>
              <button
                onClick={() => {
                  acceptAll();
                  setShowPrefs(false);
                }}
                className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                Accetta tutto
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card/50 p-3">
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <label className={`relative inline-flex h-6 w-11 shrink-0 ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}>
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="absolute inset-0 rounded-full bg-muted transition-colors peer-checked:bg-gold" />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform peer-checked:translate-x-5" />
      </label>
    </div>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("gc:open-cookie-preferences"));
}
