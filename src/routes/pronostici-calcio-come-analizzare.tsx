import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHeadWithWebPage, type GuideConfig } from "@/components/guide-article";

const cfg: GuideConfig = {
  path: "/pronostici-calcio-come-analizzare",
  title: "Pronostici calcio: come analizzare una partita | 2026",
  h1: "Pronostici calcio: come analizzare una partita con i dati",
  description:
    "Metodo per analizzare una partita di calcio prima di un pronostico: expected goals, forma reale, contesto, quote e probabilità implicita. Contenuto informativo e statistico. Solo +18.",
  keywords:
    "pronostici calcio, analisi partite calcio, expected goals, statistiche serie a, probabilità implicita quote, come fare un pronostico",
  breadcrumb: "Pronostici calcio: analisi",
  sections: [
    {
      id: "premessa",
      label: "Premessa",
      h2: "Che cos'è davvero un pronostico calcistico",
      paragraphs: [
        "Un pronostico non è una previsione dell'esito di una partita: è la stima di una probabilità. Affermare che una squadra ha il 55% di possibilità di vincere significa accettare che nel 45% dei casi accadrà il contrario. Chi promette pronostici sicuri o vincite garantite sta descrivendo qualcosa che nello sport non esiste.",
        "L'unico modo per dare senso a un pronostico è confrontarlo con il prezzo proposto dal mercato. La probabilità implicita di una quota si ottiene dividendo 1 per la quota decimale: 2,00 corrisponde al 50%, 3,00 al 33,3%. Un'analisi ha valore informativo solo quando porta a una stima diversa da quella implicita nella quota, e sufficientemente motivata.",
      ],
    },
    {
      id: "dati",
      label: "I dati che contano",
      h2: "I dati che contano più dei risultati recenti",
      paragraphs: [
        "La classifica e la serie di risultati recenti sono gli indicatori più visibili e i meno informativi: descrivono l'esito, non il processo che lo ha generato. Una squadra che ha perso tre partite creando molte occasioni ha un profilo statistico opposto a una che le ha perse senza tirare in porta.",
      ],
      bullets: [
        "Expected goals (xG) prodotti e concessi, meglio se su media mobile delle ultime 6-10 gare.",
        "Tiri nello specchio e tiri concessi, normalizzati per possesso palla.",
        "Rendimento sulle palle inattive, in attacco e in difesa.",
        "Pressione offensiva e recuperi nella metà campo avversaria.",
        "Distribuzione dei gol per fascia oraria, utile sui mercati Over/Under.",
        "Minutaggio dei titolari nelle settimane con impegni infrasettimanali.",
      ],
    },
    {
      id: "contesto",
      label: "Il contesto",
      h2: "Il contesto: la variabile che i modelli incorporano in ritardo",
      paragraphs: [
        "I modelli statistici trattano bene ciò che è misurabile e male ciò che è situazionale. Un cambio di allenatore modifica il sistema di gioco prima che i dati lo registrino; una squadra già salva a tre giornate dal termine cambia atteggiamento senza che nulla lo anticipi nei numeri.",
        "Altrettanto rilevanti sono le assenze pesanti nei ruoli chiave, i viaggi lunghi in coppa, le condizioni del campo e del meteo, i precedenti recenti tra gli stessi allenatori. Sono spesso questi elementi a spiegare quote che appaiono anomale rispetto alla forma statistica.",
        "Un metodo praticabile consiste nel fissare la propria stima di probabilità prima di guardare le quote. Confrontarla dopo evita l'ancoraggio, cioè la tendenza a razionalizzare il prezzo già visto invece di valutarlo.",
      ],
    },
    {
      id: "mercati",
      label: "Scegliere il mercato",
      h2: "Tradurre l'analisi nel mercato giusto",
      paragraphs: [
        "Un'analisi corretta può portare a una giocata sbagliata se il mercato scelto non corrisponde alla conclusione raggiunta. Se l'analisi indica una partita aperta e produttiva, il mercato coerente è l'Over o il Goal, non l'1X2. Se indica una squadra superiore ma discontinua, la doppia chance rappresenta l'esito coerente con quella stima.",
        "Nelle multiple le probabilità si moltiplicano: cinque eventi al 70% producono circa il 17% complessivo. Aggiungere un evento non analizzato per alzare la quota totale è la definizione di giocata non informata. Va inoltre considerata la correlazione tra esiti della stessa partita, che il prezzo raramente riflette in modo corretto.",
      ],
    },
    {
      id: "limiti",
      label: "Limiti del metodo",
      h2: "I limiti strutturali dell'analisi",
      paragraphs: [
        "Il calcio è uno sport a bassissimo numero di eventi decisivi: una deviazione o un episodio arbitrale ribaltano un incontro indipendentemente dalla qualità dell'analisi. A questo si somma il margine del bookmaker, che rende il gioco strutturalmente sfavorevole nel lungo periodo.",
        "Il gioco con vincite in denaro è vietato ai minori di 18 anni e può causare dipendenza patologica. L'analisi statistica è un'attività intellettuale interessante di per sé e non giustifica alcun aumento degli importi giocati. Il numero verde ISS 800 558822 offre supporto gratuito e anonimo.",
      ],
    },
  ],
  faqs: [
    {
      q: "Che cosa sono gli expected goals?",
      a: "Gli xG stimano la probabilità che ogni conclusione si trasformi in gol in base a posizione, tipo di tiro e situazione di gioco. Descrivono la qualità delle occasioni create meglio del punteggio finale.",
    },
    {
      q: "Esistono pronostici sicuri o vincenti al 100%?",
      a: "No. Ogni pronostico è una stima probabilistica: anche un esito valutato all'85% si verifica in media in circa sei casi su sette, quindi non è certo.",
    },
    {
      q: "Meglio analizzare pochi eventi o molti?",
      a: "Pochi eventi analizzati a fondo. La qualità dell'informazione conta più della quantità: nelle multiple ogni evento aggiunto senza analisi riduce la probabilità complessiva di successo.",
    },
    {
      q: "Quanto pesano le assenze?",
      a: "Molto nei ruoli chiave e nelle rose corte, meno nelle squadre con alternative equivalenti. L'effetto va valutato sul sistema di gioco, non sul singolo nome.",
    },
    {
      q: "Come si confronta la propria stima con la quota?",
      a: "Convertendo la quota in probabilità implicita (1 diviso la quota). Una giocata ha senso informativo solo se la propria stima è superiore alla probabilità implicita e sostenuta da dati.",
    },
  ],
};

export const Route = createFileRoute("/pronostici-calcio-come-analizzare")({
  head: () => guideHeadWithWebPage(cfg),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={cfg}>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Approfondimenti sulle partite di giornata</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Chi vuole confrontare il proprio lavoro di analisi con{" "}
          <a
            href="https://pronostici-vincenti.it"
            className="text-gold underline underline-offset-4 hover:opacity-80"
            rel="noopener"
          >
            pronostici calcio e analisi statistiche delle partite
          </a>{" "}
          su Serie A, Premier League, Liga e coppe europee può fare riferimento a portali editoriali
          specializzati, indipendenti dagli operatori di gioco.
        </p>
      </section>
    </GuideArticle>
  );
}
