import { Link } from "@tanstack/react-router";
import { lazy, Suspense, type ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";

const ExitIntent = lazy(() => import("@/components/exit-intent"));
const StickyCompareCTA = lazy(() =>
  import("@/components/casino-ui").then((m) => ({ default: m.StickyCompareCTA })),
);
import siteLogo from "@/assets/site-logo.webp";
import { ShieldCheck, Ban, LifeBuoy, Landmark, BadgeCheck, Youtube, Instagram, Music2, Send } from "lucide-react";
import vietato18Url from "@/assets/logos/v18.webp";
import admLogoUrl from "@/assets/logos/adm.webp";
import vietato18BadgeUrl from "@/assets/logos/v18-badge.webp";
import admBadgeUrl from "@/assets/logos/adm-badge.webp";
import { EXTERNAL_BLOG_URL } from "@/lib/internal-links";
import { PageOfferStrip } from "@/components/page-offer-strip";


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
    "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-white shadow-sm md:h-10 md:w-10";
  const img = "h-full w-full scale-[1.06] object-contain p-[1px]";
  return (
    <div
      className="flex w-full items-center justify-between gap-1"
      aria-label={`Garanzie di ${name ?? "operatore"}: concessione ADM, vietato ai minori di 18 anni, operatore legale in Italia, dati verificati`}
    >
      <span className={`${dot} border-gold/60`} title="Concessione ADM">
        <img src={admBadgeUrl} alt="Concessione ADM" width={40} height={40} className={img} loading="lazy" decoding="async" />
      </span>
      <span className={`${dot} border-destructive/60`} title="Vietato ai minori di 18 anni">
        <img src={vietato18BadgeUrl} alt="Vietato ai minori di 18 anni" width={40} height={40} className={img} loading="lazy" decoding="async" />
      </span>
      <span className={`${dot} border-border`} title="Operatore legale in Italia" role="img" aria-label="Bandiera italiana">
        <span className="flex h-full w-full overflow-hidden rounded-full">
          <span className="h-full w-1/3 bg-[#008C45]" />
          <span className="h-full w-1/3 bg-white" />
          <span className="h-full w-1/3 bg-[#CD212A]" />
        </span>
      </span>
      <span className={`${dot} border-gold/60 bg-gold/10`} title="Verificato sull'elenco pubblico ADM">
        <BadgeCheck className="h-7 w-7 text-gold md:h-8 md:w-8" strokeWidth={2.4} />
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
      href: "/verificare-licenza-adm",
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
      href: "/gioco-responsabile",
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
      <div className="mx-auto flex max-w-6xl xl:max-w-7xl items-center justify-center gap-2 px-3 py-1 text-[10px] leading-snug md:gap-3 md:px-4 md:py-2 md:text-xs">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full border border-destructive/60 bg-white shadow-sm md:h-7 md:w-7">
          <img
            src={vietato18BadgeUrl}
            alt="Vietato ai minori di 18 anni"
            width={28}
            height={28}
            className="h-full w-full object-contain p-[1px]"
            loading="eager"
            decoding="async"
          />
        </span>
        <span className="text-foreground/90">
          <strong className="font-semibold text-destructive">Vietato ai minori di 18 anni.</strong>{" "}
          Il gioco può causare dipendenza patologica. Probabilità di vincita su{" "}
          <Link to="/verificare-licenza-adm" className="underline">adm.gov.it</Link>.
        </span>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl xl:max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 md:gap-4 md:px-4 md:py-3 lg:flex lg:justify-between lg:gap-8 lg:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2 md:gap-2.5">
          <img
            src={siteLogo}
            alt="Logo GuidaCasinò.IT"
            width={36}
            height={36}
            decoding="async"
            className="h-9 w-9 shrink-0 rounded-full object-contain md:h-11 md:w-11"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-serif text-[15px] font-semibold md:text-lg">GuidaCasinò<span className="text-gold">.IT</span></div>
            <div className="truncate text-[9px] uppercase tracking-widest text-muted-foreground md:text-[10px]">Comparatore informativo</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-8 xl:text-[15px]">
          <Link to="/migliori-casino-online-adm" className="relative text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full">Casinò ADM</Link>
          <Link to="/bonus" className="relative text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full">Bonus</Link>
          <Link to="/slot" className="relative text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full">Slot</Link>
          <Link to="/recensioni" className="relative text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full">Recensioni</Link>
          <Link to="/blog" className="relative text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full">Blog</Link>
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

        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
          <Link
            to="/verificare-licenza-adm"
            aria-label="Concessione ADM — Agenzia delle Dogane e dei Monopoli"
            title="Operatori con concessione ADM"
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gold/70 bg-white shadow-sm transition-transform hover:scale-105 md:h-10 md:w-10"
          >
            <img src={admBadgeUrl} alt="Logo ufficiale ADM" width={40} height={40} className="h-full w-full object-contain p-[2px]" loading="lazy" decoding="async" />
          </Link>
          <span
            aria-label="Vietato ai minori di 18 anni"
            title="Vietato ai minori di 18 anni"
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-destructive/70 bg-white shadow-sm md:h-10 md:w-10"
          >
            <img src={vietato18BadgeUrl} alt="Vietato ai minori di 18 anni" width={40} height={40} className="h-full w-full object-contain p-[2px]" loading="lazy" decoding="async" />
          </span>
          <SiteNav />
        </div>


      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-2.5 md:px-6 py-12">
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
              <li><Link to="/mappa-sito" className="hover:text-foreground">Mappa del sito</Link></li>
               <li><Link to="/assistente-guida-casino" className="hover:text-foreground">Assistente GuidaCasinò</Link></li>
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
              <li><Link to="/guide" className="font-medium text-foreground hover:text-gold">Tutte le guide</Link></li>
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
      <PageOfferStrip />
      <Footer />
      <Suspense fallback={null}>
        <ExitIntent />
      </Suspense>
      <Suspense fallback={null}>
        <StickyCompareCTA />
      </Suspense>
    </div>
  );
}
