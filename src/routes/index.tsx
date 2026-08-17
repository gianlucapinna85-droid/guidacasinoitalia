import { useState, useRef, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ScrollText, Scale, Users, ArrowRight, CheckCircle2, Calendar, RefreshCw } from "lucide-react";
import heroBgAvif from "@/assets/hero-bg.avif";
import heroBgWebp from "@/assets/hero-bg.webp";
import { PageShell, ComplianceBadges, OfficialLogosBanner, OperatorTrustDots } from "@/components/site-layout";
import { operators, sortedOperators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";
import { RatingBadge, CasinoBadges } from "@/components/casino-ui";
import { CasinoComparator } from "@/components/casino-comparator";
import { ReadMore } from "@/components/read-more";
import { socialImageMeta } from "@/lib/social-image";





const FAQS = [
  {
    q: "Cosa significa concessione ADM?",
    a: "È l'autorizzazione rilasciata dall'Agenzia delle Dogane e dei Monopoli che consente a un operatore di offrire legalmente giochi con vincite in denaro in Italia. Solo gli operatori concessionari sono soggetti ai controlli tecnici e fiscali dello Stato italiano.",
  },
  {
    q: "Questo sito offre servizi di gioco?",
    a: "No. GuidaCasinò.IT è un portale esclusivamente informativo. Non gestisce piattaforme di gioco, non accetta scommesse e non promuove bonus o iniziative commerciali dei concessionari.",
  },
  {
    q: "Perché non trovo codici promozionali o bonus?",
    a: "Il D.L. 87/2018 (art. 9), noto come Decreto Dignità, vieta qualsiasi forma di pubblicità di giochi con vincite in denaro in Italia. Ci limitiamo pertanto a informazioni oggettive e verificabili.",
  },
  {
    q: "Come posso autoescludermi dal gioco?",
    a: "Tramite il Registro Unico degli Autoesclusi (RUA) gestito da ADM. La procedura è gratuita, immediata su tutti i concessionari e può essere temporanea o a tempo indeterminato.",
  },
  {
    q: "Quali sono i metodi di pagamento accettati dai concessionari ADM?",
    a: "I concessionari ADM accettano tipicamente carte di credito e debito (Visa, Mastercard), bonifico bancario, PayPal, Postepay, Skrill, Neteller e Paysafecard. Ogni operatore pubblica l'elenco completo dei metodi supportati nella sezione informativa del proprio sito. I tempi di accredito e prelievo variano in base allo strumento scelto e sono soggetti alle verifiche antifrode e antiriciclaggio previste dalla normativa italiana.",
  },
  {
    q: "Come funzionano i requisiti di puntata (wagering)?",
    a: "I requisiti di puntata indicano quante volte un importo deve essere giocato prima di poter essere prelevato. Trattandosi di condizioni contrattuali legate a iniziative commerciali, in Italia non ne pubblichiamo i dettagli: la loro comunicazione al pubblico rientra tra le forme vietate dal Decreto Dignità. Le condizioni complete sono consultabili esclusivamente nella sezione termini e condizioni del concessionario, riservata agli utenti registrati.",
  },
  {
    q: "I siti di comparazione informativa sono sicuri?",
    a: "Un portale informativo è sicuro quando non raccoglie dati sensibili, non gestisce transazioni e si limita a riportare informazioni verificabili da fonti pubbliche (elenco ADM, siti ufficiali dei concessionari, normativa vigente). GuidaCasinò.IT non richiede registrazione, non tratta dati di gioco e utilizza cookie solo previo consenso esplicito ai sensi del GDPR.",
  },
  {
    q: "Come verifico che un operatore abbia una concessione ADM valida?",
    a: "L'Agenzia delle Dogane e dei Monopoli pubblica sul proprio sito (adm.gov.it) l'elenco ufficiale e aggiornato dei concessionari autorizzati, con il numero di concessione. È sempre consigliabile confrontare il numero indicato in fondo al sito dell'operatore con quello riportato nell'elenco pubblico ADM prima di qualsiasi interazione.",
  },
  {
    q: "Cosa indica l'RTP (Return to Player)?",
    a: "L'RTP è la percentuale teorica di reintegro al giocatore calcolata su un numero molto elevato di giocate. Un RTP del 96% significa che, statisticamente e nel lungo periodo, il gioco restituisce 96€ ogni 100€ puntati. Non è una garanzia di vincita sulla singola sessione: il risultato di ogni giocata è determinato da generatori di numeri casuali certificati.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Migliori Casino Online ADM 2026 | Guida Casinò Italia" },
      { name: "description", content: "Confronta i migliori casino online ADM in Italia: bonus senza deposito, recensioni, slot, roulette e guide per giocare sicuri. +18." },

      { name: "keywords", content: "migliori casino online adm, bonus casino senza deposito, casino online sicuri italia, slot online affidabili, guide casino online, recensioni casino adm, bonus benvenuto casino 2026, casino adm, casino aams, bonus senza deposito, bonus senza deposito immediato, casino online sicuri, casino online italiani, migliori casino online 2026, concessione adm, gioco legale italia, casino con spid, come verificare licenza adm, casino legali italia elenco, quali sono i casino con concessione adm" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "ai-content-declaration", content: "informational, editorial, non-promotional" },
      { name: "audience", content: "adults 18+" },
      { name: "rating", content: "adult" },
      { name: "geo.region", content: "IT" },
      { name: "language", content: "it-IT" },
      { name: "author", content: "GuidaCasinò.IT" },
      { property: "og:title", content: "Guida Casinò Italia | Migliori Casino Online ADM, Bonus e Recensioni 2026" },
      ...socialImageMeta(),
      { property: "og:description", content: "Guida Casinò Italia confronta i migliori casino online ADM in Italia con bonus di benvenuto, recensioni complete, slot machine, roulette, blackjack e guide aggiornate per giocare in modo sicuro e responsabile." },

      { property: "og:url", content: "https://www.guidacasino-italia.it/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://www.guidacasino-italia.it/" },
      { name: "twitter:title", content: "Guida Casinò Italia | Migliori Casino Online ADM, Bonus e Recensioni 2026" },
      { name: "twitter:description", content: "Guida Casinò Italia confronta i migliori casino online ADM in Italia con bonus di benvenuto, recensioni complete, slot machine, roulette, blackjack e guide aggiornate per giocare in modo sicuro e responsabile." },


    ],
    links: [
      { rel: "canonical", href: "https://www.guidacasino-italia.it/" },
      { rel: "preload", as: "image", href: heroBgAvif, type: "image/avif", fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "it-IT",
          mainEntity: [...QUICK_ANSWERS, ...FAQS].map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Operatori con concessione ADM",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: sortedOperators.length,
          itemListElement: sortedOperators.map((op, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Organization",
              name: op.name,
              url: op.officialUrl,
              identifier: op.concessionN,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          sortedOperators.slice(0, 10).map((op, i) => ({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: op.name,
              url: op.officialUrl,
              identifier: op.concessionN,
            },
            author: { "@type": "Organization", name: "Guida Casino Italia" },
            reviewBody: `Scheda informativa del concessionario ${op.name} (${op.concessionN}): RTP medio dichiarato ${op.rtpAverage}, attivo dal ${op.founded}, oltre ${op.games} titoli disponibili. Contenuto redatto a fini esclusivamente informativi sulla base di fonti pubbliche.`,
            reviewRating: {
              "@type": "Rating",
              ratingValue: (5 - i * 0.1).toFixed(1),
              bestRating: "5",
              worstRating: "1",
            },
          }))
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.guidacasino-italia.it/#webpage",
          url: "https://www.guidacasino-italia.it/",
          name: "Guida Casino Italia 2026 | Migliori Casinò ADM e Bonus Senza Deposito",
          inLanguage: "it-IT",
          isFamilyFriendly: false,
          dateModified: new Date().toISOString().slice(0, 10),
          about: [
            { "@type": "Thing", name: "Casinò online con concessione ADM" },
            { "@type": "Thing", name: "Bonus senza deposito" },
            { "@type": "Thing", name: "Gioco legale in Italia" },
            { "@type": "Thing", name: "Gioco responsabile" },
          ],
          mentions: sortedOperators.map((op) => ({
            "@type": "Organization",
            name: op.name,
            identifier: op.concessionN,
            url: op.officialUrl,
          })),
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", "#risposte-rapide"],
          },
          publisher: { "@type": "Organization", name: "Guida Casino Italia", alternateName: "GuidaCasinò.IT", url: "https://www.guidacasino-italia.it/" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Glossario del gioco online legale in Italia",
          inLanguage: "it-IT",
          hasDefinedTerm: [
            { "@type": "DefinedTerm", name: "Concessione ADM", description: "Autorizzazione rilasciata dall'Agenzia delle Dogane e dei Monopoli che consente a un operatore di offrire legalmente giochi con vincite in denaro in Italia." },
            { "@type": "DefinedTerm", name: "Bonus senza deposito", description: "Credito di gioco o pacchetto di free spin riconosciuto al completamento della registrazione e della verifica documentale, senza obbligo di versare denaro." },
            { "@type": "DefinedTerm", name: "Requisiti di puntata (wagering)", description: "Numero di volte in cui l'importo del bonus deve essere giocato prima di poter richiedere un prelievo delle vincite generate dal bonus." },
            { "@type": "DefinedTerm", name: "RTP", description: "Return To Player: percentuale teorica di reintegro al giocatore calcolata su un numero molto elevato di giocate." },
            { "@type": "DefinedTerm", name: "RUA", description: "Registro Unico degli Autoesclusi gestito da ADM, che consente l'autoesclusione gratuita da tutti i concessionari italiani." },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const GUIDES = [
  {
    to: "/bonus-senza-deposito" as const,
    title: "Bonus senza deposito ADM",
    text: "Cosa sono, perché vengono offerti dai concessionari e come si leggono i requisiti di puntata.",
  },
  {
    to: "/casino-paypal" as const,
    title: "Casinò PayPal ADM",
    text: "Quali concessionari dichiarano PayPal, depositi minimi, prelievi e tempi di accredito.",
  },
  {
    to: "/guida-rtp" as const,
    title: "Guida all'RTP",
    text: "Cos'è il Return to Player, differenza con la volatilità e RTP medio per provider.",
  },
  {
    to: "/come-registrarsi" as const,
    title: "Registrazione con SPID",
    text: "Documenti richiesti, verifica dell'identità e limiti di deposito prima della prima giocata.",
  },
  {
    to: "/bonus-scommesse-sportive" as const,
    title: "Bonus scommesse sportive ADM 2026",
    text: "Confronto dei migliori bonus per le scommesse sportive legali in Italia e come sfruttarli in modo responsabile.",
  },
  {
    to: "/come-leggere-quote-calcio" as const,
    title: "Come leggere le quote calcio",
    text: "Guida pratica per interpretare le quote, calcolare la probabilità implicita e costruire una schedina vincente.",
  },
  {
    to: "/quote-live-vs-prematch" as const,
    title: "Quote live vs pre-match",
    text: "Differenze, vantaggi e strategie per scegliere tra scommesse in tempo reale e quote pre-partita.",
  },
  {
    to: "/gestione-bankroll" as const,
    title: "Gestione bankroll",
    text: "Metodi per gestire il capitale di gioco, limitare le perdite e mantenere il controllo nel lungo periodo.",
  },
  {
    to: "/operatori-casino-e-scommesse" as const,
    title: "Operatori ADM casinò e scommesse",
    text: "I concessionari che offrono sia casinò online sia scommesse sportive con licenza italiana.",
  },
];

/** Hub di link interni verso le recensioni complete dei concessionari. */
function ReviewsHubSection() {
  const sorted = [...operators].sort(
    (a, b) => (getCasinoMeta(b.slug)?.rating ?? 0) - (getCasinoMeta(a.slug)?.rating ?? 0),
  );
  return (
    <section id="recensioni" className="mx-auto max-w-6xl px-2.5 md:px-6 py-5 md:py-12">
      <h2 className="font-serif text-lg md:text-3xl">Recensioni complete dei casinò ADM</h2>
      <p className="mt-1.5 line-clamp-3 max-w-3xl text-[12px] leading-snug text-muted-foreground md:line-clamp-none md:text-sm md:leading-relaxed">
        Ogni scheda approfondisce concessione, catalogo, metodi di pagamento, tempi di prelievo,
        bonus dichiarati e strumenti di gioco responsabile del singolo concessionario.
      </p>
      <ReadMore
        collapsedHeight="10.5rem"
        className="mt-2.5 md:mt-6"
        labelMore="Mostra tutte le recensioni"
        labelLess="Mostra meno"
      >
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-3">
          {sorted.map((op) => (
            <li key={op.slug}>
              <Link
                to="/operatori/$slug"
                params={{ slug: op.slug }}
                className="flex items-center justify-between gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-[13px] transition-colors hover:border-gold/50 hover:text-gold md:text-sm"
              >
                <span>Recensione {op.name} 2026</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </ReadMore>

    </section>
  );
}

function GuidesSection() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-5 md:py-16">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Approfondimenti</p>
        <h2 className="mt-1 font-serif text-lg md:text-4xl">Ultime guide</h2>
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-2 snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-8 md:grid md:gap-4 md:overflow-visible md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <Link
              key={g.to}
              to={g.to}
              className="flex w-[78%] shrink-0 snap-start flex-col rounded-xl border border-border bg-card p-2.5 transition-colors hover:border-gold/50 md:w-auto md:shrink md:p-5"
            >
              <h3 className="font-serif text-[14px] md:text-lg">{g.title}</h3>
              <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-muted-foreground md:text-sm">
                {g.text}
              </p>
              <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-md border border-gold/40 bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold md:py-1">
                Leggi la guida <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function BrandIntroSection() {
  const pages = [
    { to: "/migliori-casino-online", label: "Migliori casinò ADM" },
    { to: "/bonus-senza-deposito", label: "Bonus senza deposito" },
  ] as const;
  const reviews = [
    { slug: "leovegas", label: "Recensione LeoVegas" },
    { slug: "snai", label: "Recensione Snai" },
    { slug: "sisal", label: "Recensione Sisal" },
    { slug: "888", label: "Recensione 888" },
  ] as const;
  const cls =
    "shrink-0 snap-start rounded-full border border-gold/30 bg-gold/5 px-2.5 py-1 text-[12px] text-gold transition-colors hover:bg-gold/15 whitespace-nowrap md:px-3.5 md:py-2 md:text-sm";
  return (
    <section className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-3 md:py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif text-sm text-foreground md:text-2xl">
            Guide rapide
          </h2>
          <span className="hidden text-xs text-muted-foreground md:inline">
            Scorri per esplorare
          </span>
        </div>
        <nav
          aria-label="Pagine principali"
          className="mt-2 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x md:mt-4"
        >
          {pages.map((l) => (
            <Link key={l.to} to={l.to} className={cls}>
              {l.label}
            </Link>
          ))}
          {reviews.map((r) => (
            <Link key={r.slug} to="/operatori/$slug" params={{ slug: r.slug }} className={cls}>
              {r.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

const TOPICS = [
  { to: "/bonus-benvenuto-casino" as const, label: "Bonus Casinò", text: "Come funzionano bonus di benvenuto e requisiti di puntata." },
  { to: "/casino-online-sicuri" as const, label: "Casinò ADM", text: "Concessione, tutele e verifica dei siti autorizzati in Italia." },
  { to: "/slot-online" as const, label: "Slot Online", text: "RNG certificato, RTP, volatilità e provider dei cataloghi ADM." },
  { to: "/casino-online-principianti" as const, label: "Guide Casinò", text: "Guide complete per iniziare e orientarsi passo per passo." },
  { to: "/gestione-bankroll" as const, label: "Strategie di Gioco", text: "Budget, unità di puntata e gestione della varianza." },
  { to: "/news" as const, label: "News Casinò", text: "Aggiornamenti su bonus, slot, pagamenti e normativa." },
  { to: "/bonus-senza-deposito" as const, label: "Bonus Senza Deposito", text: "Cosa sono davvero e quali condizioni verificare." },
  { to: "/migliori-casino-online" as const, label: "Recensioni Casinò", text: "Schede operatore con concessione, pagamenti e catalogo." },
];

/** Blocchi SEO tematici della home (casinò, bonus, slot, tavoli, guide, news). */
const HOME_BLOCKS = [
  {
    to: "/migliori-casino-online-adm" as const,
    title: "Migliori Casino ADM Oggi",
    text: "I casino online autorizzati ADM confrontati da Guida Casinò Italia su concessione, catalogo e tutele.",
  },
  {
    to: "/bonus-casino-online-senza-deposito" as const,
    title: "Bonus Casino Più Convenienti",
    text: "Come si leggono davvero le condizioni: requisiti di puntata, scadenze e limiti di conversione.",
  },
  {
    to: "/slot-online-soldi-veri" as const,
    title: "Slot Più Giocate del Momento",
    text: "Slot online soldi veri sui concessionari ADM: RNG certificato, RTP, volatilità e provider.",
  },
  {
    to: "/roulette-online-italia" as const,
    title: "Roulette e Blackjack Online",
    text: "Varianti, regole e margine del banco su roulette online Italia e blackjack online ADM.",
  },
  {
    to: "/casino-online-principianti" as const,
    title: "Guide per Principianti",
    text: "Conto di gioco, limiti di spesa, RTP e primi errori da evitare, spiegati passo per passo.",
  },
  {
    to: "/news" as const,
    title: "Ultime News Casino Online",
    text: "Aggiornamenti su normativa ADM, nuovi metodi di pagamento, slot e condizioni dei bonus.",
  },
];

function HomeBlocksSection() {
  return (
    <section id="sezioni-seo" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-5 md:py-16">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">
          Guida Casinò Italia
        </p>
        <h2 className="mt-1 font-serif text-lg md:text-4xl">
          Casino ADM, bonus, slot e tavoli: da dove iniziare
        </h2>
        <p className="mt-2 text-[12px] text-muted-foreground md:text-sm">
          Parti dal contenuto pilastro:{" "}
          <Link
            to="/guida-casino-online-italia"
            className="font-semibold text-gold underline underline-offset-4"
          >
            Guida Casino Online Italia
          </Link>
          .
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2.5 md:mt-8 md:grid-cols-3 md:gap-4">
          {HOME_BLOCKS.map((b) => (
            <Link
              key={b.to}
              to={b.to}
              className="flex flex-col rounded-xl border border-border bg-card p-2.5 transition-colors hover:border-gold/50 md:p-5"
            >
              <h3 className="font-serif text-[14px] text-gold md:text-lg">{b.title}</h3>
              <p className="mt-1 line-clamp-3 text-[12px] leading-snug text-muted-foreground md:text-sm">
                {b.text}
              </p>
              <span className="mt-2 inline-flex w-fit items-center gap-1 text-[11px] font-semibold text-gold md:text-xs">
                Approfondisci <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopicsSection() {
  return (
    <section id="sezioni" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-5 md:py-16">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Esplora il portale</p>
        <h2 className="mt-1 font-serif text-lg md:text-4xl">Sezioni principali</h2>
        <div className="mt-3 grid grid-cols-2 gap-2.5 md:mt-8 md:grid-cols-4 md:gap-4">
          {TOPICS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="flex flex-col rounded-xl border border-border bg-card p-2.5 transition-colors hover:border-gold/50 md:p-5"
            >
              <h3 className="font-serif text-[14px] text-gold md:text-lg">{t.label}</h3>
              <p className="mt-1 line-clamp-3 text-[12px] leading-snug text-muted-foreground md:text-sm">
                {t.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {

  return (
    <PageShell>
      <Hero />
      <CasinoComparator
        sectionId="tutti-i-casino"
        eyebrow="Tutti i casinò"
        title="Lista completa dei casinò ADM"
        subtitle="Elenco integrale dei concessionari con licenza italiana presenti nel nostro database, con filtri e ordinamento."
      />
      <TrustStrip />
      <HomeBlocksSection />
      <TopicsSection />
      <GuidesSection />
      <FAQSection />
      <ResponsibleSection />
      <LegalInfoSection />
      <div className="h-24 md:hidden" aria-hidden />
    </PageShell>

  );
}

const QUICK_ANSWERS: { q: string; a: string }[] = [
  {
    q: "Quali casinò online sono legali in Italia nel 2026?",
    a: "Sono legali esclusivamente gli operatori titolari di concessione ADM (Agenzia delle Dogane e dei Monopoli, ex AAMS). Il numero di concessione è pubblicato in fondo al sito dell'operatore e verificabile nell'elenco ufficiale su adm.gov.it.",
  },
  {
    q: "Cos'è un bonus senza deposito e come si ottiene?",
    a: "È un credito di gioco o un pacchetto di free spin riconosciuto dal concessionario al completamento della registrazione e della verifica dell'identità, senza obbligo di versare denaro. È sempre soggetto ai requisiti di puntata pubblicati dall'operatore.",
  },
  {
    q: "Come si verifica che un sito abbia una concessione ADM valida?",
    a: "Si confronta il numero di concessione indicato nel footer del sito dell'operatore con l'elenco pubblico dei concessionari pubblicato dall'Agenzia delle Dogane e dei Monopoli su adm.gov.it.",
  },
  {
    q: "Serve lo SPID per registrarsi a un casinò ADM?",
    a: "Non è obbligatorio, ma è l'alternativa più rapida: con SPID o CIE l'identità viene verificata immediatamente, mentre con il documento tradizionale la convalida richiede in genere da poche ore a due giorni lavorativi.",
  },
  {
    q: "Cosa significa RTP e come si legge?",
    a: "RTP (Return To Player) è la percentuale teorica di reintegro al giocatore calcolata su un numero molto elevato di giocate. Un RTP del 96% indica che, statisticamente e nel lungo periodo, il gioco restituisce 96€ ogni 100€ puntati: non è una garanzia di vincita sulla singola sessione.",
  },
  {
    q: "Come ci si autoesclude dal gioco in Italia?",
    a: "Tramite il Registro Unico degli Autoesclusi (RUA) gestito da ADM: la procedura è gratuita, immediata e valida su tutti i concessionari italiani. È disponibile anche il numero verde 800 558822.",
  },
];

function QuickAnswersSection() {
  return (
    <section id="risposte-rapide" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-4xl px-2.5 md:px-6 py-6 md:py-16">
        <h2 className="font-serif text-lg font-semibold md:text-3xl">
          Risposte rapide sui casinò ADM in Italia
        </h2>
        <p className="mt-1.5 line-clamp-3 text-[12px] leading-snug text-muted-foreground md:line-clamp-none md:mt-3 md:text-sm">
          Sintesi verificabile delle domande più frequenti su gioco legale, concessioni e bonus senza
          deposito, redatta per essere consultata rapidamente da lettori, motori di ricerca e assistenti
          basati su intelligenza artificiale.
        </p>

        {/* mobile: slider orizzontale */}
        <dl className="mt-3 -mx-2.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2.5 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {QUICK_ANSWERS.map((item) => (
            <div
              key={item.q}
              className="w-[82%] shrink-0 snap-start rounded-xl border border-border bg-background/60 p-3"
            >
              <dt className="text-[12px] font-semibold leading-snug text-foreground">{item.q}</dt>
              <dd className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">{item.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-1 text-[11px] text-muted-foreground md:hidden">Scorri per vedere altre risposte →</p>

        <dl className="mt-8 hidden gap-4 md:grid md:grid-cols-2">
          {QUICK_ANSWERS.map((item) => (
            <div key={item.q} className="rounded-xl border border-border bg-background/60 p-5">
              <dt className="font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-muted-foreground md:mt-6">
          Fonti: Agenzia delle Dogane e dei Monopoli (adm.gov.it), siti ufficiali dei concessionari,
          D.L. 87/2018. Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica.
        </p>

      </div>
    </section>
  );
}



function SeoGuideSection() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-4xl px-2.5 md:px-6 py-8 md:py-20">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Approfondimento</p>
        <h2 className="mt-1.5 font-serif text-xl md:text-4xl">
          Guida completa ai portali di gioco legali in Italia: sicurezza, pagamenti e normativa
        </h2>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground md:mt-4 md:text-sm">
          Un quadro dettagliato su come funzionano i casinò online autorizzati dall'Agenzia delle
          Dogane e dei Monopoli, con approfondimenti tecnici, giuridici e operativi. Espandi le
          sezioni per consultare i singoli capitoli.
        </p>

        <div className="mt-4 -mx-2.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2.5 pb-2 md:mt-8 md:mx-0 md:block md:divide-y md:divide-border md:overflow-visible md:rounded-xl md:border md:border-border md:bg-background md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SEO_GUIDE.map((item) => (
            <details key={item.h3} className="group w-[80%] shrink-0 snap-start rounded-xl border border-border bg-background p-4 md:w-auto md:rounded-none md:border-0 md:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium text-foreground md:text-base">
                <h3 className="font-serif text-base md:text-lg">{item.h3}</h3>
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 space-y-2.5 text-[13px] leading-relaxed text-muted-foreground md:mt-4 md:space-y-3 md:text-sm">
                {item.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>


        <p className="mt-5 text-xs text-muted-foreground md:mt-8">
          Contenuto informativo redatto sulla base di fonti pubbliche (adm.gov.it, normativa
          vigente, siti ufficiali dei concessionari). Nessuna finalità promozionale ai sensi
          dell'art. 9 D.L. 87/2018.
        </p>
      </div>
    </section>
  );
}

const SEO_GUIDE: { h3: string; body: string[] }[] = [
  {
    h3: "Come funzionano i portali di gioco legali con concessione ADM",
    body: [
      "In Italia il gioco a distanza con vincite in denaro è disciplinato dal D.Lgs. 88/2011 e dai successivi decreti attuativi. Un portale di gioco può operare legalmente solo se titolare di una concessione rilasciata dall'Agenzia delle Dogane e dei Monopoli (ADM, ex AAMS), a seguito di una gara pubblica e del versamento di una fideiussione a garanzia degli obblighi verso lo Stato e i giocatori.",
      "Ogni concessionario è collegato in tempo reale al sistema di controllo centrale SOGEI, che registra ogni singola giocata, ne verifica l'integrità e assicura la corretta liquidazione dei tributi (PREU per le slot, imposta unica per gli altri giochi). Questo meccanismo tecnico è il principale elemento che distingue un sito legale da uno privo di autorizzazione: nel primo caso ogni operazione è tracciata e sottoposta a controllo pubblico, nel secondo non esistono garanzie sull'equità del gioco né sulla tutela del saldo del giocatore.",
      "Il numero di concessione ADM deve essere pubblicato in modo visibile su ogni pagina del sito del concessionario ed è verificabile confrontandolo con l'elenco pubblico disponibile su adm.gov.it. In caso di discrepanza è consigliabile astenersi da qualsiasi interazione.",
    ],
  },
  {
    h3: "Criteri di sicurezza tecnica e certificazioni obbligatorie",
    body: [
      "Un portale di gioco legale deve rispettare standard di sicurezza tecnica definiti dal Testo Unico della sicurezza informatica ADM. In particolare: cifratura TLS per tutte le comunicazioni, segregazione dei fondi dei giocatori rispetto al patrimonio dell'operatore, generatori di numeri casuali (RNG) certificati da laboratori indipendenti riconosciuti, e conservazione dei log di gioco per un periodo minimo definito dalla normativa.",
      "I concessionari sono inoltre sottoposti alla normativa antiriciclaggio (D.Lgs. 231/2007 e successive modifiche), che impone procedure di adeguata verifica della clientela (KYC): identificazione tramite documento in corso di validità, verifica dell'indirizzo, controllo sui movimenti sospetti. Queste verifiche possono comportare tempi di attesa nella prima operazione di prelievo, ma rappresentano una garanzia di legalità e tutela contro l'uso improprio della piattaforma.",
      "Sul piano della protezione dei dati personali, i concessionari operano in qualità di titolari del trattamento ai sensi del Regolamento UE 2016/679 (GDPR) e sono tenuti a fornire un'informativa completa, nonché a garantire i diritti di accesso, rettifica e cancellazione previsti dalla normativa europea.",
    ],
  },
  {
    h3: "Metodi di deposito e prelievo nei casinò ADM",
    body: [
      "I metodi di pagamento accettati dai concessionari ADM includono tipicamente carte di credito e debito dei circuiti Visa e Mastercard, bonifico bancario SEPA, wallet elettronici come PayPal, Skrill e Neteller, strumenti prepagati come Postepay e Paysafecard. La scelta dello strumento incide sui tempi di accredito: le carte e i wallet elettronici garantiscono normalmente tempi di deposito istantanei, mentre il bonifico bancario può richiedere da uno a tre giorni lavorativi.",
      "Per i prelievi, i tempi effettivi dipendono da due fattori: la verifica dell'identità (obbligatoria alla prima richiesta di prelievo) e il metodo prescelto. I wallet elettronici sono di norma i più rapidi (24-48 ore), seguiti da carte e bonifici. La normativa italiana vieta il prelievo verso strumenti diversi da quelli utilizzati per il deposito, come misura antiriciclaggio.",
      "È importante ricordare che i concessionari non applicano commissioni sulle vincite: eventuali oneri riguardano esclusivamente lo strumento di pagamento utilizzato e sono comunicati in modo trasparente nella sezione informativa del sito.",
    ],
  },
  {
    h3: "Tutela del giocatore e strumenti di autolimitazione",
    body: [
      "Ogni concessionario ADM è obbligato a mettere a disposizione, in modo visibile e facilmente accessibile dall'area riservata, strumenti di autolimitazione: limiti di deposito settimanali o mensili, limiti di sessione, timeout temporanei e autoesclusione. Questi strumenti sono configurabili dall'utente senza necessità di intervento del supporto e devono essere applicati entro tempi definiti dalla normativa.",
      "L'autoesclusione dal singolo operatore può essere estesa a tutti i concessionari italiani tramite l'iscrizione al Registro Unico degli Autoesclusi (RUA), gestito direttamente da ADM. L'iscrizione al RUA impedisce l'accesso a qualsiasi piattaforma legale in Italia per il periodo prescelto (temporaneo o a tempo indeterminato) ed è gratuita.",
      "Il Servizio Sanitario Nazionale riconosce il Disturbo da Gioco d'Azzardo (DGA) come patologia e mette a disposizione servizi gratuiti di ascolto e presa in carico. Il Telefono Verde nazionale dell'Istituto Superiore di Sanità (800 55 88 22) offre un primo orientamento anonimo e gratuito.",
    ],
  },
  {
    h3: "Riferimenti normativi essenziali",
    body: [
      "D.Lgs. 88/2011 — disciplina del gioco pubblico a distanza. D.L. 87/2018 (Decreto Dignità), art. 9 — divieto di qualsiasi forma di pubblicità dei giochi con vincite in denaro. D.Lgs. 231/2007 — obblighi antiriciclaggio applicabili anche ai concessionari di gioco. Regolamento UE 2016/679 (GDPR) — protezione dei dati personali.",
      "Provvedimenti direttoriali ADM sui requisiti tecnici delle piattaforme, sulle modalità di connessione al sistema centrale e sui protocolli di sicurezza informatica. Delibere AGCOM in materia di pubblicità del gioco. Linee guida dell'Istituto Superiore di Sanità (ISS) sul Disturbo da Gioco d'Azzardo.",
    ],
  },
];

function LegalInfoSection() {
  return (
    <section id="informazioni-legali" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-4 md:py-12">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Conformità e tutela</p>
              <h2 className="mt-1 font-serif text-base md:text-2xl">
                Informazioni legali e gioco responsabile
              </h2>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-90" />
          </summary>

          <div className="mt-3 space-y-2 text-[13px] text-muted-foreground md:mt-4 md:space-y-3 md:text-sm">
            <p>
              GuidaCasinò.IT elenca esclusivamente concessionari ADM (ex AAMS) e riporta i
              riferimenti ufficiali per la tutela del giocatore. L'accesso ai giochi con vincite in
              denaro è riservato ai maggiorenni.
            </p>
            <p>
              Elenco informativo. I dati riportati sono a titolo illustrativo: verifica sempre
              concessione, condizioni e informativa privacy sul sito ufficiale del concessionario.
            </p>
            <p>
              Portale informativo indipendente. Non gestiamo piattaforme di gioco, non raccogliamo
              scommesse e non pubblichiamo bonus o incentivi commerciali ai sensi dell'art. 9 del
              D.L. 87/2018 (Decreto Dignità). I contenuti hanno finalità esclusivamente informative
              e sono redatti sulla base di fonti pubbliche verificabili (elenco ADM, siti ufficiali
              dei concessionari, normativa vigente). Non riceviamo compensi condizionati al
              comportamento di gioco degli utenti.
            </p>
          </div>

          <ComplianceBadges />
          <OfficialLogosBanner />
        </details>
      </div>
    </section>
  );
}

function CurrentMonthBadge() {
  const date = new Date();
  const monthYear = date.toLocaleDateString("it-IT", { month: "long", year: "numeric" });
  const label = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);

  return (
    <div className="mt-1.5 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-medium text-gold md:mt-4 md:gap-2 md:px-3 md:py-1.5 md:text-xs">
      <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5" />
      <span>Lista verificata a {label}</span>
      <span className="mx-1 hidden h-3 w-px bg-gold/30 sm:inline-block" />
      <span className="hidden items-center gap-1 text-gold/80 sm:inline-flex">
        <RefreshCw className="h-3 w-3" />
        Offerte controllate ogni mese
      </span>
    </div>
  );
}

const scrollToSection = (id: string) => (e: React.MouseEvent) => {
  const el = typeof document !== "undefined" ? document.getElementById(id) : null;
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
};

function Hero() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.14 0.02 260 / 0.85), oklch(0.14 0.02 260 / 0.95)), image-set(url(${heroBgAvif}) type("image/avif"), url(${heroBgWebp}) type("image/webp"))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-3.5 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-gold md:gap-2 md:px-3 md:py-1 md:text-xs">
            <ShieldCheck className="h-3 w-3" />
            Portale informativo indipendente
          </div>
          <h1 className="mt-1.5 font-serif text-[1.25rem] leading-[1.05] md:mt-6 md:text-6xl">
            Migliori Casino Online ADM in Italia{" "}
            <span className="block text-gold md:inline">
              recensioni, bonus e guide di Guida Casinò Italia
            </span>
          </h1>
          <CurrentMonthBadge />
          <div className="mt-1.5 max-w-2xl md:mt-6">
            <p
              className={`text-[13px] leading-[1.35] text-muted-foreground md:text-lg md:leading-normal ${expanded ? "" : "line-clamp-3 md:line-clamp-none"}`}
            >
              Guida Casinò Italia confronta i casino online ADM più affidabili in Italia: recensioni
              complete, bonus di benvenuto, slot machine, roulette e blackjack. Le recensioni di
              Guida Casinò Italia sono aggiornate quotidianamente su dati pubblici e riguardano
              esclusivamente operatori titolari di concessione dell'Agenzia delle Dogane e dei
              Monopoli: non offriamo servizi di gioco, non promuoviamo bonus e non incoraggiamo la
              partecipazione a giochi con vincite in denaro.
            </p>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-gold hover:underline md:hidden"
              aria-expanded={expanded}
            >
              {expanded ? "Riduci" : "Continua a leggere"} <ArrowRight className={`h-3 w-3 transition-transform ${expanded ? "rotate-90" : ""}`} />
            </button>
          </div>

          <div className="mt-2 flex flex-nowrap items-stretch gap-2 md:mt-8 md:gap-3">
            <Link
              to="/migliori-casino-scelti"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold px-3 py-1.5 text-[12px] font-bold leading-tight text-primary-foreground shadow-md shadow-gold/25 transition-all hover:brightness-110 sm:flex-none md:px-4 md:py-2.5 md:text-sm"
            >
              I migliori casinò <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </Link>
            <Link
              to="/lista-casino-adm"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold/10 px-3 py-1.5 text-[12px] font-semibold leading-tight text-gold transition-colors hover:bg-gold/20 sm:flex-none md:px-4 md:py-2.5 md:text-sm"
            >
              Lista completa ADM <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </Link>
          </div>

          <p className="mt-1.5 text-[10px] text-muted-foreground md:mt-6 md:text-xs">
            Contenuto riservato a maggiorenni. Il gioco può causare dipendenza patologica.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "Solo operatori con concessione ADM" },
    { icon: Scale, label: "Confronto imparziale basato su dati pubblici" },
    { icon: ScrollText, label: "Fonti verificabili e link ufficiali" },
    { icon: Users, label: "Strumenti di autolimitazione evidenziati" },
  ];
  return (
    <section className="border-b border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-3 py-4 md:grid-cols-4 md:gap-4 md:py-8">
        {items.map((it) => (
          <div key={it.label} className="flex items-start gap-1.5 md:gap-3">
            <it.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold md:h-5 md:w-5" />
            <span className="text-[12px] leading-snug text-muted-foreground md:text-sm">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function OperatorsSection() {
  return (
    <section id="operatori" className="mx-auto max-w-6xl px-2.5 md:px-6 py-5 md:py-14">
      <div className="mb-3 md:mb-6">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Confronto</p>
        <div className="mt-1.5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-3">
          <div>
            <h2 className="font-serif text-lg md:text-3xl">Lista completa casino ADM</h2>
            <p className="mt-1 hidden max-w-2xl text-sm text-muted-foreground md:block">
              Elenco informativo. I dati riportati sono a titolo illustrativo: verifica sempre
              concessione, condizioni e informativa privacy sul sito ufficiale del concessionario.
            </p>
          </div>
          <div className="flex flex-nowrap items-stretch gap-2 md:justify-end">
            <a
              href="#comparatore"
              onClick={scrollToSection("comparatore")}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold px-3 py-1.5 text-[12px] font-bold leading-tight text-primary-foreground shadow-md shadow-gold/25 transition-all hover:brightness-110 sm:flex-none md:px-4 md:py-2.5 md:text-sm"
            >
              Migliori casinò scelti <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </a>
            <a
              href="#operatori"
              onClick={scrollToSection("operatori")}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold/10 px-3 py-1.5 text-[12px] font-semibold leading-tight text-gold transition-colors hover:bg-gold/20 sm:flex-none md:px-4 md:py-2.5 md:text-sm"
            >
              Lista completa ADM <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-2.5 md:gap-3">
        {sortedOperators.map((op, idx) => (
          <article
            key={op.slug}
            className="relative grid gap-1.5 rounded-xl border border-border bg-card p-2 md:gap-4 md:p-4 md:grid-cols-[auto_1fr_auto] md:items-center"

          >
            {idx < 3 && (
              <span className="absolute -top-2 right-3 inline-flex items-center rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-gold/30 md:-top-3 md:right-4">
                Top
              </span>
            )}
            <div className="flex flex-col items-start gap-1.5 md:w-80 md:flex-row md:items-center md:gap-2">
              <OperatorLogo logo={op.logo} name={op.name} index={idx} officialUrl={op.officialUrl} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-[15px] md:text-lg">{op.name}</h3>
                  {getCasinoMeta(op.slug) ? (
                    <RatingBadge rating={getCasinoMeta(op.slug)!.rating} size="sm" />
                  ) : null}
                </div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {op.concessionN}
                </p>
                <div className="mt-1">
                  <CasinoBadges slug={op.slug} />
                </div>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground md:text-xs">
                  {getCasinoMeta(op.slug)?.short}
                </p>
                <div className="mt-1">
                  <OperatorTrustDots name={op.name} />
                </div>
              </div>
            </div>



            <div className="grid grid-cols-2 gap-2 md:gap-3 md:grid-cols-3">
              <Stat label="Attivo dal" value={op.founded.toString()} />
              <Stat label="RTP medio" value={op.rtpAverage} />
              <Stat label="Titoli" value={`${op.games}+`} />


              <div className="col-span-2 md:col-span-3">
                {op.noDepositBonus ? (
                  <div className="mb-1 rounded-lg border border-gold/40 bg-gold/10 p-1.5 md:p-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        Senza deposito
                      </span>
                      <span className="font-serif text-sm text-gold md:text-lg">
                        {op.noDepositBonus.amount}
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] leading-relaxed text-foreground/85 md:text-xs">
                      <strong className="text-foreground">Cos'è:</strong> importo di gioco
                      riconosciuto dall'operatore senza richiedere alcun versamento iniziale.{" "}
                      <strong className="text-foreground">Come funziona:</strong>{" "}
                      {op.noDepositBonus.description}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      Condizioni complete su sito ufficiale — Solo +18
                    </p>
                  </div>
                ) : null}
                <ul className="mt-0.5 space-y-0.5">
                  {op.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-1.5 text-[12px] leading-snug text-muted-foreground md:text-sm">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="flex flex-col items-stretch gap-1.5 md:w-52 md:gap-3">
              <a
                href={op.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-bold md:py-3 md:text-sm text-primary-foreground shadow-lg shadow-gold/30 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-gold/40 active:scale-[0.98]"
              >
                Visita il sito ufficiale
              </a>
              <Link
                to="/operatori/$slug"
                params={{ slug: op.slug }}
                className="inline-flex items-center justify-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-medium md:py-2 md:text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Leggi l'analisi completa
              </Link>
              <p className="text-center text-[10px] uppercase tracking-wider text-muted-foreground">
                Solo +18 — Gioca responsabile
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground md:mt-6">
        Fonte: elenco pubblico dei concessionari sul sito adm.gov.it. Le informazioni sono fornite
        senza finalità promozionali ai sensi dell'art. 9 D.L. 87/2018.
      </p>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-serif text-sm text-foreground md:text-lg">{value}</p>
    </div>
  );
}

function OperatorLogo({
  logo,
  name,
  index,
  officialUrl,
}: {
  logo?: string;
  name: string;
  index: number;
  officialUrl: string;
}) {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setError(true);
    }
  }, []);

  const fallback = (
    <div className="flex h-12 w-28 items-center justify-center rounded-xl border-2 border-gold/40 bg-gold/10 shadow-sm md:h-20 md:w-44">
      <span className="font-serif text-lg text-gold md:text-2xl">{index + 1}</span>
    </div>
  );

  const logoBox = (!logo || error) ? (
    fallback
  ) : (
    <div className="flex h-12 w-28 items-center justify-center overflow-hidden rounded-xl border-2 border-gold/40 bg-white shadow-sm md:h-24 md:w-56">
      <img
        ref={imgRef}
        src={logo}
        alt={`Logo ${name}`}
        width={224}
        height={96}
        className="h-full w-full object-contain p-2"
        loading="lazy"
        decoding="async"
        onError={() => setError(true)}
      />
    </div>
  );

  return (
    <a
      href={officialUrl}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      aria-label={`Visita il sito ufficiale di ${name}`}
      className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-background rounded-xl"
    >
      {logoBox}
    </a>
  );
}

function CriteriaSection() {
  const criteria = [
    {
      n: "01",
      title: "Concessione ADM verificata",
      body: "Elenchiamo esclusivamente operatori con concessione dell'Agenzia delle Dogane e dei Monopoli in corso di validità, verificata sull'elenco pubblico ufficiale.",
    },
    {
      n: "02",
      title: "Trasparenza sui dati di gioco",
      body: "Riportiamo l'RTP dichiarato dal concessionario e le probabilità di vincita quando pubblicate. Nessun dato promozionale, solo informazione verificabile.",
    },
    {
      n: "03",
      title: "Strumenti di tutela",
      body: "Evidenziamo la presenza di limiti di deposito, autoesclusione, adesione al Registro Unico degli Autoesclusi (RUA) e supporto in lingua italiana.",
    },
    {
      n: "04",
      title: "Assenza di incentivi",
      body: "Non pubblichiamo codici promozionali, bonus o messaggi che inducano al gioco. Il portale ha finalità puramente informative.",
    },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-2.5 md:px-6 py-6 md:py-24">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Metodologia</p>
        <h2 className="mt-1.5 max-w-2xl font-serif text-lg md:text-4xl">
          Come selezioniamo le informazioni pubblicate
        </h2>
        <div className="mt-3 -mx-2.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2.5 pb-2 md:mt-10 md:mx-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {criteria.map((c) => (
            <div key={c.n} className="w-[78%] shrink-0 snap-start rounded-xl border border-border bg-background p-3 md:w-auto md:p-6">
              <div className="font-serif text-lg text-gold md:text-2xl">{c.n}</div>
              <h3 className="mt-1 font-serif text-base md:text-xl">{c.title}</h3>
              <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground md:text-sm md:leading-normal">{c.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function EvaluationGuideSection() {
  const criteria = [
    {
      title: "Concessione ADM verificabile",
      body: "Il primo criterio oggettivo per valutare un operatore di gioco online in Italia è la presenza di una concessione dell'Agenzia delle Dogane e dei Monopoli in corso di validità. Il numero di concessione deve essere pubblicato in ogni pagina del sito e coincidere con quello riportato nell'elenco pubblico su adm.gov.it. Un operatore privo di concessione ADM non può operare legalmente sul territorio italiano, indipendentemente dalle licenze estere eventualmente possedute.",
    },
    {
      title: "Velocità e trasparenza dei pagamenti",
      body: "I concessionari ADM sono tenuti a pubblicare i tempi medi di elaborazione dei prelievi e i metodi di pagamento supportati. Un indicatore oggettivo di affidabilità operativa è la coerenza tra i tempi dichiarati e quelli effettivi, unita alla chiarezza sulle verifiche antiriciclaggio (KYC) richieste dalla normativa. La presenza di più strumenti — carte, bonifico, wallet elettronici — riduce il rischio di frizioni nelle operazioni di deposito e prelievo.",
    },
    {
      title: "Qualità del supporto clienti in italiano",
      body: "Un servizio clienti in lingua italiana, raggiungibile tramite più canali (email, telefono, chat) e con orari estesi, è un requisito minimo di trasparenza. La normativa italiana impone che tutte le comunicazioni contrattuali siano fornite in italiano; la reale disponibilità di operatori formati sulla normativa nazionale rappresenta un elemento discriminante rispetto a piattaforme che si limitano a traduzioni automatiche.",
    },
    {
      title: "RTP dichiarato e certificazioni tecniche",
      body: "L'RTP (Return to Player) medio dichiarato, unito alle certificazioni degli enti indipendenti sui generatori di numeri casuali, permette di valutare l'equità tecnica dei giochi offerti. I concessionari ADM sono soggetti a controlli periodici del sistema di gioco (SOGEI) e devono rendere disponibili le informazioni sulle probabilità di vincita nelle sezioni informative dei singoli titoli.",
    },
    {
      title: "Strumenti di tutela del giocatore",
      body: "La presenza attiva e ben segnalata di limiti di deposito auto-impostabili, timeout, autoesclusione temporanea e integrazione con il Registro Unico degli Autoesclusi (RUA) è un requisito di legge, ma la sua reale accessibilità dall'area utente è un criterio qualitativo. Un operatore serio rende questi strumenti visibili e configurabili in pochi passaggi, senza barriere operative.",
    },
    {
      title: "Chiarezza dei termini contrattuali",
      body: "I termini e condizioni devono essere consultabili integralmente, aggiornati con data di ultima revisione e redatti in linguaggio comprensibile. Clausole ambigue su chiusura account, verifica identità o gestione dei saldi rappresentano indicatori di attenzione. La normativa italiana tutela il consumatore imponendo trasparenza informativa su ogni aspetto del rapporto contrattuale.",
    },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-4xl px-2.5 md:px-6 py-5 md:py-16">
        <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Guida alla valutazione</p>
        <h2 className="mt-1.5 font-serif text-lg md:text-4xl">
          Come valutare oggettivamente un operatore di gioco online in Italia
        </h2>
        <ReadMore collapsedHeight="5.5rem" className="mt-2">
          <p className="text-[13px] leading-snug text-muted-foreground md:text-base md:leading-relaxed">
            Scegliere un concessionario di gioco a distanza in Italia non è una questione di gusto
            personale ma di verifica di requisiti oggettivi imposti dalla normativa e dai controlli
            dell'Agenzia delle Dogane e dei Monopoli. Di seguito i sei criteri principali che un
            utente maggiorenne dovrebbe considerare per un confronto informato tra i vari operatori
            concessionari, prima di qualsiasi valutazione di natura personale o economica.
          </p>

          <div className="mt-3 space-y-3 md:mt-6 md:space-y-6">
            {criteria.map((c) => (
              <div key={c.title}>
                <h3 className="font-serif text-[15px] text-foreground md:text-xl">{c.title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-muted-foreground md:text-sm md:leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[13px] leading-snug text-muted-foreground md:mt-8 md:text-sm md:leading-relaxed">
            Nessuno di questi criteri, preso singolarmente, è sufficiente a stabilire una
            preferenza: è la loro valutazione congiunta — insieme al rispetto delle norme sul
            gioco responsabile e alla trasparenza delle informazioni pubblicate — che consente di
            costruire un quadro informativo completo. GuidaCasinò.IT non esprime raccomandazioni
            commerciali e invita ogni utente a consultare direttamente le fonti ufficiali ADM e i
            siti dei concessionari prima di formare qualsiasi opinione personale.
          </p>
        </ReadMore>
      </div>
    </section>
  );
}


function ResponsibleSection() {
  return (
    <section className="mx-auto max-w-6xl px-2.5 md:px-6 py-6 md:py-24">
      <div className="grid gap-4 rounded-2xl border border-warning/30 bg-warning/5 p-4 md:grid-cols-[1.2fr_1fr] md:gap-10 md:p-12">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-warning md:text-xs">Gioco responsabile</p>
          <h2 className="mt-1.5 font-serif text-xl md:text-4xl">
            Se il gioco smette di essere un divertimento, chiedi aiuto.
          </h2>
          <p className="mt-2 text-[13px] leading-snug text-muted-foreground md:mt-4 md:text-sm md:leading-normal">
            Il Disturbo da Gioco d'Azzardo (DGA) è una patologia riconosciuta dal Servizio Sanitario
            Nazionale. Esistono servizi gratuiti e anonimi in tutta Italia.
          </p>
          <Link
            to="/gioco-responsabile"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline md:mt-6"
          >
            Leggi la guida completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-2 text-[13px] md:space-y-3 md:text-sm">
          <ResourceLink
            title="Telefono Verde 800 558822"
            desc="ISS — anonimo e gratuito, attivo lun-ven 10:00-16:00"
            href="tel:800558822"
          />
          <ResourceLink
            title="giocaresponsabile.it"
            desc="Portale nazionale di supporto e informazione"
            href="https://www.giocaresponsabile.it"
          />
          <ResourceLink
            title="Registro Unico Autoesclusi (RUA)"
            desc="Autoesclusione temporanea o permanente da tutti gli operatori ADM"
            href="https://www.adm.gov.it"
          />
        </div>
      </div>
    </section>
  );
}

function ResourceLink({ title, desc, href }: { title: string; desc: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
      className="block rounded-lg border border-border bg-background p-3 transition-colors hover:border-gold/40 md:p-4"
    >
      <p className="font-medium text-foreground">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
    </a>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-2.5 md:px-6 pb-10 md:pb-24">
      <p className="text-[11px] uppercase tracking-widest text-gold md:text-xs">Domande frequenti</p>
      <h2 className="mt-1.5 font-serif text-lg md:text-4xl">Chiarimenti</h2>

      {/* mobile: slider orizzontale */}
      <div className="mt-3 -mx-2.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2.5 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FAQS.map((f) => (
          <div key={f.q} className="w-[82%] shrink-0 snap-start rounded-xl border border-border bg-card p-2.5">
            <h3 className="text-[12px] font-semibold leading-snug">{f.q}</h3>
            <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </div>
      <p className="mt-1 text-[11px] text-muted-foreground md:hidden">Scorri per vedere altre risposte →</p>

      <div className="mt-8 hidden divide-y divide-border rounded-xl border border-border bg-card md:block">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium">
              {f.q}
              <span className="text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>

  );
}
