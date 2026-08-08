import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const cfg: GuideConfig = {
  path: "/quote-live-vs-prematch",
  title: "Quote live vs quote pre-match: differenze e strategie 2026",
  h1: "Quote live e quote pre-match: differenze e strategie",
  description:
    "Differenze tecniche tra quote pre-match e quote live: formazione del prezzo, latenza, sospensioni, cash out e rischi specifici del gioco in diretta. Guida informativa 2026. Solo +18.",
  keywords:
    "quote live, quote pre-match, scommesse live, betting in play, cash out, latenza quote, sospensione mercati",
  breadcrumb: "Quote live vs pre-match",
  sections: [
    {
      id: "definizioni",
      label: "Le due modalità",
      h2: "Due modalità, due logiche di prezzo",
      paragraphs: [
        "Le quote pre-match sono pubblicate nei giorni o nelle ore che precedono l'evento e si aggiornano lentamente, in risposta a notizie sulle formazioni, condizioni ambientali e movimenti del denaro raccolto. Sono il risultato di modelli statistici applicati a serie storiche ampie e successivamente corretti dai trader dell'operatore.",
        "Le quote live, o in play, vengono ricalcolate in tempo reale durante l'incontro. Il modello incorpora continuamente il punteggio, il minuto, gli uomini in campo, i cartellini e spesso indicatori di pressione offensiva. Ogni evento rilevante modifica la distribuzione di probabilità residua e quindi tutti i prezzi del palinsesto di quella partita.",
        "La differenza operativa più evidente riguarda il tempo di decisione. Nel pre-match l'utente dispone di ore per valutare; nel live la finestra è di pochi secondi e coincide con il momento di massima attivazione emotiva. Questa asimmetria è la ragione principale per cui il gioco in diretta richiede regole personali più rigide.",
      ],
    },
    {
      id: "formazione",
      label: "Come si forma il prezzo live",
      h2: "Come si forma il prezzo nel live",
      paragraphs: [
        "Il motore live parte dalla quota pre-match e la aggiorna con un modello che stima la probabilità residua in funzione del tempo rimanente. Un gol nei primi minuti sposta il prezzo molto più dello stesso gol al novantesimo, perché lascia ampio spazio a un recupero; l'espulsione di un difensore incide più di quella di un attaccante, per l'effetto sulla struttura difensiva.",
        "Sopra il modello opera una gestione del rischio: se la raccolta su un esito diventa sbilanciata, il trading riduce la quota per riequilibrare l'esposizione. Ne consegue che il prezzo live incorpora, in misura maggiore rispetto al pre-match, componenti che non riguardano la dinamica sportiva ma la posizione commerciale dell'operatore.",
        "I margini nel live sono in genere superiori a quelli pre-match sugli stessi mercati, perché l'incertezza informativa è più alta e la finestra di aggiornamento più breve. Verificarlo è semplice: sommando le probabilità implicite di un 1X2 live si ottiene quasi sempre un totale superiore a quello del corrispondente mercato pre-partita.",
      ],
    },
    {
      id: "latenza",
      label: "Latenza e sospensioni",
      h2: "Latenza, sospensioni e accettazione della giocata",
      paragraphs: [
        "Tra l'azione sul campo e la sua rappresentazione sullo schermo dell'utente passa un intervallo che varia da pochi secondi a oltre un minuto, a seconda del canale di trasmissione. L'operatore riceve i dati da fornitori professionali con latenza minore: la conseguenza è che l'utente sta sempre osservando un'immagine leggermente più vecchia di quella su cui è calcolato il prezzo.",
        "Per questo i mercati vengono sospesi in occasione di ogni evento potenzialmente rilevante: calci d'angolo pericolosi, controlli VAR, interventi dello staff medico. Alla riapertura le quote sono ricalcolate, e una giocata inviata prima della sospensione può essere rifiutata oppure accettata a una quota diversa da quella visualizzata.",
        "Le impostazioni di accettazione automatica delle variazioni di quota vanno conosciute prima di utilizzarle. Consentire l'accettazione di qualsiasi variazione significa autorizzare l'operatore a registrare la giocata a un prezzo peggiore di quello scelto; è preferibile impostare una tolleranza nulla o molto ridotta.",
      ],
    },
    {
      id: "cashout",
      label: "Cash out",
      h2: "Il cash out: che cosa si compra realmente",
      paragraphs: [
        "Il cash out consente di chiudere anticipatamente una giocata incassando un importo calcolato sulle quote correnti. Non è una funzione neutra: l'importo proposto incorpora un margine aggiuntivo rispetto al valore teorico della posizione, per cui l'utilizzo sistematico del cash out riduce il rendimento atteso nel lungo periodo.",
        "Esistono situazioni in cui ha comunque senso: quando un'informazione sopraggiunta durante la partita, come un infortunio o un cambio tattico, rende la valutazione iniziale non più valida. Diverso è il ricorso al cash out come reazione all'ansia della diretta, che è il caso più frequente e il meno razionale.",
        "Alcuni concessionari offrono il cash out parziale, che permette di chiudere una frazione della giocata. Anche in questo caso il margine si applica alla parte liquidata, e va tenuto presente che le giocate chiuse in anticipo spesso non contribuiscono ai requisiti di rigioco delle promozioni.",
      ],
    },
    {
      id: "strategie",
      label: "Regole operative",
      h2: "Regole operative per il gioco in diretta",
      paragraphs: [
        "Il live amplifica l'impulsività: mercati sempre aperti, aggiornamenti continui, possibilità di rientrare immediatamente dopo un esito negativo. Alcune regole semplici, definite prima dell'inizio dell'incontro, riducono in modo misurabile questo effetto.",
      ],
      bullets: [
        "Stabilire prima del fischio d'inizio il numero massimo di giocate live e l'importo unitario, senza modificarli durante la partita.",
        "Seguire in diretta solo partite di cui si conoscono squadre, moduli e situazione di classifica.",
        "Evitare di piazzare giocate nei sessanta secondi successivi a un gol o a un episodio arbitrale contestato.",
        "Impostare la tolleranza di variazione della quota a zero e leggere sempre il prezzo effettivo di accettazione.",
        "Non utilizzare il live per recuperare l'esito negativo di una giocata pre-match: è la dinamica di inseguimento della perdita.",
        "Attivare limiti di sessione e di versamento presso il concessionario, indipendenti dalla propria disciplina personale.",
      ],
    },
    {
      id: "confronto",
      label: "Quale modalità scegliere",
      h2: "Pre-match o live: quale modalità è più adatta",
      paragraphs: [
        "Il pre-match premia chi lavora sull'analisi preventiva e accetta di non intervenire durante l'incontro. Il live premia la lettura tattica in tempo reale, ma richiede una disciplina superiore e sconta margini più alti e la latenza informativa. Non esiste una modalità intrinsecamente migliore: esiste una compatibilità diversa con il profilo e il tempo disponibile di chi gioca.",
        "Per chi predilige la preparazione, il lavoro più utile avviene prima del calcio d'inizio: raccolta dei dati, valutazione delle probabilità, confronto con le quote offerte. Le risorse editoriali dedicate alla lettura statistica dei campionati sono complementari a questa fase e restano distinte dall'offerta commerciale degli operatori.",
        "Le scommesse sportive restano vietate ai minori di 18 anni e possono causare dipendenza patologica. Il gioco in diretta, per la sua frequenza, è tra le modalità con maggiore potenziale di perdita di controllo: monitorare tempo e importi è parte integrante di un uso consapevole.",
      ],
    },
  ],
  faqs: [
    {
      q: "Perché la quota cambia mentre invio la giocata?",
      a: "Perché il motore live ricalcola i prezzi in continuo. Tra la selezione e l'invio possono verificarsi eventi che modificano la quota: la giocata viene quindi rifiutata o accettata al nuovo prezzo, in base alle impostazioni di tolleranza.",
    },
    {
      q: "Il cash out conviene?",
      a: "L'importo offerto include un margine rispetto al valore teorico della posizione, quindi l'uso sistematico riduce il rendimento atteso. Può essere ragionevole quando un'informazione sopraggiunta invalida la valutazione iniziale.",
    },
    {
      q: "Perché i mercati live vengono sospesi?",
      a: "Per evitare che vengano accettate giocate su esiti già determinati dal ritardo di trasmissione. La sospensione consente al modello di aggiornare i prezzi dopo un evento rilevante.",
    },
    {
      q: "Le quote live hanno margini più alti?",
      a: "In genere sì. Sommando le probabilità implicite di un mercato live si ottiene quasi sempre un totale superiore rispetto allo stesso mercato pre-partita, per la maggiore incertezza informativa.",
    },
    {
      q: "Il gioco in diretta è più rischioso?",
      a: "Comporta un rischio comportamentale maggiore per la frequenza delle decisioni e la brevità del tempo di valutazione. Limiti di sessione e di importo, impostati prima dell'evento, sono la contromisura più efficace.",
    },
  ],
};

export const Route = createFileRoute("/quote-live-vs-prematch")({
  head: () => guideHead(cfg),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={cfg}>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Preparare l'incontro prima del calcio d'inizio</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Il lavoro che riduce le decisioni impulsive nel live si svolge prima della partita: chi
          cerca approfondimenti sulle{" "}
          <a
            href="https://pronostici-vincenti.it"
            className="text-gold underline underline-offset-4 hover:opacity-80"
            rel="noopener"
          >
            quote Serie A consigliate
          </a>{" "}
          e sulle tendenze statistiche dei campionati può integrare la propria analisi con portali
          editoriali specializzati, separati dai concessionari di gioco.
        </p>
      </section>
    </GuideArticle>
  );
}
