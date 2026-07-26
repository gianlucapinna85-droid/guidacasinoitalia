import { useState, useRef, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ScrollText, Scale, Users, ArrowRight, CheckCircle2, Calendar, RefreshCw } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { PageShell, ComplianceBadges, OfficialLogosBanner } from "@/components/site-layout";
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
      { title: "Casinò ADM Sicuri 2026 — Guida ai Migliori Siti Legali in Italia" },
      { name: "description", content: "Confronto informativo dei casinò online con concessione ADM (ex AAMS): licenza, RTP, metodi di pagamento e strumenti di tutela. Scopri i siti di gioco legali e sicuri in Italia. Solo +18." },
      { property: "og:title", content: "Casinò ADM Sicuri 2026 — Guida ai Migliori Siti Legali in Italia" },
      { property: "og:description", content: "Confronto informativo dei casinò online con concessione ADM (ex AAMS): licenza, RTP, metodi di pagamento e strumenti di tutela. Scopri i siti di gioco legali e sicuri in Italia. Solo +18." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Casinò ADM Sicuri 2026 — Guida ai Migliori Siti Legali in Italia" },
      { name: "twitter:description", content: "Confronto informativo dei casinò online con concessione ADM (ex AAMS): licenza, RTP, metodi di pagamento e strumenti di tutela. Scopri i siti di gioco legali e sicuri in Italia. Solo +18." },
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
          operators.slice(0, 10).map((op, i) => ({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: op.name,
              url: op.officialUrl,
              identifier: op.concessionN,
            },
            author: { "@type": "Organization", name: "GuidaCasinò.IT" },
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
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <TrustStrip />
      <ComplianceBlock placement="top" />
      <OperatorsSection />
      <EvaluationGuideSection />
      <CriteriaSection />
      <ResponsibleSection />
      <FAQSection />
      <SeoGuideSection />
      <ComplianceBlock placement="bottom" />
    </PageShell>
  );
}


function SeoGuideSection() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <p className="text-xs uppercase tracking-widest text-gold">Approfondimento</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">
          Guida completa ai portali di gioco legali in Italia: sicurezza, pagamenti e normativa
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Un quadro dettagliato su come funzionano i casinò online autorizzati dall'Agenzia delle
          Dogane e dei Monopoli, con approfondimenti tecnici, giuridici e operativi. Espandi le
          sezioni per consultare i singoli capitoli.
        </p>

        <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-background">
          {SEO_GUIDE.map((item) => (
            <details key={item.h3} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-foreground">
                <h3 className="font-serif text-lg">{item.h3}</h3>
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {item.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
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

function ComplianceBlock({ placement }: { placement: "top" | "bottom" }) {
  return (

    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-xs uppercase tracking-widest text-gold">
          {placement === "top" ? "Conformità e tutela" : "Trasparenza editoriale"}
        </p>
        <h2 className="mt-2 max-w-2xl font-serif text-2xl md:text-3xl">
          {placement === "top"
            ? "Gioco legale, responsabile e vietato ai minori"
            : "Nota di trasparenza editoriale"}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          {placement === "top"
            ? "GuidaCasinò.IT elenca esclusivamente concessionari ADM (ex AAMS) e riporta i riferimenti ufficiali per la tutela del giocatore. L'accesso ai giochi con vincite in denaro è riservato ai maggiorenni."
            : "Portale informativo indipendente. Non gestiamo piattaforme di gioco, non raccogliamo scommesse e non pubblichiamo bonus o incentivi commerciali ai sensi dell'art. 9 del D.L. 87/2018 (Decreto Dignità). I contenuti hanno finalità esclusivamente informative e sono redatti sulla base di fonti pubbliche verificabili (elenco ADM, siti ufficiali dei concessionari, normativa vigente). Non riceviamo compensi condizionati al comportamento di gioco degli utenti."}
        </p>

        <ComplianceBadges />
        <OfficialLogosBanner />
      </div>
    </section>
  );
}

function CurrentMonthBadge() {
  const date = new Date();
  const monthYear = date.toLocaleDateString("it-IT", { month: "long", year: "numeric" });
  const label = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);

  return (
    <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold">
      <Calendar className="h-3.5 w-3.5" />
      <span>Lista verificata a {label}</span>
      <span className="mx-1 hidden h-3 w-px bg-gold/30 sm:inline-block" />
      <span className="hidden items-center gap-1 text-gold/80 sm:inline-flex">
        <RefreshCw className="h-3 w-3" />
        Offerte controllate ogni mese
      </span>
    </div>
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
          <CurrentMonthBadge />
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
              Esamina il confronto <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/bonus-senza-deposito"
              className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold/90"
            >
              Bonus senza deposito <ArrowRight className="h-4 w-4" />
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
            className="relative grid gap-6 rounded-xl border border-border bg-card p-6 md:grid-cols-[auto_1fr_auto] md:items-center"
          >
            {idx < 3 && (
              <span className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-gold/30 md:right-6">
                Top
              </span>
            )}
            <div className="flex flex-col items-start gap-3 md:w-80 md:flex-row md:items-center">
              <OperatorLogo logo={op.logo} name={op.name} index={idx} officialUrl={op.officialUrl} />
              <div className="min-w-0">
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
                {op.noDepositBonus ? (
                  <div className="mb-3 rounded-lg border border-gold/40 bg-gold/10 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        Senza deposito
                      </span>
                      <span className="font-serif text-xl text-gold">
                        {op.noDepositBonus.amount}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                      <strong className="text-foreground">Cos'è:</strong> importo di gioco
                      riconosciuto dall'operatore senza richiedere alcun versamento iniziale.{" "}
                      <strong className="text-foreground">Come funziona:</strong>{" "}
                      {op.noDepositBonus.description}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                      Condizioni complete su sito ufficiale — Solo +18
                    </p>
                  </div>
                ) : null}
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

            <div className="flex flex-col items-stretch gap-3 md:w-52">
              <a
                href={op.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-gold/30 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-gold/40 active:scale-[0.98]"
              >
                Visita il sito ufficiale
              </a>
              <Link
                to="/operatori/$slug"
                params={{ slug: op.slug }}
                className="inline-flex items-center justify-center gap-1 rounded-md border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
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
    <div className="flex h-20 w-44 items-center justify-center rounded-xl border-2 border-gold/40 bg-gold/10 shadow-sm">
      <span className="font-serif text-2xl text-gold">{index + 1}</span>
    </div>
  );

  const logoBox = (!logo || error) ? (
    fallback
  ) : (
    <div className="flex h-20 w-44 items-center justify-center overflow-hidden rounded-xl border-2 border-gold/40 bg-white p-3 shadow-sm md:h-24 md:w-56">
      <img
        ref={imgRef}
        src={logo}
        alt={`Logo ${name}`}
        className="h-full w-full object-contain"
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
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="text-xs uppercase tracking-widest text-gold">Guida alla valutazione</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">
          Come valutare oggettivamente un operatore di gioco online in Italia
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Scegliere un concessionario di gioco a distanza in Italia non è una questione di gusto
          personale ma di verifica di requisiti oggettivi imposti dalla normativa e dai controlli
          dell'Agenzia delle Dogane e dei Monopoli. Di seguito i sei criteri principali che un
          utente maggiorenne dovrebbe considerare per un confronto informato tra i vari operatori
          concessionari, prima di qualsiasi valutazione di natura personale o economica.
        </p>

        <div className="mt-10 space-y-8">
          {criteria.map((c) => (
            <div key={c.title}>
              <h3 className="font-serif text-xl text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Nessuno di questi criteri, preso singolarmente, è sufficiente a stabilire una
          preferenza: è la loro valutazione congiunta — insieme al rispetto delle norme sul
          gioco responsabile e alla trasparenza delle informazioni pubblicate — che consente di
          costruire un quadro informativo completo. GuidaCasinò.IT non esprime raccomandazioni
          commerciali e invita ogni utente a consultare direttamente le fonti ufficiali ADM e i
          siti dei concessionari prima di formare qualsiasi opinione personale.
        </p>
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
