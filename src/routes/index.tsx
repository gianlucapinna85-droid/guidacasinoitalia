import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ScrollText, Scale, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { PageShell } from "@/components/site-layout";
import { operators } from "@/lib/operators";

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
      { title: "GuidaCasinò.IT — Comparatore informativo casinò ADM" },
      { name: "description", content: "Guida imparziale ai casinò online con concessione ADM. Informazioni su RTP, metodi di pagamento e strumenti di gioco responsabile. Solo per +18." },
      { property: "og:title", content: "GuidaCasinò.IT — Comparatore informativo casinò ADM" },
      { property: "og:description", content: "Guida imparziale ai casinò online con concessione ADM. Informazioni su RTP, metodi di pagamento e strumenti di gioco responsabile. Solo per +18." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "GuidaCasinò.IT — Comparatore informativo casinò ADM" },
      { name: "twitter:description", content: "Guida imparziale ai casinò online con concessione ADM. Informazioni su RTP, metodi di pagamento e strumenti di gioco responsabile. Solo per +18." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
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
          numberOfItems: operators.length,
          itemListElement: operators.map((op, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: op.name,
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <TrustStrip />
      <OperatorsSection />
      <CriteriaSection />
      <ResponsibleSection />
      <FAQSection />
    </PageShell>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.14 0.02 260 / 0.85), oklch(0.14 0.02 260 / 0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs uppercase tracking-widest text-gold">
            <ShieldCheck className="h-3 w-3" />
            Portale informativo indipendente
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
            Informazione trasparente sui{" "}
            <span className="text-gold">casinò con concessione ADM</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            GuidaCasinò.IT è un portale informativo che raccoglie e confronta dati sugli operatori
            titolari di concessione dell'Agenzia delle Dogane e dei Monopoli. Non offriamo servizi
            di gioco, non promuoviamo bonus e non incoraggiamo la partecipazione a giochi con
            vincite in denaro.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="operatori"
              className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
            >
              Consulta il confronto <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/gioco-responsabile"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Gioco responsabile
            </Link>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
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
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-start gap-3">
            <it.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span className="text-sm text-muted-foreground">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function OperatorsSection() {
  return (
    <section id="operatori" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Confronto</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Operatori concessionari ADM</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Elenco informativo. I dati riportati sono a titolo illustrativo: verifica sempre
            concessione, condizioni e informativa privacy sul sito ufficiale del concessionario e
            sull'elenco pubblico ADM.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {operators.map((op, idx) => (
          <article
            key={op.slug}
            className="grid gap-6 rounded-xl border border-border bg-card p-6 md:grid-cols-[auto_1fr_auto] md:items-center"
          >
            <div className="flex items-center gap-4 md:w-56">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 font-serif text-xl text-gold">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-serif text-lg">{op.name}</h3>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {op.concessionN}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Stat label="Attivo dal" value={op.founded.toString()} />
              <Stat label="RTP medio dichiarato" value={op.rtpAverage} />
              <Stat label="Titoli disponibili" value={`${op.games}+`} />
              <div className="md:col-span-3">
                <ul className="mt-1 space-y-1.5">
                  {op.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-2 md:w-44">
              <Link
                to="/operatori/$slug"
                params={{ slug: op.slug }}
                className="inline-flex items-center justify-center gap-1 rounded-md border border-gold/50 bg-gold/15 px-4 py-2 text-xs font-medium text-gold transition-colors hover:bg-gold/25"
              >
                Leggi la scheda
              </Link>
              <a
                href={op.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-1 rounded-md border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Verifica ADM
              </a>
              <p className="text-center text-[10px] uppercase tracking-wider text-muted-foreground">
                Solo +18 — Gioca responsabile
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
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
      <p className="mt-1 font-serif text-lg text-foreground">{value}</p>
    </div>
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
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs uppercase tracking-widest text-gold">Metodologia</p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl md:text-4xl">
          Come selezioniamo le informazioni pubblicate
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {criteria.map((c) => (
            <div key={c.n} className="rounded-xl border border-border bg-background p-6">
              <div className="font-serif text-2xl text-gold">{c.n}</div>
              <h3 className="mt-2 font-serif text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResponsibleSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-10 rounded-2xl border border-warning/30 bg-warning/5 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-warning">Gioco responsabile</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Se il gioco smette di essere un divertimento, chiedi aiuto.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Il Disturbo da Gioco d'Azzardo (DGA) è una patologia riconosciuta dal Servizio Sanitario
            Nazionale. Esistono servizi gratuiti e anonimi in tutta Italia.
          </p>
          <Link
            to="/gioco-responsabile"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
          >
            Leggi la guida completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-3 text-sm">
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
      className="block rounded-lg border border-border bg-background p-4 transition-colors hover:border-gold/40"
    >
      <p className="font-medium text-foreground">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
    </a>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 pb-24">
      <p className="text-xs uppercase tracking-widest text-gold">Domande frequenti</p>
      <h2 className="mt-2 font-serif text-3xl md:text-4xl">Chiarimenti</h2>
      <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
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
