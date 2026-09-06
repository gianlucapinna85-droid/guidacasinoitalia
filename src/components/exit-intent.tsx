import { useCallback, useEffect, useRef, useState } from "react";
import { X, ArrowRight, BadgeCheck, Star, Wallet } from "lucide-react";
import { operators, type Operator } from "@/lib/operators";
import { getCasinoMeta, type CasinoMeta } from "@/data/casinos";
import { AdmBadgeDot } from "@/components/casino-card";
import {
  DEFAULT_EXIT_POPUP_CONFIG,
  fetchExitPopupConfig,
  logExitPopupEvent,
  type ExitPopupConfig,
} from "@/lib/exit-popup";

/**
 * Exit-intent popup.
 * - Desktop: mouse che esce dal viewport verso la barra del browser.
 * - Mobile: un solo "indietro" virtuale, senza bloccare la navigazione interna.
 * - Non compare durante lo scroll, la navigazione interna o dopo un click su un link
 *   (interno o affiliato): ogni click su <a> disarma il rilevamento per alcuni secondi.
 * - Frequenza e contenuti sono configurabili dalla dashboard (/admin/exit-popup).
 * - I casinò mostrati sono gli stessi del comparatore: nessun database separato.
 */

const SESSION_KEY = "gc:exit-intent-shown";
const COOLDOWN_KEY = "gc:exit-intent-last";

function pick(slug: string): { op: Operator; meta?: CasinoMeta } | null {
  const op = operators.find((o) => o.slug === slug);
  return op ? { op, meta: getCasinoMeta(op.slug) } : null;
}

export default function ExitIntent() {
  const [config, setConfig] = useState<ExitPopupConfig | null>(null);
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const mountedAt = useRef(Date.now());

  useEffect(() => {
    let alive = true;
    fetchExitPopupConfig()
      .then((c) => alive && setConfig(c))
      .catch(() => alive && setConfig(DEFAULT_EXIT_POPUP_CONFIG));
    return () => {
      alive = false;
    };
  }, []);

  const canShow = useCallback((cfg: ExitPopupConfig) => {
    if (shownRef.current) return false;
    try {
      if (cfg.frequency === "session") return !sessionStorage.getItem(SESSION_KEY);
      if (cfg.frequency === "cooldown") {
        const last = Number(localStorage.getItem(COOLDOWN_KEY) ?? 0);
        return Date.now() - last > Math.max(1, cfg.cooldown_hours) * 3600_000;
      }
      return true;
    } catch {
      return true;
    }
  }, []);

  const markShown = useCallback((cfg: ExitPopupConfig) => {
    shownRef.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
      localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
    } catch {
      /* storage non disponibile */
    }
    void logExitPopupEvent("impression");
  }, []);

  useEffect(() => {
    if (!config || !config.enabled) return;
    if (typeof window === "undefined") return;
    if (!canShow(config)) return;

    // L'attesa di sicurezza parte dal montaggio della pagina, non dal caricamento
    // della configurazione: così il comportamento è identico su rete lenta.
    const ARM_MS = 8000;
    let armed = Date.now() - mountedAt.current >= ARM_MS;
    let suppressedUntil = 0;
    const armTimer = window.setTimeout(
      () => {
        armed = true;
      },
      Math.max(0, ARM_MS - (Date.now() - mountedAt.current)),
    );

    const show = () => {
      if (!armed || Date.now() < suppressedUntil || !canShow(config)) return;
      markShown(config);
      setOpen(true);
    };

    // Un click su un qualsiasi link (interno o affiliato) non è intento di uscita.
    const onPointerDown = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a,button")) suppressedUntil = Date.now() + 6000;
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || (e as MouseEvent & { toElement?: unknown }).toElement) return;
      if (e.clientY > 8) return;
      show();
    };

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let popState: (() => void) | undefined;

    document.addEventListener("pointerdown", onPointerDown, true);

    if (isTouch) {
      history.pushState({ gcExit: true }, "");
      popState = () => show();
      window.addEventListener("popstate", popState);
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("mouseout", onMouseOut);
      if (popState) window.removeEventListener("popstate", popState);
    };
  }, [config, canShow, markShown]);

  // Chiusura con ESC + blocco scroll di fondo
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !config) return null;

  const cards = [config.slot_1, config.slot_2, config.slot_3]
    .map(pick)
    .filter((x): x is { op: Operator; meta?: CasinoMeta } => Boolean(x));

  if (cards.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gc-exit-title"
      className="fixed inset-0 z-[70] flex items-end justify-center p-2 sm:items-center sm:p-4"
    >
      <div
        className="absolute inset-0 animate-fade-in bg-background/85 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div className="gc-pop relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-gold/40 bg-card shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Chiudi la finestra"
          className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-gold/50 hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-4 md:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
            {config.badge_label}
          </p>
          <h2 id="gc-exit-title" className="mt-1 pr-10 font-serif text-lg leading-tight md:text-2xl">
            {config.title}
          </h2>
          <p className="mt-1 text-[13px] text-muted-foreground md:text-sm">{config.body_text}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {cards.map(({ op, meta }, i) => (
              <article
                key={op.slug}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group flex animate-fade-in flex-col rounded-xl border-2 border-gold/40 bg-secondary p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_14px_32px_-22px_var(--gc-glow)]"
              >
                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  onClick={() => void logExitPopupEvent("click", op.slug)}
                  aria-label={`Vai al sito ufficiale di ${op.name}`}
                  className="gc-logo-frame relative flex h-16 items-center justify-center overflow-hidden rounded-lg border border-border bg-white transition-colors duration-300 hover:border-gold/60"
                >
                  {op.logo ? (
                    <img
                      src={op.logo}
                      alt={`Logo ${op.name}`}
                      width={224}
                      height={96}
                      loading="lazy"
                      decoding="async"
                      className="gc-logo-img"
                    />
                  ) : (
                    <span className="font-serif text-sm text-foreground">{op.name}</span>
                  )}
                  <AdmBadgeDot className="right-1 top-1 h-5 w-5 sm:h-5 sm:w-5" />
                </a>

                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <h3 className="font-serif text-sm">{op.name}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-gold">
                    <BadgeCheck className="h-2.5 w-2.5" /> {op.concessionN}
                  </span>
                </div>

                <div className="mt-2 space-y-1">
                  <div className="rounded-lg border border-gold/40 bg-gold/10 px-2 py-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gold/80">
                      Senza deposito
                    </p>
                    <p className="text-[14px] font-bold text-gold">
                      {op.noDepositBonus?.amount ?? "Non dichiarato"}
                    </p>
                  </div>
                  <div className="rounded-lg border border-border px-2 py-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                      Con deposito
                    </p>
                    <p className="text-[14px] font-bold text-foreground">
                      {op.depositBonus?.amount ?? "Vedi sito ufficiale"}
                    </p>
                  </div>
                </div>

                <dl className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-muted-foreground">
                  <div>
                    <dt className="flex items-center gap-1 uppercase tracking-wide">
                      <Star className="h-2.5 w-2.5 text-gold" /> Voto
                    </dt>
                    <dd className="font-semibold text-foreground">
                      {meta ? `${meta.rating.toFixed(1)}/10` : "n.d."}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 uppercase tracking-wide">
                      <Wallet className="h-2.5 w-2.5 text-gold" /> Dep. min.
                    </dt>
                    <dd className="font-semibold text-foreground">{meta?.minDeposit ?? "n.d."}</dd>
                  </div>
                </dl>

                <a
                  href={op.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  onClick={() => void logExitPopupEvent("click", op.slug)}
                  className="gc-cta mt-3 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-gold px-2 py-2.5 text-[12px] font-bold text-primary-foreground shadow-lg shadow-gold/20 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  {config.cta_label} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-3 text-[10px] leading-snug text-muted-foreground">
            18+ · Il gioco può causare dipendenza patologica. Contenuto informativo su operatori con
            concessione ADM. Verifica sempre i T&C ufficiali.
          </p>
        </div>
      </div>
    </div>
  );
}
