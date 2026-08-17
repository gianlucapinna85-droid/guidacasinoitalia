import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { operators } from "@/lib/operators";
import {
  alreadyShown,
  loadExitPopupConfig,
  markShown,
  trackExitPopupClick,
  type ExitPopupConfig,
} from "@/lib/exit-popup-config";

const MIN_DWELL_MS = 6000; // non disturbare chi e' appena arrivato
const INTERNAL_SUPPRESS_MS = 1200; // finestra di silenzio dopo un click interno

/**
 * Popup di exit-intent.
 * Desktop: mouse che esce dal bordo superiore della finestra.
 * Mobile: pressione del tasto "indietro" (sentinella nella history).
 * Mai attivato da scroll, navigazione interna, menu o click sui link affiliati.
 */
export function ExitIntentPopup() {
  const [config, setConfig] = useState<ExitPopupConfig | null>(null);
  const [open, setOpen] = useState(false);
  const suppressUntil = useRef(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const cfg = loadExitPopupConfig();
    if (!cfg.enabled || alreadyShown(cfg.frequency)) return;
    setConfig(cfg);

    const mountedAt = Date.now();
    const suppress = () => {
      suppressUntil.current = Date.now() + INTERNAL_SUPPRESS_MS;
    };

    const show = () => {
      if (doneRef.current) return;
      if (Date.now() - mountedAt < MIN_DWELL_MS) return;
      if (Date.now() < suppressUntil.current) return;
      doneRef.current = true;
      markShown(cfg.frequency);
      setOpen(true);
    };

    // Qualsiasi interazione con link, pulsanti o menu = navigazione interna
    const onPointerDown = (e: Event) => {
      const el = (e.target as HTMLElement | null)?.closest?.("a,button,[role='button']");
      if (el) suppress();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || (e as MouseEvent & { toElement?: unknown }).toElement) return;
      if (e.clientY > 0) return; // solo uscita dal bordo superiore
      show();
    };

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let sentinelTimer: ReturnType<typeof setTimeout> | undefined;
    const onPopState = () => {
      if (doneRef.current || Date.now() < suppressUntil.current) return;
      show();
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("click", onPointerDown, true);

    if (isTouch) {
      sentinelTimer = setTimeout(() => {
        try {
          window.history.pushState({ gciExit: true }, "");
          window.addEventListener("popstate", onPopState);
        } catch {
          /* history non disponibile */
        }
      }, MIN_DWELL_MS);
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("click", onPointerDown, true);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("popstate", onPopState);
      if (sentinelTimer) clearTimeout(sentinelTimer);
    };
  }, []);

  if (!open || !config) return null;

  const picks = config.slugs
    .map((slug) => operators.find((o) => o.slug === slug))
    .filter((o): o is (typeof operators)[number] => Boolean(o))
    .slice(0, 3);

  if (picks.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-background/80 p-3 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gold/40 bg-card p-4 shadow-2xl md:max-w-2xl md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Chiudi il messaggio"
          className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-[10px] uppercase tracking-widest text-gold">Guida Casinò Italia</p>
        <h2 id="exit-popup-title" className="mt-1 pr-8 font-serif text-lg leading-tight md:text-2xl">
          {config.title}
        </h2>
        <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground md:text-sm">
          {config.text}
        </p>

        <div className="mt-3 grid grid-cols-3 gap-2 md:gap-3">
          {picks.map((op) => (
            <article
              key={op.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-background"
            >
              <a
                href={op.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => trackExitPopupClick(op.slug)}
                className="flex h-12 items-center justify-center border-b border-border bg-white p-1.5 md:h-16"
                aria-label={`Vai al sito ufficiale di ${op.name}`}
              >
                {op.logo ? (
                  <img
                    src={op.logo}
                    alt={`Logo ${op.name}`}
                    width={224}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-neutral-800">{op.name}</span>
                )}
              </a>
              <div className="flex flex-1 flex-col p-1.5 md:p-2.5">
                <h3 className="font-serif text-[12px] leading-tight md:text-base">{op.name}</h3>
                {op.noDepositBonus?.amount ? (
                  <p className="mt-1 text-[10px] font-bold leading-tight text-gold md:text-xs">
                    {op.noDepositBonus.amount}
                  </p>
                ) : (
                  <p className="mt-1 text-[10px] leading-tight text-muted-foreground md:text-xs">
                    RTP {op.rtpAverage}
                  </p>
                )}
                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  onClick={() => trackExitPopupClick(op.slug)}
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-gold px-1.5 py-1.5 pt-1.5 text-center text-[10px] font-bold leading-tight text-primary-foreground md:text-xs"
                >
                  {config.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-2.5 text-[9px] leading-tight text-muted-foreground md:text-[11px]">
          18+ · Il gioco può causare dipendenza patologica · Operatori con concessione ADM ·
          Contenuto informativo
        </p>
      </div>
    </div>
  );
}
