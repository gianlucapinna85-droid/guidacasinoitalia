import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GuideArticle,
  guideHeadWithWebPage,
  SeoTable,
  ProsCons,
  InternalCtaLinks,
  type GuideConfig,
} from "@/components/guide-article";

const PARTNER_URL = "https://www.cryptogambling-vip.com";

const CFG: GuideConfig = {
  path: "/casino-non-aams",
  title: "Casinò non AAMS: cosa sono e come si valutano | 2026",
  h1: "Casinò non AAMS: cosa significa davvero, come sono regolati e come si valutano",
  description:
    "Guida informativa ai casinò non AAMS: differenza fra concessione ADM e licenze internazionali (MGA, Curaçao, UKGC), criteri di valutazione, pagamenti crypto e fonti indipendenti. Solo +18.",
  keywords:
    "casino non AAMS, casinò non AAMS, casino senza licenza AAMS, licenze internazionali gioco online, MGA Curacao UKGC, crypto casino, non AAMS casinos, international online casinos, casino non ADM 2026",
  eyebrow: "Guida informativa 2026",
  breadcrumb: "Casinò non AAMS",
  sections: [
    {
      id: "definizione",
      label: "Cosa significa",
      h2: "Che cosa si intende per casinò non AAMS",
      paragraphs: [
        "L'espressione \"casinò non AAMS\" indica gli operatori di gioco online che non possiedono la concessione italiana rilasciata da ADM (l'ente che ha sostituito la vecchia AAMS), ma operano con una licenza rilasciata da un'altra autorità di regolamentazione. Non è quindi un giudizio di qualità: è una semplice indicazione di giurisdizione. Un operatore può essere pienamente regolamentato e sottoposto a controlli severi nel proprio Paese, pur non rientrando nel perimetro concessorio italiano.",
        "La confusione nasce dal fatto che in Italia il termine viene usato sia per operatori con licenze europee solide, sia per siti privi di qualsiasi autorizzazione riconoscibile. Sono due situazioni molto diverse: la prima riguarda un mercato internazionale regolato, la seconda riguarda l'assenza di regole. Distinguere fra le due è il primo passo di qualunque valutazione seria.",
      ],
      bullets: [
        "\"Non AAMS\" = senza concessione italiana, non necessariamente senza licenza",
        "Le licenze internazionali più diffuse sono MGA (Malta), UKGC (Regno Unito), Curaçao Gaming Authority, Gibilterra e Isle of Man",
        "Ogni licenza ha requisiti, controlli e strumenti di reclamo propri",
        "Per il giocatore residente in Italia restano valide le regole nazionali: le tutele ADM si applicano solo ai concessionari italiani",
      ],
    },
    {
      id: "licenze",
      label: "Le licenze internazionali",
      h2: "Le principali licenze internazionali e cosa garantiscono",
      paragraphs: [
        "Ogni autorità applica un proprio impianto di regole su capitale sociale, separazione dei fondi dei giocatori, certificazione dei generatori di numeri casuali, antiriciclaggio e gestione dei reclami. La Malta Gaming Authority e la UK Gambling Commission sono considerate fra le più strutturate per trasparenza dei procedimenti e pubblicazione dei provvedimenti; la riforma di Curaçao, entrata a regime negli ultimi anni, ha introdotto licenze dirette con obblighi di compliance più stringenti rispetto al vecchio sistema dei master licence.",
        "Per un lettore italiano il punto pratico è semplice: la licenza dice a chi rivolgersi se qualcosa va storto. Un operatore con licenza MGA risponde a Malta, uno con licenza UKGC risponde a Londra. La concessione ADM, invece, è l'unica che attiva gli strumenti nazionali come il Registro Unico degli Autoesclusi e i canali di reclamo in lingua italiana.",
      ],
    },
    {
      id: "valutare",
      label: "Come si valuta un operatore",
      h2: "I criteri con cui si valuta un operatore internazionale",
      paragraphs: [
        "I criteri tecnici sono gli stessi che usiamo per i concessionari italiani, applicati a un contesto diverso. Il numero di licenza deve essere verificabile sul registro pubblico dell'autorità che l'ha rilasciata, non solo dichiarato nel piè di pagina. I termini del bonus devono indicare requisito di puntata, scadenza, tetto di vincita e contributo dei giochi. I tempi di prelievo dichiarati devono trovare riscontro nelle testimonianze degli utenti e nei test indipendenti.",
        "Nel segmento internazionale sono molto diffusi i pagamenti in criptovaluta, con tempi di accredito spesso inferiori all'ora. Sono uno strumento tecnico, non una garanzia: la rapidità del pagamento dipende dalla politica interna dell'operatore e dalle verifiche antiriciclaggio, non dalla rete blockchain utilizzata. Un accredito rapido su una transazione piccola non dice nulla su come verrà gestito un prelievo importante dopo una vincita.",
      ],
      bullets: [
        "Numero di licenza verificabile sul registro dell'autorità emittente",
        "Termini e condizioni dei bonus completi e consultabili prima della registrazione",
        "Politica KYC dichiarata e coerente con i tempi di prelievo promessi",
        "Strumenti di gioco responsabile: limiti, pause, autoesclusione sul singolo marchio",
        "Assistenza raggiungibile e cronologia dei reclami pubblica dove disponibile",
      ],
    },
    {
      id: "italia",
      label: "Il quadro italiano",
      h2: "Il quadro italiano: perché su questo sito parliamo di ADM",
      paragraphs: [
        "Guida Casinò Italia si occupa di operatori con concessione ADM perché è il perimetro in cui il giocatore residente in Italia dispone delle tutele nazionali: conto di gioco verificato per legge, imposta assolta a monte dall'operatore, autoesclusione valida contemporaneamente su tutti i concessionari e reclami trattati secondo le regole italiane. Questa pagina non promuove il gioco su operatori privi di concessione italiana: ne spiega la natura, perché è una delle ricerche più frequenti in italiano e merita una risposta informativa corretta anziché un vuoto informativo riempito da fonti poco affidabili.",
        "Chi vive in Italia e vuole giocare con le tutele nazionali deve rivolgersi a un concessionario ADM: è un dato normativo, non un'opinione. Chi invece si informa dall'estero, o studia il mercato internazionale per ragioni professionali, ha bisogno di fonti che confrontino le licenze e i tempi di pagamento senza semplificazioni.",
      ],
    },
    {
      id: "fonti",
      label: "Fonti internazionali",
      h2: "Dove trovare dati sul mercato internazionale",
      paragraphs: [
        "Per la parte internazionale del tema — licenze non italiane, bonus a confronto fra Paesi, velocità di pagamento e casinò che accettano criptovalute — rimandiamo a risorse specializzate in quel mercato, che dispongono di dati e test propri. Una di queste è CryptoCasino Checker, comparatore internazionale in lingua inglese che pubblica recensioni, condizioni dei bonus, licenze e tempi di prelievo con filtro per Paese di residenza dell'utente.",
        "È una segnalazione editoriale: i due siti trattano perimetri diversi e non condividono classifiche né dati. Le informazioni su operatori internazionali vanno sempre verificate direttamente sulla fonte e confrontate con le regole vigenti nel proprio Paese di residenza, che possono vietare o limitare l'accesso a operatori non autorizzati localmente.",
      ],
    },
  ],
  faqs: [
    {
      q: "I casinò non AAMS sono illegali?",
      a: "Non in senso assoluto: molti hanno una licenza valida nel Paese che l'ha rilasciata. Non sono però autorizzati a raccogliere gioco in Italia, quindi per il giocatore residente in Italia non valgono le tutele previste dalla concessione ADM.",
    },
    {
      q: "Qual è la differenza fra AAMS e ADM?",
      a: "Nessuna sostanziale: AAMS era l'Amministrazione autonoma dei monopoli di Stato, confluita nell'Agenzia delle Dogane e dei Monopoli (ADM). La sigla AAMS resta nell'uso comune, ma la concessione oggi si chiama concessione ADM.",
    },
    {
      q: "Come verifico la licenza di un operatore internazionale?",
      a: "Confrontando il numero di licenza riportato nel piè di pagina con il registro pubblico dell'autorità indicata (per esempio MGA, UKGC o Curaçao Gaming Authority). Se il numero non compare nel registro, la dichiarazione non è verificabile.",
    },
    {
      q: "I pagamenti in criptovaluta rendono un casinò più sicuro?",
      a: "No. La criptovaluta è solo un metodo di trasferimento: la sicurezza dipende dalla licenza, dalla separazione dei fondi dei giocatori e dalle procedure di verifica dell'identità dell'operatore.",
    },
    {
      q: "Posso usare l'autoesclusione italiana su un sito non AAMS?",
      a: "No. Il Registro Unico degli Autoesclusi ha effetto solo sui concessionari italiani. Sugli operatori esteri l'autoesclusione, quando prevista, vale soltanto sul singolo marchio o sul suo network.",
    },
  ],
};

export const Route = createFileRoute("/casino-non-aams")({
  head: () => guideHeadWithWebPage(CFG),
  component: () => (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption="Concessione ADM e principali licenze internazionali a confronto"
        headers={["Autorità", "Giurisdizione", "Elemento distintivo"]}
        rows={[
          ["ADM (ex AAMS)", "Italia", "Unica concessione valida per l'offerta di gioco in Italia; attiva RUA e reclami nazionali"],
          ["MGA", "Malta", "Separazione obbligatoria dei fondi dei giocatori e procedimenti pubblicati"],
          ["UKGC", "Regno Unito", "Obblighi stringenti su pubblicità, verifica dell'età e gioco responsabile"],
          ["Curaçao Gaming Authority", "Curaçao", "Licenze dirette dopo la riforma, con obblighi di compliance rinnovati"],
          ["Gibilterra / Isle of Man", "Territori britannici", "Regimi storici usati da operatori internazionali di grandi dimensioni"],
        ]}
      />
      <ProsCons
        pros={[
          "Il mercato internazionale offre cataloghi e metodi di pagamento più ampi, incluse le criptovalute",
          "Alcune licenze europee impongono requisiti tecnici e finanziari severi",
          "I registri pubblici delle autorità permettono di verificare una licenza in pochi minuti",
        ]}
        cons={[
          "Per chi risiede in Italia decadono le tutele della concessione ADM",
          "L'autoesclusione nazionale non ha effetto sugli operatori esteri",
          "Reclami e controversie si trattano davanti a un'autorità straniera, spesso in un'altra lingua",
        ]}
      />

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">International overview (English summary)</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          "Non AAMS casinos" is the Italian term for online casinos that hold no Italian ADM
          concession. It describes a jurisdiction, not a quality level: many of these operators are
          licensed by the Malta Gaming Authority, the UK Gambling Commission, the Curaçao Gaming
          Authority, Gibraltar or the Isle of Man. What changes for a player based in Italy is the
          set of protections available — self-exclusion through the national register, complaints
          handled under Italian rules and tax already settled by the operator apply only to
          ADM-licensed sites.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Anyone comparing international brands should check the licence number against the issuing
          authority's public register, read the full bonus terms (wagering, expiry, maximum
          conversion, game contribution) and treat crypto payouts as a transfer method rather than a
          guarantee of fast withdrawals. For country-by-country comparisons of international
          operators, bonuses and payout speeds, see{" "}
          <a
            href={PARTNER_URL}
            className="font-medium text-gold underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
            target="_blank"
            rel="noopener"
          >
            CryptoCasino Checker
          </a>
          , an independent English-language comparison site covering that market. This page covers
          the Italian ADM market only and does not promote play on operators without an Italian
          concession.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Approfondimenti collegati</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link to="/casino-adm-vs-esteri" className="text-gold hover:underline">Casinò ADM e casinò esteri: differenze</Link></li>
          <li><Link to="/verificare-licenza-adm" className="text-gold hover:underline">Come verificare la licenza ADM</Link></li>
          <li><Link to="/casino-online-sicuri" className="text-gold hover:underline">Casinò online sicuri: i criteri</Link></li>
          <li><Link to="/come-valutiamo-i-casino" className="text-gold hover:underline">Come valutiamo i casinò</Link></li>
          <li><Link to="/prelievi-veloci" className="text-gold hover:underline">Prelievi veloci: tempi reali</Link></li>
          <li><Link to="/gioco-responsabile" className="text-gold hover:underline">Gioco responsabile e autoesclusione</Link></li>
        </ul>
      </section>

      <InternalCtaLinks />
    </GuideArticle>
  ),
});
