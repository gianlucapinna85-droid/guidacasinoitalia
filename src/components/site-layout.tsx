import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ShieldCheck, Ban, LifeBuoy, Landmark } from "lucide-react";
import aamsLogo from "@/assets/aams-gioco-sicuro.jpg.asset.json";
import vietato18 from "@/assets/vietato-18.png.asset.json";
import admLogo from "@/assets/adm-logo.png.asset.json";

export function OfficialLogosBanner() {
  return (
    <div className="mt-10 rounded-xl border-2 border-gold/40 bg-white p-6 shadow-sm">
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-widest text-neutral-600">
        Loghi ufficiali — Amministrazione Autonoma dei Monopoli di Stato
      </p>
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <img
          src={aamsLogo.url}
          alt="Loghi ufficiali AAMS — Amministrazione Autonoma dei Monopoli di Stato, gioco legale e responsabile, vietato ai minori di 18 anni"
          className="h-auto w-full max-w-md"
          loading="lazy"
        />
        <img
          src={vietato18.url}
          alt="Vietato ai minori di 18 anni — simbolo di divieto rosso"
          width={160}
          height={160}
          className="h-40 w-40 shrink-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function ComplianceBadges() {
  const badges = [
    {
      icon: Landmark,
      label: "ADM",
      sub: "Agenzia Dogane e Monopoli",
      note: "Concessionari verificati",
      accent: "gold" as const,
      href: "https://www.adm.gov.it",
    },
    {
      icon: Ban,
      label: "+18",
      sub: "Vietato ai minori",
      note: "Documento richiesto",
      accent: "destructive" as const,
    },
    {
      icon: ShieldCheck,
      label: "RUA",
      sub: "Registro Unico Autoesclusi",
      note: "Autoesclusione gratuita",
      accent: "gold" as const,
      href: "https://www.adm.gov.it",
    },
    {
      icon: LifeBuoy,
      label: "800 558822",
      sub: "Telefono Verde ISS",
      note: "Anonimo e gratuito",
      accent: "muted" as const,
      href: "tel:800558822",
    },
  ];

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b) => {
        const styles =
          b.accent === "gold"
            ? "border-gold/50 bg-gold/10"
            : b.accent === "destructive"
              ? "border-destructive/50 bg-destructive/10"
              : "border-border bg-background";
        const iconStyles =
          b.accent === "gold"
            ? "bg-gold/20 text-gold ring-gold/40"
            : b.accent === "destructive"
              ? "bg-destructive/20 text-destructive ring-destructive/40"
              : "bg-muted text-foreground ring-border";
        const labelStyles =
          b.accent === "gold"
            ? "text-gold"
            : b.accent === "destructive"
              ? "text-destructive"
              : "text-foreground";
        const Wrapper = b.href ? "a" : "div";
        const wrapperProps = b.href
          ? {
              href: b.href,
              target: b.href.startsWith("http") ? "_blank" : undefined,
              rel: b.href.startsWith("http") ? "noopener noreferrer nofollow" : undefined,
            }
          : {};
        return (
          <Wrapper
            key={b.label}
            {...wrapperProps}
            className={`flex items-center gap-4 rounded-xl border-2 p-4 transition-colors ${styles} ${b.href ? "hover:brightness-110" : ""}`}
          >
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg ring-2 ${iconStyles}`}>
              <b.icon className="h-8 w-8" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <p className={`font-serif text-2xl font-bold leading-none tracking-tight ${labelStyles}`}>
                {b.label}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-foreground/90">
                {b.sub}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{b.note}</p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

export function AgeBanner() {
  return (
    <div className="w-full border-b border-border bg-destructive/10 text-destructive-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2 text-xs">
        <img
          src={vietato18.url}
          alt="Vietato ai minori di 18 anni"
          width={28}
          height={28}
          className="h-7 w-7 shrink-0"
        />
        <span className="text-foreground/90">
          <strong className="font-semibold text-destructive">Vietato ai minori di 18 anni.</strong>{" "}
          Il gioco può causare dipendenza patologica. Probabilità di vincita consultabili su{" "}
          <a href="https://www.adm.gov.it" target="_blank" rel="noopener noreferrer nofollow" className="underline">adm.gov.it</a>.
        </span>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gold text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold">GuidaCasinò<span className="text-gold">.IT</span></div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Comparatore informativo</div>
          </div>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link to="/" hash="operatori" className="text-muted-foreground transition-colors hover:text-foreground">Operatori ADM</Link>
          <Link to="/gioco-responsabile" className="text-muted-foreground transition-colors hover:text-foreground">Gioco responsabile</Link>
          <Link to="/note-legali" className="text-muted-foreground transition-colors hover:text-foreground">Note legali</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-lg font-semibold">GuidaCasinò<span className="text-gold">.IT</span></div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Portale informativo indipendente. Non offre servizi di gioco. Elenchiamo esclusivamente
              operatori titolari di concessione ADM (ex AAMS) in corso di validità.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Informazioni</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/note-legali" className="hover:text-foreground">Note legali</Link></li>
              <li><Link to="/gioco-responsabile" className="hover:text-foreground">Gioco responsabile</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy & Cookie</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("gc:open-cookie-preferences"))}
                  className="text-left hover:text-foreground"
                >
                  Gestisci cookie
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Risorse ufficiali</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.adm.gov.it" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-foreground">ADM</a></li>
              <li><a href="https://www.giocaresponsabile.it" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-foreground">Gioca Responsabile</a></li>
              <li><a href="https://www.iss.it/telefono-verde-per-le-dipendenze" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-foreground">TVNGA 800 558822</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-warning/30 bg-warning/10 p-4 text-xs text-foreground/80">
          <p className="font-semibold text-warning">Avvertenza obbligatoria</p>
          <p className="mt-1">
            Il gioco è vietato ai minori e può causare dipendenza patologica. Consulta le probabilità
            di vincita sui siti dei concessionari e su adm.gov.it. In caso di difficoltà rivolgiti al
            numero verde <strong>800 558822</strong> o al Registro Unico degli Autoesclusi (RUA).
          </p>
        </div>

        <ComplianceBadges />

        <OfficialLogosBanner />

        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-gold/40 bg-white p-6 shadow-sm">
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-neutral-600">
            Logo ufficiale — Agenzia delle Dogane e dei Monopoli
          </p>
          <a
            href="https://www.adm.gov.it"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Sito ufficiale ADM — Agenzia delle Dogane e dei Monopoli"
          >
            <img
              src={admLogo.url}
              alt="Logo ufficiale ADM — Agenzia delle Dogane e dei Monopoli"
              width={480}
              height={157}
              className="h-auto w-full max-w-md"
              loading="lazy"
            />
          </a>
        </div>




        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GuidaCasinò.IT — Contenuto informativo. Solo per +18.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AgeBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
