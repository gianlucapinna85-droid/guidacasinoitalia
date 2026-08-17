import { Link } from "@tanstack/react-router";
import { lazy, Suspense, type ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";

const ExitIntent = lazy(() => import("@/components/exit-intent"));
import siteLogo from "@/assets/site-logo.webp";
import { ShieldCheck, Ban, LifeBuoy, Landmark, BadgeCheck, Youtube, Instagram, Music2, Send } from "lucide-react";
import vietato18Url from "@/assets/logos/v18.webp";
import admLogoUrl from "@/assets/logos/adm.webp";
import { RelatedProjectBox } from "@/components/casino-ui";
import { EXTERNAL_BLOG_URL } from "@/lib/internal-links";


const vietato18 = { url: vietato18Url };
const admLogo = { url: admLogoUrl };

export const YOUTUBE_URL = "https://youtube.com/@guidacasinoitalia?si=t6PGoRaPJ6Pyiyc4";


export function OfficialLogosBanner() {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2 md:mt-4">
      <a
        href="https://www.adm.gov.it"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Sito ufficiale ADM — Agenzia delle Dogane e dei Monopoli"
        className="flex items-center gap-2 rounded-lg border border-gold/50 bg-white px-2.5 py-1.5 transition-colors hover:brightness-105 md:px-3 md:py-2"
      >
        <img
          src={admLogo.url}
          alt="Logo ufficiale ADM — Agenzia delle Dogane e dei Monopoli"
          width={224}
          height={73}
          className="h-6 w-auto shrink-0 md:h-7"
          loading="lazy" decoding="async" />
        <span className="min-w-0">
          <span className="block text-[10px] font-bold leading-tight text-neutral-800 md:text-[11px]">Concessione ADM</span>
          <span className="block truncate text-[9px] uppercase tracking-wide text-neutral-500">Operatori legali in Italia</span>
        </span>
      </a>
      <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-white px-2.5 py-1.5 md:px-3 md:py-2">
        <img
          src={vietato18.url}
          alt="Vietato ai minori di 18 anni"
          width={28}
          height={28}
          className="h-6 w-6 shrink-0 md:h-7 md:w-7"
          loading="lazy" decoding="async" />
        <span className="min-w-0">
          <span className="block text-[10px] font-bold leading-tight text-neutral-800 md:text-[11px]">Vietato ai minori</span>
          <span className="block truncate text-[9px] uppercase tracking-wide text-neutral-500">Gioco responsabile +18</span>
        </span>
      </div>
    </div>
  );
}

export function OperatorTrustDots({ name }: { name?: string }) {
  const dot =
    "flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm md:h-8 md:w-8";
  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`Garanzie di ${name ?? "operatore"}: concessione ADM, vietato ai minori di 18 anni, operatore legale in Italia, dati verificati`}
    >
      <span className={`${dot} border-gold/60`} title="Concessione ADM">
        <img src={admLogo.url} alt="Concessione ADM" width={20} height={20} className="h-4 w-4 object-contain md:h-5 md:w-5" loading="lazy" decoding="async" />
      </span>
      <span className={`${dot} border-destructive/60`} title="Vietato ai minori di 18 anni">
        <img src={vietato18.url} alt="Vietato ai minori di 18 anni" width={20} height={20} className="h-4 w-4 object-contain md:h-5 md:w-5" loading="lazy" decoding="async" />
      </span>
      <span className={`${dot} border-border`} title="Operatore legale in Italia" role="img" aria-label="Bandiera italiana">
        <span className="flex h-4 w-4 overflow-hidden rounded-full md:h-5 md:w-5">
          <span className="h-full w-1/3 bg-[#008C45]" />
          <span className="h-full w-1/3 bg-white" />
          <span className="h-full w-1/3 bg-[#CD212A]" />
        </span>
      </span>
      <span className={`${dot} border-gold/60 bg-gold/10`} title="Verificato sull'elenco pubblico ADM">
        <BadgeCheck className="h-4 w-4 text-gold md:h-5 md:w-5" strokeWidth={2.4} />
      </span>
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
    <div className="mt-4 grid grid-cols-2 gap-2 md:mt-6 lg:grid-cols-4">
      {badges.map((b) => {
        const styles =
          b.accent === "gold"
            ? "border-gold/50 bg-gold/10"
            : b.accent === "destructive"
              ? "border-destructive/50 bg-destructive/10"
              : "border-border bg-background";
        const iconStyles =
          b.accent === "gold"
            ? "text-gold"
            : b.accent === "destructive"
              ? "text-destructive"
              : "text-foreground";
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
            className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 transition-colors md:px-3 md:py-2 ${styles} ${b.href ? "hover:brightness-110" : ""}`}
          >
            <b.icon className={`h-3.5 w-3.5 shrink-0 md:h-4 md:w-4 ${iconStyles}`} strokeWidth={2.2} />
            <div className="min-w-0">
              <p className={`text-[13px] font-bold leading-tight md:text-sm ${labelStyles}`}>{b.label}</p>
              <p className="truncate text-[9px] uppercase tracking-wide text-muted-foreground md:text-[10px]">
                {b.sub}
              </p>
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
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-3 py-1 text-[10px] leading-snug md:gap-3 md:px-4 md:py-2 md:text-xs">
        <img
          src={vietato18.url}
          alt="Vietato ai minori di 18 anni"
          width={24}
          height={24}
          className="h-4 w-4 shrink-0 md:h-7 md:w-7" loading="eager" decoding="async" />
        <span className="text-foreground/90">
          <strong className="font-semibold text-destructive">Vietato ai minori di 18 anni.</strong>{" "}
          Il gioco può causare dipendenza patologica. Probabilità di vincita su{" "}
          <a href="https://www.adm.gov.it" target="_blank" rel="noopener noreferrer nofollow" className="underline">adm.gov.it</a>.
        </span>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 md:px-4 md:py-4">
        <Link to="/" className="flex items-center gap-2 md:gap-2.5">
          <img
            src={siteLogo}
            alt="Logo GuidaCasinò.IT"
            width={36}
            height={36}
            decoding="async"
            className="h-8 w-8 shrink-0 rounded-full object-contain md:h-11 md:w-11"
          />
          <div className="leading-tight">
            <div className="font-serif text-[15px] font-semibold md:text-lg">GuidaCasinò<span className="text-gold">.IT</span></div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground md:text-[10px]">Comparatore informativo</div>
          </div>
        </Link>


        <div className="flex items-center gap-1.5">
          <a
            href="https://www.adm.gov.it"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Concessione ADM — Agenzia delle Dogane e dei Monopoli"
            title="Operatori con concessione ADM"
            className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/60 bg-white shadow-sm md:h-9 md:w-9"
          >
            <img src={admLogo.url} alt="Logo ufficiale ADM" width={20} height={20} className="h-4 w-4 object-contain md:h-6 md:w-6" loading="lazy" decoding="async" />
          </a>
          <span
            aria-label="Vietato ai minori di 18 anni"
            title="Vietato ai minori di 18 anni"
            className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-destructive/60 bg-white shadow-sm md:h-9 md:w-9"
          >
            <img src={vietato18.url} alt="Vietato ai minori di 18 anni" width={20} height={20} className="h-4 w-4 object-contain md:h-6 md:w-6" loading="lazy" decoding="async" />
          </span>
          <span
            title="Operatori verificati sull'elenco pubblico ADM"
            className="hidden items-center gap-1 rounded-full border border-gold/50 bg-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold sm:inline-flex"
          >
            <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
            Verificato
          </span>
          <SiteNav />
        </div>


        <nav className="hidden gap-6 text-sm md:flex">
          <Link to="/" hash="operatori" className="text-muted-foreground transition-colors hover:text-foreground">Operatori ADM</Link>
          <Link to="/migliori-casino-online-adm" className="text-muted-foreground transition-colors hover:text-foreground">Casinò ADM</Link>
          <Link to="/bonus-casino-online-senza-deposito" className="text-muted-foreground transition-colors hover:text-foreground">Bonus casinò</Link>
          <Link to="/roulette-online-italia" className="text-muted-foreground transition-colors hover:text-foreground">Roulette</Link>
          <Link to="/blackjack-online-italia" className="text-muted-foreground transition-colors hover:text-foreground">Blackjack</Link>
          <Link to="/slot-online-soldi-veri" className="text-muted-foreground transition-colors hover:text-foreground">Slot online</Link>
          <Link to="/casino-online-principianti" className="text-muted-foreground transition-colors hover:text-foreground">Guide</Link>
          <Link to="/news" className="text-muted-foreground transition-colors hover:text-foreground">News</Link>
          <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
          <Link to="/recensioni" className="text-muted-foreground transition-colors hover:text-foreground">Recensioni</Link>
          <Link to="/pagamenti" className="text-muted-foreground transition-colors hover:text-foreground">Pagamenti</Link>
          <a
            href={EXTERNAL_BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold transition-colors hover:bg-gold/20"
            title="Approfondimenti Extra Casinò"
          >
            📖 Approfondimenti Extra
          </a>

          <Link to="/come-registrarsi" className="text-muted-foreground transition-colors hover:text-foreground">Come registrarsi</Link>
          <Link to="/gioco-responsabile" className="text-muted-foreground transition-colors hover:text-foreground">Gioco responsabile</Link>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Canale YouTube di GuidaCasinò.IT"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Youtube className="h-4 w-4" /> YouTube
          </a>
        </nav>


      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-12">
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
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Guide</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/bonus-senza-deposito" className="hover:text-foreground">Bonus senza deposito</Link></li>
              <li><Link to="/migliori-casino-online-adm" className="hover:text-foreground">Migliori casino online ADM</Link></li>
              <li><Link to="/slot-online-soldi-veri" className="hover:text-foreground">Slot online soldi veri</Link></li>
              <li><Link to="/roulette-online-italia" className="hover:text-foreground">Roulette online Italia</Link></li>
              <li><Link to="/blackjack-online-italia" className="hover:text-foreground">Blackjack online Italia</Link></li>
              <li><Link to="/come-scegliere-casino-online-adm" className="hover:text-foreground">Come scegliere un casinò ADM</Link></li>
              <li><Link to="/verificare-licenza-adm" className="hover:text-foreground">Verificare una licenza ADM</Link></li>
              <li><Link to="/slot-rtp-alto" className="hover:text-foreground">Slot con RTP alto</Link></li>
              <li><Link to="/pagamenti-sicuri-casino" className="hover:text-foreground">Pagamenti sicuri</Link></li>
              <li><Link to="/news" className="hover:text-foreground">News casinò</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog casinò e sport</Link></li>
              <li>
                <a href={EXTERNAL_BLOG_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:text-foreground">
                  📖 Approfondimenti Extra Casinò
                </a>
              </li>

              <li><Link to="/come-registrarsi" className="hover:text-foreground">Come registrarsi</Link></li>
              <li><a href="https://www.adm.gov.it" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-foreground">ADM</a></li>
              <li><a href="https://www.giocaresponsabile.it" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-foreground">Gioca Responsabile</a></li>
            </ul>
            <h4 className="mt-5 text-xs font-semibold uppercase tracking-widest text-foreground">Seguici</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canale YouTube di GuidaCasinò.IT"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold hover:bg-gold/20"
              >
                <Youtube className="h-4 w-4" /> YouTube
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground" title="In arrivo">
                <Instagram className="h-4 w-4" /> Instagram
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground" title="In arrivo">
                <Music2 className="h-4 w-4" /> TikTok
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground" title="In arrivo">
                <Send className="h-4 w-4" /> Telegram
              </span>
            </div>
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

        <RelatedProjectBox className="mt-8" />







        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GuidaCasinò.IT — Contenuto informativo. Solo per +18.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col pb-20 md:pb-0">
      <AgeBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <ExitIntent />
      </Suspense>
    </div>
  );
}
