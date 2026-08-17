import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { guides } from "@/data/guides";
import { operators } from "@/lib/operators";
import { slots } from "@/data/slots";
import { EXTERNAL_BLOG_URL } from "@/lib/internal-links";

const PRINCIPALI = [
  { to: "/", label: "Home" },
  { to: "/migliori-casino-scelti", label: "Migliori casinò scelti da noi" },
  { to: "/lista-casino-adm", label: "Lista completa casinò ADM" },
  { to: "/slot-piu-giocate", label: "Le 10 slot più giocate" },
  { to: "/recensioni", label: "Recensioni casinò" },
  { to: "/pagamenti", label: "Metodi di pagamento" },
  { to: "/news", label: "News" },
  { to: "/blog", label: "Blog" },
  { to: "/come-registrarsi", label: "Come registrarsi" },
  { to: "/come-valutiamo-i-casino", label: "Come valutiamo i casinò" },
];

const LEGALI = [
  { to: "/gioco-responsabile", label: "Gioco responsabile" },
  { to: "/note-legali", label: "Note legali" },
  { to: "/privacy", label: "Privacy & Cookie" },
];

/** Menu hamburger: contiene tutte le sezioni del sito con link indicizzabili. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-principale"
        aria-label={open ? "Chiudi il menu" : "Apri il menu di navigazione"}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gold/50 bg-gold/10 text-gold transition-colors hover:bg-gold/20 md:h-10 md:w-10"
      >
        {open ? <Menu className="h-5 w-5 rotate-90" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="menu-principale"
        className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none invisible opacity-0"} transition-opacity`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={close}
          aria-hidden
        />
        <nav
          aria-label="Menu principale"
          className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto border-l border-border bg-card p-4 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-base">Tutte le sezioni</span>
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi il menu"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <MenuGroup title="Principali">
            {PRINCIPALI.map((i) => (
              <MenuLink key={i.to} to={i.to} label={i.label} onClick={close} />
            ))}
            <li>
              <a
                href={EXTERNAL_BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-2 py-1.5 text-sm font-semibold text-gold hover:bg-gold/10"
              >
                📖 Approfondimenti Extra Casinò
              </a>
            </li>
          </MenuGroup>

          <MenuGroup title="Guide">
            {guides.map((g) => (
              <MenuLink key={g.path} to={g.path} label={g.title} onClick={close} />
            ))}
          </MenuGroup>

          <MenuGroup title="Slot più popolari">
            <MenuLink to="/slot-piu-giocate" label="Le 10 slot più giocate" onClick={close} />
            {slots.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/slot/$slug"
                  params={{ slug: s.slug }}
                  onClick={close}
                  className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </MenuGroup>

          <MenuGroup title="Recensioni operatori ADM">
            {operators.map((op) => (
              <li key={op.slug}>
                <Link
                  to="/operatori/$slug"
                  params={{ slug: op.slug }}
                  onClick={close}
                  className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Recensione {op.name}
                </Link>
              </li>
            ))}
          </MenuGroup>

          <MenuGroup title="Informazioni">
            {LEGALI.map((i) => (
              <MenuLink key={i.to} to={i.to} label={i.label} onClick={close} />
            ))}
          </MenuGroup>

          <p className="mt-6 text-[10px] leading-snug text-muted-foreground">
            Vietato ai minori di 18 anni. Il gioco può causare dipendenza patologica.
          </p>
        </nav>
      </div>
    </>
  );
}

function MenuGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h2 className="px-2 text-[10px] font-semibold uppercase tracking-widest text-gold">{title}</h2>
      <ul className="mt-1.5 space-y-0.5">{children}</ul>
    </div>
  );
}

function MenuLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        activeProps={{ className: "block rounded-md px-2 py-1.5 text-sm font-semibold text-gold" }}
      >
        {label}
      </Link>
    </li>
  );
}
