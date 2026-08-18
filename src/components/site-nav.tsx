import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { guides } from "@/data/guides";
import { operators } from "@/lib/operators";
import { slots } from "@/data/slots";
import { EXTERNAL_BLOG_URL } from "@/lib/internal-links";
import { categoryHubs } from "@/data/blog";
import { activePaymentMethods } from "@/lib/payments";
import { news } from "@/data/news";

type Item = { href: string; label: string; external?: boolean };
type Section = { id: string; title: string; items: Item[] };

const SECTIONS: Section[] = [
  {
    id: "principali",
    title: "Principali",
    items: [
      { href: "/", label: "Home" },
      { href: "/migliori-casino-scelti", label: "Migliori casinò scelti da noi" },
      { href: "/slot-piu-giocate", label: "Le 10 slot più giocate" },
      { href: "/come-registrarsi", label: "Come registrarsi" },
      { href: "/come-valutiamo-i-casino", label: "Come valutiamo i casinò" },
      { href: EXTERNAL_BLOG_URL, label: "📖 Approfondimenti Extra Casinò", external: true },
    ],
  },
  {
    id: "recensioni",
    title: "Recensioni",
    items: [
      { href: "/recensioni", label: "Tutte le recensioni" },
      ...operators.map((op) => ({ href: `/operatori/${op.slug}`, label: `Recensione ${op.name}` })),
    ],
  },
  {
    id: "guide",
    title: "Guide",
    items: guides.map((g) => ({ href: g.path, label: g.title })),
  },
  {
    id: "slot",
    title: "Slot",
    items: [
      { href: "/slot", label: "Tutte le slot per provider e RTP" },
      { href: "/slot-piu-giocate", label: "Le 10 slot più giocate" },
      { href: "/slot-online-soldi-veri", label: "Slot online soldi veri" },
      { href: "/slot-alta-volatilita", label: "Slot ad alta volatilità" },
      { href: "/slot-rtp-alto", label: "Slot con RTP alto" },
      ...slots.map((s) => ({ href: `/slot/${s.slug}`, label: s.name })),
    ],
  },
  {
    id: "bonus",
    title: "Bonus",
    items: [
      { href: "/bonus", label: "Hub bonus: tutte le sottocategorie" },
      { href: "/bonus-casino-online-senza-deposito", label: "Bonus senza deposito" },
      { href: "/bonus-senza-deposito", label: "Bonus senza deposito: guida" },
      { href: "/bonus-immediato-spid", label: "Bonus immediato con SPID" },
      { href: "/bonus-scommesse-sportive", label: "Bonus scommesse sportive" },
    ],
  },
  {
    id: "pagamenti",
    title: "Metodi di pagamento",
    items: [
      { href: "/pagamenti", label: "Tutti i metodi" },
      ...activePaymentMethods.map((m) => ({ href: `/pagamenti/${m.slug}`, label: m.name })),
      { href: "/pagamenti-sicuri-casino", label: "Pagamenti sicuri nei casinò" },
      { href: "/prelievi-veloci", label: "Prelievi veloci" },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    items: [
      { href: "/blog", label: "Tutti gli articoli" },
      ...categoryHubs.map((h) => ({ href: `/blog/${h.slug}`, label: h.title })),
    ],
  },
  {
    id: "news",
    title: "News",
    items: [
      { href: "/news", label: "Tutte le news" },
      ...news.slice(0, 8).map((n) => ({ href: `/news/${n.slug}`, label: n.title })),
    ],
  },
  {
    id: "scommesse",
    title: "Scommesse sportive",
    items: [
      { href: "/scommesse-sportive-online-adm", label: "Scommesse sportive online ADM" },
      { href: "/migliori-siti-scommesse-adm", label: "Migliori siti scommesse ADM" },
      { href: "/scommesse-live-come-funzionano", label: "Scommesse live: come funzionano" },
      { href: "/scommesse-serie-a-guida", label: "Guida scommesse Serie A" },
      { href: "/pronostici-calcio-come-analizzare", label: "Pronostici calcio: come analizzarli" },
      { href: "/quote-live-vs-prematch", label: "Quote live vs pre-match" },
      { href: "/come-leggere-quote-calcio", label: "Come leggere le quote" },
      { href: "/casino-o-scommesse-sportive", label: "Casinò o scommesse sportive?" },
    ],
  },
  {
    id: "casino",
    title: "Casinò e ADM",
    items: [
      { href: "/guida-casino-online-italia", label: "Guida casinò online Italia" },
      { href: "/migliori-casino-online-adm", label: "Migliori casino online ADM" },
      { href: "/casino-mobile-adm", label: "Casinò da mobile ADM" },
      { href: "/casino-live", label: "Casinò live" },
      { href: "/roulette-online-italia", label: "Roulette online Italia" },
      { href: "/blackjack-online-italia", label: "Blackjack online Italia" },
      { href: "/verificare-licenza-adm", label: "Verificare una licenza ADM" },
    ],
  },
  {
    id: "info",
    title: "Informazioni",
    items: [
      { href: "/gioco-responsabile", label: "Gioco responsabile" },
      { href: "/note-legali", label: "Note legali" },
      { href: "/privacy", label: "Privacy & Cookie" },
    ],
  },
];

/** Menu hamburger a sezioni collassabili: ogni sezione apre i suoi link. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => setOpen(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const trigger = (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-controls="menu-principale"
      aria-label={open ? "Chiudi il menu" : "Apri il menu di navigazione"}
      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-gold/50 bg-gradient-to-b from-card to-secondary px-3 text-gold shadow-sm transition-all duration-300 hover:border-gold hover:shadow-[0_6px_18px_-10px_var(--gc-glow)] active:scale-95"
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      <span className="hidden text-xs font-bold uppercase tracking-widest sm:inline">Menu</span>
    </button>
  );

  const overlay = (
    <div
      id="menu-principale"
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-foreground/25 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />
      <nav
        aria-label="Menu principale"
        className={`absolute right-0 top-0 flex h-full w-[90%] max-w-sm flex-col border-l border-gold/25 bg-background shadow-[0_0_60px_-15px_rgba(28,22,8,0.35)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-secondary to-card px-4 py-3.5">
          <div className="leading-tight">
            <span className="block font-serif text-base">
              GuidaCasinò<span className="text-gold">.IT</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Tutte le sezioni
            </span>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Chiudi il menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-card text-gold transition-colors hover:bg-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3">
          {SECTIONS.map((s, i) => {
            const isOpen = expanded === s.id;
            return (
              <div
                key={s.id}
                className={`gc-fade-up mb-2 overflow-hidden rounded-xl border transition-colors ${
                  isOpen ? "border-gold/45 bg-card shadow-[0_10px_26px_-22px_var(--gc-glow)]" : "border-border bg-card"
                }`}
                style={{ animationDelay: `${i * 25}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left font-serif text-[15px] text-foreground transition-colors hover:bg-accent/60"
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold ${
                        isOpen
                          ? "border-gold bg-gold text-primary-foreground"
                          : "border-gold/40 bg-accent text-gold"
                      }`}
                    >
                      {s.title.charAt(0)}
                    </span>
                    {s.title}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {s.items.length}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden border-t border-border/70 px-1.5 py-1.5">
                    {s.items.map((it) => (
                      <li key={`${s.id}-${it.href}`}>
                        {it.external ? (
                          <a
                            href={it.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-gold transition-colors hover:bg-accent"
                          >
                            {it.label}
                          </a>
                        ) : (
                          <Link
                            to={it.href}
                            onClick={close}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                            activeProps={{
                              className:
                                "block rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-gold",
                            }}
                          >
                            {it.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <p className="mt-5 text-[10px] leading-snug text-muted-foreground">
            Vietato ai minori di 18 anni. Il gioco può causare dipendenza patologica.
          </p>
        </div>
      </nav>
    </div>
  );


  return (
    <>
      {trigger}
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
