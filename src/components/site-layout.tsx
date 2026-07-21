import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export function AgeBanner() {
  return (
    <div className="w-full border-b border-border bg-destructive/10 text-destructive-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-xs">
        <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
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
