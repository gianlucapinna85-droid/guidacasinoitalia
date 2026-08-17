import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { operators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";

/**
 * Exit-intent: popup mostrato una sola volta per sessione quando l'utente
 * mostra un reale intento di uscita (desktop: mouse verso la barra del browser;
 * mobile: back-button virtuale). Non usa cookie e non traccia click:
 * i pulsanti puntano agli stessi link affiliati già configurati (officialUrl).
 */
const SESSION_KEY = "gc:exit-intent-shown";

export default function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 12000); // niente popup nei primi secondi di navigazione

    const show = () => {
      if (!armed || sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      // solo uscita reale dal viewport verso l'alto (barra del browser)
      if (e.relatedTarget || (e as MouseEvent & { toElement?: unknown }).toElement) return;
      if (e.clientY > 8) return;
      show();
    };

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let popState: (() => void) | undefined;

    if (isTouch) {
      // mobile: intercetta un solo "indietro" senza bloccare la navigazione interna
      history.pushState({ gcExit: true }, "");
      popState = () => {
        if (sessionStorage.getItem(SESSION_KEY)) return;
        show();
      };
      window.addEventListener("popstate", popState);
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
      if (popState) window.removeEventListener("popstate", popState);
    };
  }, []);

  if (!open) return null;

  const top = operators
    .map((op) => ({ op, meta: getCasinoMeta(op.slug) }))
    .sort((a, b) => (b.meta?.rating ?? 0) - (a.meta?.rating ?? 0))
    .slice(0, 3);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Selezione casinò ADM consigliati"
      className="fixed inset-0 z-[60] flex items-center justify-center p-3"
    >
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="gc-pop relative w-full max-w-2xl overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Chiudi la finestra"
          className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-4 md:p-6">
          <p className="text-[10px] uppercase tracking-widest text-gold">Prima di uscire</p>
          <h2 className="mt-1 font-serif text-lg md:text-2xl">
            I 3 casinò ADM con il voto più alto del comparatore
          </h2>

          <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
            {top.map(({ op, meta }) => (
              <div key={op.slug} className="rounded-xl border border-border bg-background p-2.5">
                <div className="flex h-12 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                  {op.logo ? (
                    <img
                      src={op.logo}
                      alt={`Logo ${op.name}`}
                      width={160}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm text-neutral-800">{op.name}</span>
                  )}
                </div>
                <p className="mt-2 font-serif text-sm">{op.name}</p>
                <p className="text-[11px] text-gold">
                  {meta ? `${meta.rating.toFixed(1)}/10` : "n.d."}
                </p>
                <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">
                  {op.noDepositBonus?.amount ?? "Bonus non dichiarato"}
                </p>
                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="gc-cta mt-2 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-gold px-2 py-2 text-[12px] font-bold text-primary-foreground"
                >
                  Visita qui <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[10px] leading-snug text-muted-foreground">
            18+ · Il gioco può causare dipendenza patologica. Contenuto informativo su operatori con
            concessione ADM.
          </p>
        </div>
      </div>
    </div>
  );
}
