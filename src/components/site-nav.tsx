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
      { href: "/lista-casino-adm", label: "Lista completa casinò ADM" },
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gold/50 bg-gold/10 text-gold transition-all duration-300 hover:bg-gold/20 active:scale-95 md:h-10 md:w-10"
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />
      <nav
        aria-label="Menu principale"
        className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="font-serif text-base">Sezioni del sito</span>
          <button
            type="button"
            onClick={close}
            aria-label="Chiudi il menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
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
                className="gc-fade-up border-b border-border/60 last:border-0"
                style={{ animationDelay: `${i * 25}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left font-serif text-[15px] text-foreground transition-colors hover:bg-muted"
                >
                  {s.title}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden">
                    {s.items.map((it) => (
                      <li key={`${s.id}-${it.href}`}>
                        {it.external ? (
                          <a
                            href={it.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-md px-3 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
                          >
                            {it.label}
                          </a>
                        ) : (
                          <Link
                            to={it.href}
                            onClick={close}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            activeProps={{
                              className:
                                "block rounded-md px-3 py-2 text-sm font-semibold text-gold",
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
