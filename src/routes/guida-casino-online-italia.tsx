import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  GuideArticle,
  guideHeadWithWebPage,
  SeoTable,
  ProsCons,
  InternalCtaLinks,
  type GuideConfig,
} from "@/components/guide-article";
import { operators } from "@/lib/operators";
import { getCasinoMeta } from "@/data/casinos";

const CFG: GuideConfig = {
  path: "/guida-casino-online-italia",
  title: "Guida Casino Online Italia 2026: bonus, slot e ADM",
  description:
    "La guida completa ai casino online ADM in Italia: migliori bonus, slot machine, roulette, blackjack, recensioni affidabili e consigli per giocare in modo sicuro e responsabile.",
  h1: "Guida Casino Online Italia",
  keywords:
    "guida casino online italia, migliori casino online adm, casino online italia sicuri, bonus casino online italia, slot online soldi veri, roulette online italia, blackjack online italia, recensioni casino online adm, casino online autorizzati adm, migliori bonus casino 2026",
  eyebrow: "Contenuto pilastro · aggiornato 2026",
  breadcrumb: "Guida casino online Italia",
  sections: [
    {
      id: "cosa-sono",
      label: "Cosa sono i casino ADM",
      h2: "Cosa sono i casino online ADM e perché la concessione conta",
      paragraphs: [
        "In Italia un casino online può operare legalmente solo con una concessione rilasciata dall'Agenzia delle Dogane e dei Monopoli (ADM, ex AAMS). La concessione non è un semplice marchio grafico: è un titolo autorizzativo che impone all'operatore requisiti patrimoniali, obblighi tecnici sui software di gioco, tracciabilità dei flussi finanziari e adesione agli strumenti nazionali di tutela del giocatore.",
        "I casino online autorizzati ADM devono utilizzare giochi certificati, collegati ai sistemi di controllo del concessionario e verificabili nei parametri dichiarati. Il conto di gioco è nominativo e viene attivato solo dopo la verifica dei documenti d'identità, con procedure che oggi passano spesso da SPID o CIE.",
        "Questa guida casino online Italia raccoglie in un unico punto i contenuti che Guida Casinò Italia pubblica su casino ADM, bonus, slot, roulette e blackjack, con un approccio informativo e non promozionale: nessun contenuto di questa pagina incoraggia a giocare, e tutti i giochi descritti hanno un margine strutturale a favore del banco.",
      ],
      bullets: [
        "Concessione ADM verificabile nell'elenco pubblico dei concessionari",
        "Conto di gioco nominativo con verifica dell'identità obbligatoria",
        "Giochi certificati e collegati ai sistemi di controllo",
        "Adesione al Registro Unico degli Autoesclusi (RUA)",
      ],
    },
    {
      id: "come-scegliere",
      label: "Come scegliere",
      h2: "Come scegliere un casino online sicuro in Italia",
      paragraphs: [
        "Il primo controllo riguarda la concessione: il numero deve essere indicato in chiaro nel footer del sito e deve corrispondere a una posizione attiva nell'elenco pubblicato da ADM. Un sito che non riporta il numero, o che lo riporta in modo generico, non offre alcuna garanzia sulla propria posizione autorizzativa.",
        "Il secondo controllo riguarda le condizioni economiche: importo minimo di deposito e di prelievo, metodi di pagamento accettati, tempi dichiarati per l'accredito e documenti richiesti per la prima operazione. Sono informazioni che ogni concessionario pubblica nei termini e condizioni e che vanno lette prima dell'iscrizione, non dopo.",
        "Il terzo controllo riguarda le tutele: limiti di deposito, limiti di spesa, limiti di sessione, autoesclusione temporanea e definitiva devono essere raggiungibili in pochi passaggi dall'area del conto. Su un casino online Italia sicuro questi strumenti sono visibili e non nascosti dietro l'assistenza clienti.",
        "Il quarto controllo è la coerenza tra ciò che l'operatore dichiara e ciò che il giocatore trova: catalogo giochi, valori di RTP indicati nelle schede dei titoli, assistenza in lingua italiana e trasparenza delle promozioni. Guida Casinò Italia applica esattamente questi criteri nelle proprie recensioni casino online ADM.",
      ],
      bullets: [
        "Numero di concessione ADM presente e verificabile",
        "Termini e condizioni chiari su bonus, depositi e prelievi",
        "Metodi di pagamento tracciabili e intestati al giocatore",
        "Strumenti di autolimitazione accessibili dal conto",
        "Assistenza in italiano e canali di contatto dichiarati",
      ],
    },
    {
      id: "bonus",
      label: "Bonus casino",
      h2: "Quali bonus casino online Italia convengono davvero",
      paragraphs: [
        "Un bonus non è un importo disponibile: è credito vincolato a condizioni. Il parametro decisivo è il requisito di puntata (wagering), cioè quante volte l'importo bonus deve essere rigiocato prima di poter essere convertito in saldo prelevabile. Un bonus elevato con requisito alto può risultare meno conveniente di un bonus modesto con requisito basso.",
        "Vanno poi verificati la scadenza (il tempo entro cui completare il requisito), il contributo dei giochi (le slot in genere contribuiscono al 100%, roulette e blackjack molto meno o per nulla), il tetto massimo di conversione e il limite di puntata per giocata mentre il bonus è attivo.",
        "I bonus senza deposito seguono la stessa logica: sono importi o giri riconosciuti dopo la verifica dell'identità, senza versamento, ma restano soggetti a requisiti e a un tetto di prelievo. \"Gratuito\" significa che non richiede un deposito, non che l'eventuale vincita sia immediatamente disponibile.",
        "I migliori bonus casino 2026 non sono quindi quelli con la cifra più alta in evidenza, ma quelli con condizioni leggibili, requisito contenuto e nessuna clausola che renda di fatto irraggiungibile la conversione.",
      ],
      bullets: [
        "Requisito di puntata e base di calcolo (bonus o bonus+deposito)",
        "Scadenza entro cui completare il rigioco",
        "Contributo per tipologia di gioco",
        "Tetto massimo di vincita convertibile",
        "Limite di puntata per giocata con bonus attivo",
      ],
    },
    {
      id: "giochi",
      label: "Slot, roulette e blackjack",
      h2: "Differenza tra slot, roulette e blackjack online",
      paragraphs: [
        "Le slot online soldi veri funzionano con un generatore di numeri casuali certificato: ogni giro è indipendente e il risultato non dipende dai precedenti. I parametri di riferimento sono l'RTP (percentuale restituita in media sul lungo periodo, tipicamente tra il 94% e il 97%) e la volatilità, che descrive quanto sono ampie e rare le vincite.",
        "La roulette online Italia è un gioco a probabilità fisse e calcolabili: il margine del banco deriva dallo zero e vale circa il 2,7% nella variante europea, circa il 5,26% nell'americana con doppio zero e circa l'1,35% sulle puntate semplici nella francese con regola La Partage. Nessun sistema di puntata modifica questi valori.",
        "Il blackjack online Italia è l'unico dei tre in cui le decisioni del giocatore incidono sul risultato atteso: applicando correttamente la basic strategy il margine del banco può scendere sotto l'1% su tavoli con regole favorevoli. Resta comunque un margine negativo, e le varianti con regole peggiorative lo aumentano.",
        "In sintesi: le slot hanno il ritmo più rapido e la varianza più alta, la roulette ha regole semplici e margine noto, il blackjack richiede competenza e offre il margine più contenuto. Nessuno dei tre è un gioco a valore atteso positivo per il giocatore.",
      ],
      bullets: [
        "Slot: RNG certificato, RTP tra 94% e 97%, volatilità variabile",
        "Roulette: margine 1,35% - 5,26% a seconda della variante",
        "Blackjack: margine sotto l'1% con basic strategy su regole favorevoli",
        "Live: stessi margini, estrazione fisica in studio autorizzato",
      ],
    },
    {
      id: "gioco-responsabile",
      label: "Gioco responsabile",
      h2: "Giocare in modo sicuro e responsabile sui casino ADM",
      paragraphs: [
        "Il gioco con denaro reale comporta sempre una perdita attesa: il budget va considerato una spesa di intrattenimento già messa in conto, mai un investimento o uno strumento per recuperare perdite precedenti. La rincorsa alla perdita è il comportamento più frequentemente associato al gioco problematico.",
        "Su ogni concessionario ADM sono disponibili limiti di deposito giornalieri, settimanali e mensili, limiti di sessione e la sospensione temporanea del conto. Il Registro Unico degli Autoesclusi consente un'autoesclusione gratuita valida contemporaneamente su tutti gli operatori autorizzati in Italia.",
        "Il servizio è vietato ai minori di 18 anni. Per informazioni e supporto è attivo il Telefono Verde Nazionale per le problematiche legate al gioco d'azzardo dell'Istituto Superiore di Sanità: 800 558822, gratuito e anonimo.",
      ],
    },
  ],
  faqs: [
    {
      q: "Quali sono i migliori casino online ADM?",
      a: "Non esiste un casino migliore in assoluto: dipende dai criteri prioritari per il singolo giocatore. Guida Casinò Italia confronta i concessionari su concessione ADM attiva, ampiezza del catalogo, metodi di pagamento, tempi di prelievo dichiarati, trasparenza delle condizioni bonus e strumenti di autolimitazione disponibili nel conto di gioco.",
    },
    {
      q: "I bonus senza deposito sono davvero gratuiti?",
      a: "Non richiedono un versamento, ma non sono denaro immediatamente disponibile. Sono soggetti a requisiti di puntata, a una scadenza e a un tetto massimo di vincita convertibile in saldo prelevabile. Vanno letti nei termini e condizioni pubblicati dal concessionario prima dell'attivazione.",
    },
    {
      q: "Come verificare una licenza ADM?",
      a: "Il numero di concessione è indicato nel footer del sito dell'operatore. Va confrontato con l'elenco pubblico dei concessionari pubblicato dall'Agenzia delle Dogane e dei Monopoli: se il numero non compare o risulta non attivo, il sito non è autorizzato a operare in Italia.",
    },
    {
      q: "Le slot online pagano soldi veri?",
      a: "Sulle piattaforme ADM le vincite sono reali e accreditate sul conto di gioco, ma ogni slot ha un RTP inferiore al 100%: nel lungo periodo il saldo atteso è negativo per il giocatore. La modalità demo permette di provare i titoli senza denaro reale.",
    },
    {
      q: "Qual è il casino online più sicuro in Italia?",
      a: "Tutti i casino online autorizzati ADM operano sotto gli stessi obblighi normativi e di controllo: la sicurezza di base è garantita dalla concessione. Le differenze riguardano trasparenza delle condizioni, tempi di prelievo, qualità dell'assistenza e chiarezza degli strumenti di gioco responsabile.",
    },
  ],
};

const HUB_LINKS = [
  {
    to: "/migliori-casino-online-adm" as const,
    title: "Migliori Casino Online ADM",
    text: "Il confronto dei casino online autorizzati ADM su concessione, catalogo, pagamenti e tutele.",
  },
  {
    to: "/bonus-casino-online-senza-deposito" as const,
    title: "Bonus Casino Senza Deposito",
    text: "Come funzionano davvero i bonus senza deposito: requisiti di puntata, scadenze e limiti di conversione.",
  },
  {
    to: "/slot-online-soldi-veri" as const,
    title: "Slot Online Soldi Veri",
    text: "RNG certificato, RTP, volatilità e provider delle slot disponibili sui concessionari italiani.",
  },
  {
    to: "/roulette-online-italia" as const,
    title: "Roulette Online Italia",
    text: "Roulette europea, francese e americana: regole, tipi di puntata e margine del banco.",
  },
  {
    to: "/blackjack-online-italia" as const,
    title: "Blackjack Online Italia",
    text: "Regole, basic strategy, varianti e tavoli live con croupier reale sui casino ADM.",
  },
];

const TABLE_ROWS = operators.slice(0, 8).map((op) => {
  const meta = getCasinoMeta(op.slug);
  return [
    op.name,
    op.noDepositBonus?.amount ?? "Bonus di benvenuto su deposito",
    `${op.games}+ titoli`,
    op.paymentMethods.slice(0, 3).join(", "),
    op.concessionN,
    meta ? `${meta.rating.toFixed(1)}/10` : "In valutazione",
  ];
});

export const Route = createFileRoute("/guida-casino-online-italia")({
  head: () => guideHeadWithWebPage(CFG),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={CFG}>
      <section id="sezioni" className="mt-10">
        <h2 className="font-serif text-2xl">Le sezioni principali di Guida Casinò Italia</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ogni area tematica ha una pagina dedicata con dati, tabelle e domande frequenti.
        </p>
        <div className="mt-4 grid gap-2.5 md:grid-cols-2 md:gap-4">
          {HUB_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex flex-col rounded-xl border border-border bg-card p-3 transition-colors hover:border-gold/50 md:p-5"
            >
              <h3 className="font-serif text-base text-gold md:text-lg">{l.title}</h3>
              <p className="mt-1 text-[12px] leading-snug text-muted-foreground md:text-sm">
                {l.text}
              </p>
              <span className="mt-2 inline-flex w-fit items-center gap-1 text-[11px] font-semibold text-gold md:text-xs">
                Approfondisci <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SeoTable
        caption="Casino online ADM a confronto"
        headers={[
          "Casino",
          "Bonus",
          "Giochi disponibili",
          "Metodi di pagamento",
          "Licenza ADM",
          "Valutazione Guida Casinò Italia",
        ]}
        rows={TABLE_ROWS}
      />

      <ProsCons
        pros={[
          "Concessione ADM verificabile e tutele previste dalla normativa italiana",
          "Conto di gioco nominativo con verifica dell'identità",
          "Strumenti di autolimitazione e autoesclusione RUA",
          "Giochi certificati con RTP dichiarato nelle schede",
        ]}
        cons={[
          "Tutti i giochi hanno un margine strutturale a favore del banco",
          "I bonus sono sempre vincolati a requisiti di puntata",
          "Il ritmo elevato delle slot può favorire perdite di controllo",
          "Le vincite non sono prevedibili né programmabili",
        ]}
      />

      <InternalCtaLinks />
    </GuideArticle>
  );
}
