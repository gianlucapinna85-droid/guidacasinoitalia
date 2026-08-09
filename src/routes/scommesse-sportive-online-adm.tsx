import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHeadWithWebPage, type GuideConfig } from "@/components/guide-article";

const cfg: GuideConfig = {
  path: "/scommesse-sportive-online-adm",
  title: "Scommesse sportive online ADM 2026: guida completa e siti autorizzati",
  h1: "Scommesse sportive online ADM: guida completa 2026",
  description:
    "Guida alle scommesse sportive online con concessione ADM nel 2026: come funzionano i siti autorizzati, quote, mercati, palinsesto calcio, prelievi e tutele. Contenuto informativo. Solo +18.",
  keywords:
    "scommesse sportive online, siti scommesse adm, bookmaker autorizzati italia, quote calcio, palinsesto scommesse, scommesse legali italia 2026",
  breadcrumb: "Scommesse sportive online ADM",
  sections: [
    {
      id: "come-funzionano",
      label: "Come funzionano",
      h2: "Come funzionano le scommesse sportive online in Italia",
      paragraphs: [
        "Le scommesse sportive online in Italia sono consentite esclusivamente agli operatori titolari di concessione rilasciata dall'Agenzia delle Dogane e dei Monopoli (ADM, ex AAMS). Il numero di concessione deve essere pubblicato nel footer del sito e riscontrabile nell'elenco pubblico dei concessionari: in assenza di questo requisito l'operatore è illegale in Italia e non offre alcuna tutela in caso di controversia.",
        "Il funzionamento è omogeneo tra i concessionari: registrazione con documento d'identità valido, verifica dell'età e dell'identità, apertura del conto di gioco nominativo, versamento tramite metodi tracciabili. Il conto non può essere intestato a un minore né a un soggetto iscritto al Registro Unico degli Autoesclusi (RUA).",
        "Ogni giocata è un contratto: l'utente accetta una quota nel momento della conferma della schedina, e quella quota resta valida anche se il prezzo si muove successivamente. Le eccezioni — eventi rinviati, quote palesemente errate, mercati sospesi — sono disciplinate dal regolamento del singolo operatore, che è opportuno leggere prima e non dopo.",
      ],
    },
    {
      id: "mercati",
      label: "Mercati e palinsesto",
      h2: "Palinsesto e mercati principali sui siti scommesse ADM",
      paragraphs: [
        "Il palinsesto di un bookmaker autorizzato copre in genere calcio italiano ed europeo, tennis, basket, motori, sport invernali e discipline minori. La profondità cambia molto tra operatori: alcuni offrono decine di mercati per ogni partita di Serie A, altri si concentrano sui mercati principali con margini più contenuti.",
      ],
      bullets: [
        "1X2: esito finale al termine dei tempi regolamentari, recupero incluso.",
        "Doppia chance: copre due esiti su tre, con quota inferiore e rischio ridotto.",
        "Over/Under: totale reti rispetto a una soglia, tipicamente 2,5.",
        "Goal/No Goal: entrambe le squadre a segno oppure no, indipendente dal risultato.",
        "Handicap: vantaggio o svantaggio virtuale per riequilibrare incontri sbilanciati.",
        "Mercati giocatore: marcatori, tiri, cartellini; margini in genere più elevati.",
      ],
    },
    {
      id: "criteri",
      label: "Come scegliere un sito",
      h2: "Criteri per valutare un sito di scommesse autorizzato",
      paragraphs: [
        "Il primo criterio è la concessione ADM verificabile. Il secondo, spesso trascurato, è il margine applicato alle quote: sommando le probabilità implicite (1 diviso la quota) di tutti gli esiti di un mercato si ottiene un valore superiore al 100%, e l'eccedenza è ciò che l'operatore trattiene. Su una partita di Serie A un margine del 4-5% è competitivo, oltre l'8% erode qualsiasi altro vantaggio.",
        "Seguono i fattori operativi: tempi di prelievo dichiarati e rispettati, metodi di pagamento supportati, qualità dell'assistenza in lingua italiana, stabilità dell'app in mobilità, disponibilità di streaming e statistiche integrate. I bonus promozionali dovrebbero essere l'ultimo criterio di valutazione, non il primo: incidono una sola volta, il margine incide su ogni singola giocata.",
        "Va infine verificata la presenza degli strumenti di autotutela: limiti di versamento e di giocata modificabili, pause di riflessione, autoesclusione temporanea o definitiva tramite RUA. Sono obblighi di legge per i concessionari e un indicatore concreto della serietà dell'operatore.",
      ],
    },
    {
      id: "analisi",
      label: "Analisi e pronostici",
      h2: "Analisi degli eventi: dati, statistiche e pronostici",
      paragraphs: [
        "Scegliere un mercato senza analizzare l'evento equivale ad accettare il margine del bookmaker senza alcuna contropartita informativa. I dati più utili non sono i risultati recenti ma gli indicatori sottostanti: expected goals prodotti e concessi, tiri nello specchio, rendimento sulle palle inattive, pressione offensiva.",
        "Contano anche le variabili di contesto che i modelli automatici incorporano con ritardo: turnover nelle settimane con impegni infrasettimanali, squalifiche, cambi di allenatore, motivazioni di classifica, condizioni del campo. Sono spesso queste a spiegare quote apparentemente anomale.",
        "Per approfondire l'analisi delle singole partite è utile affidarsi a fonti editoriali indipendenti dai bookmaker, che separano il lavoro statistico dalla promozione commerciale.",
      ],
    },
    {
      id: "tutele",
      label: "Tutele e gioco responsabile",
      h2: "Tutele, limiti e gioco responsabile",
      paragraphs: [
        "Il gioco con vincite in denaro è vietato ai minori di 18 anni e può causare dipendenza patologica. Le scommesse sportive presentano un rischio specifico: la percezione di competenza. Conoscere il calcio non annulla il margine dell'operatore né la casualità di un episodio arbitrale.",
        "Un budget mensile definito in anticipo, importi costanti e nessun tentativo di recupero delle perdite sono le tre regole che distinguono l'intrattenimento dalla spesa non pianificata. Il numero verde ISS 800 558822 offre ascolto e orientamento gratuito e anonimo.",
      ],
    },
  ],
  faqs: [
    {
      q: "Come verifico che un sito di scommesse sia legale in Italia?",
      a: "Il numero di concessione ADM deve comparire nel footer del sito ed essere riscontrabile nell'elenco pubblico dei concessionari pubblicato dall'Agenzia delle Dogane e dei Monopoli.",
    },
    {
      q: "Che differenza c'è tra quota e probabilità?",
      a: "La probabilità implicita si ottiene dividendo 1 per la quota decimale: una quota 2,50 esprime il 40%. La somma delle probabilità di tutti gli esiti supera il 100% e l'eccedenza è il margine del bookmaker.",
    },
    {
      q: "Le scommesse live sono diverse da quelle prematch?",
      a: "Sì: le quote live si aggiornano in tempo reale in base agli eventi della partita e i margini sono in genere più alti rispetto al prematch, a fronte di tempi di decisione molto più brevi.",
    },
    {
      q: "Posso avere conti su più bookmaker ADM?",
      a: "Sì, la normativa lo consente purché ogni conto sia nominativo e verificato. Chi è iscritto al RUA non può aprire né utilizzare conti di gioco presso alcun concessionario.",
    },
    {
      q: "Esistono pronostici sicuri?",
      a: "No. Nessuna analisi elimina la componente casuale dello sport né il margine dell'operatore. I pronostici sono valutazioni probabilistiche, non previsioni certe.",
    },
  ],
};

export const Route = createFileRoute("/scommesse-sportive-online-adm")({
  head: () => guideHeadWithWebPage(cfg),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={cfg}>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Analisi statistiche e pronostici calcio</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Per confrontare la propria lettura del palinsesto con{" "}
          <a
            href="https://pronostici-vincenti.it"
            className="text-gold underline underline-offset-4 hover:opacity-80"
            rel="noopener"
          >
            pronostici calcio e analisi delle partite
          </a>{" "}
          aggiornati su Serie A, coppe europee e principali campionati esteri è possibile fare
          riferimento a portali editoriali specializzati, indipendenti dai concessionari di gioco.
        </p>
      </section>
    </GuideArticle>
  );
}
