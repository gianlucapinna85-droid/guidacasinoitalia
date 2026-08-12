import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const cfg: GuideConfig = {
  path: "/come-leggere-quote-calcio",
  title: "Come leggere le quote calcio: guida pratica 2026",
  h1: "Come leggere le quote calcio e costruire una schedina",
  description:
    "Guida alla lettura delle quote calcio: probabilità implicita, margine del bookmaker, mercati 1X2, over/under e handicap, e come si struttura una schedina in modo consapevole. Contenuto informativo. Solo +18.",
  keywords:
    "quote calcio, come leggere le quote, probabilità implicita, margine bookmaker, schedina calcio, over under, handicap asiatico, 1x2",
  breadcrumb: "Come leggere le quote calcio",
  sections: [
    {
      id: "cosa-esprime",
      label: "Cosa esprime una quota",
      h2: "Che cosa esprime davvero una quota",
      paragraphs: [
        "In Italia le quote sono espresse in formato decimale: il numero indica quanto viene restituito per ogni euro giocato in caso di esito positivo, importo della giocata incluso. Una quota di 2,50 su una giocata da 10 euro corrisponde a un ritorno lordo di 25 euro, di cui 15 di vincita netta. È la convenzione più diffusa in Europa continentale e la più immediata da convertire in probabilità.",
        "Una quota non è una previsione: è un prezzo. Riflette la stima di probabilità elaborata dal bookmaker attraverso modelli statistici, e insieme il flusso di denaro raccolto sui vari esiti. Quando un esito attira molte giocate, la quota si abbassa anche senza che sia cambiata la valutazione tecnica dell'evento. Leggere una quota significa quindi distinguere la componente di stima probabilistica da quella di gestione del rischio commerciale.",
        "Da questa distinzione discende la conseguenza più importante: quote basse non equivalgono a esiti certi. Un favorito quotato 1,20 perde comunque, statisticamente, in circa una partita su sei. Nessuna quota, per quanto contenuta, rende un pronostico sicuro.",
      ],
    },
    {
      id: "probabilita",
      label: "Probabilità implicita",
      h2: "Dalla quota alla probabilità implicita",
      paragraphs: [
        "La conversione è immediata: probabilità implicita = 1 / quota. Una quota 2,00 esprime il 50%, una quota 4,00 il 25%, una quota 1,25 l'80%. Questo semplice calcolo permette di verificare se la propria valutazione dell'evento è coerente con il prezzo proposto: ha senso considerare una giocata solo quando si ritiene la probabilità reale superiore a quella implicita nella quota.",
        "Applicando la formula a tutti gli esiti di un mercato si ottiene la somma delle probabilità implicite. Su un 1X2 quotato 2,10 / 3,40 / 3,60 si ottiene 47,6% + 29,4% + 27,8% = 104,8%. L'eccedenza di 4,8 punti percentuali è il margine del bookmaker, la componente che rende il gioco strutturalmente sfavorevole all'utente nel lungo periodo.",
        "Il margine varia per operatore, per campionato e per mercato: è generalmente più contenuto sui principali campionati europei e sui mercati più liquidi, più elevato sulle serie minori e sui mercati esotici. Confrontare il margine su uno stesso evento tra concessionari diversi è uno degli esercizi più informativi che si possano fare.",
      ],
    },
    {
      id: "mercati",
      label: "I mercati principali",
      h2: "I mercati principali del calcio e cosa misurano",
      paragraphs: [
        "Ogni mercato risponde a una domanda diversa sull'incontro. Sceglierlo in modo coerente con l'analisi effettuata è più determinante della singola quota.",
      ],
      bullets: [
        "1X2: esito finale sui novanta minuti più recupero, esclusi supplementari e rigori.",
        "Doppia chance: copre due dei tre esiti; quota più bassa a fronte di un rischio ridotto.",
        "Over/Under: numero totale di reti rispetto a una soglia, tipicamente 2,5; misura la produttività offensiva attesa, non chi vince.",
        "Goal/No Goal: entrambe le squadre a segno oppure no; indipendente dal risultato finale.",
        "Handicap: assegna un vantaggio o svantaggio virtuale a una squadra per riequilibrare incontri sbilanciati.",
        "Mercati sui giocatori: marcatori, tiri, cartellini; molto sensibili a rotazioni e minutaggio, con margini in genere più alti.",
      ],
    },
    {
      id: "schedina",
      label: "Costruire la schedina",
      h2: "Come si costruisce una schedina in modo consapevole",
      paragraphs: [
        "Nella multipla le quote si moltiplicano, ma si moltiplicano anche le probabilità di errore. Cinque eventi con probabilità individuale del 70% producono una probabilità complessiva di circa il 17% (0,7 elevato alla quinta): la percezione di controllo cresce mentre la probabilità reale di successo crolla. È il motivo per cui le multiple lunghe sono strutturalmente le giocate meno favorevoli.",
        "Una schedina impostata con metodo parte da un numero ridotto di eventi realmente analizzati: forma recente, gol attesi, indisponibilità, calendario, motivazioni di classifica, condizioni del campo. Aggiungere un evento su cui non si dispone di informazioni per raggiungere una quota complessiva più alta è la definizione stessa di giocata non informata.",
        "Va anche considerata la correlazione: due esiti che dipendono dallo stesso fattore, come l'Over 2,5 e il segno 1 nella medesima partita, non sono eventi indipendenti. Molti concessionari ne vietano la combinazione, e quando la consentono il prezzo raramente riflette il legame statistico reale.",
      ],
    },
    {
      id: "analisi",
      label: "Dati e analisi",
      h2: "Quali dati usare prima di scegliere un mercato",
      paragraphs: [
        "I dati più informativi non sono i risultati recenti, ma gli indicatori sottostanti: expected goals prodotti e concessi, tiri nello specchio, palle inattive, possesso nella metà campo avversaria. Una squadra che perde tre partite di fila generando molte occasioni ha un profilo statistico diverso da una che le perde senza tirare in porta, anche se la classifica le equipara.",
        "Il contesto pesa quanto i numeri: turnover in settimane con impegni infrasettimanali, squalifiche, cambi di allenatore, condizioni meteo. Sono variabili che i modelli automatici incorporano con ritardo e che spiegano molte quote apparentemente anomale.",
        "Per approfondire le statistiche dei singoli incontri e le tendenze dei campionati esistono risorse editoriali dedicate, indipendenti dagli operatori di gioco e utili proprio perché separano l'analisi sportiva dalla promozione commerciale.",
      ],
    },
    {
      id: "limiti",
      label: "Limiti e tutele",
      h2: "Limiti del metodo e strumenti di tutela",
      paragraphs: [
        "Nessuna lettura delle quote, per quanto accurata, elimina il margine del bookmaker né la componente casuale dello sport. Il calcio è un gioco a basso numero di eventi decisivi: un episodio arbitrale o una deviazione modificano l'esito indipendentemente dalla qualità dell'analisi. Chi ragiona in termini di rendimento garantito sta applicando allo sport una logica che lo sport non ammette.",
        "Le scommesse con vincite in denaro sono vietate ai minori di 18 anni e possono causare dipendenza patologica. Tutti i concessionari ADM offrono limiti di versamento, limiti di giocata, pause di riflessione e autoesclusione tramite il Registro Unico degli Autoesclusi. Il numero verde ISS 800 558822 fornisce ascolto e orientamento gratuito.",
      ],
    },
  ],
  faqs: [
    {
      q: "Come si converte una quota in probabilità?",
      a: "Dividendo 1 per la quota decimale. Una quota 2,50 corrisponde a una probabilità implicita del 40%, una quota 1,50 a circa il 66,7%.",
    },
    {
      q: "Che cos'è il margine del bookmaker?",
      a: "È la somma delle probabilità implicite di tutti gli esiti di un mercato meno il 100%. Su un 1X2 che somma 105%, il margine è del 5% e rappresenta la quota trattenuta strutturalmente dall'operatore.",
    },
    {
      q: "Le multiple convengono più delle singole?",
      a: "No dal punto di vista statistico: nella multipla il margine del bookmaker si applica a ogni evento e si compone, mentre la probabilità complessiva di successo cala rapidamente all'aumentare degli eventi.",
    },
    {
      q: "Le quote basse indicano esiti sicuri?",
      a: "No. Una quota 1,20 esprime una probabilità implicita di circa l'83%: significa che l'esito contrario si verifica in media in circa un caso su sei.",
    },
    {
      q: "Perché la stessa partita ha quote diverse tra operatori?",
      a: "Perché ogni bookmaker applica modelli di stima e margini differenti e gestisce un flusso di giocate proprio. Il confronto tra operatori sullo stesso evento evidenzia queste differenze.",
    },
  ],
};

export const Route = createFileRoute("/come-leggere-quote-calcio")({
  head: () => guideHead(cfg),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={cfg}>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Dove trovare analisi dettagliate delle partite</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Chi desidera confrontare la propria lettura delle quote con un lavoro di{" "}
          <a
            href="https://pronostici-vincenti.it"
            className="text-gold underline underline-offset-4 hover:opacity-80"
            rel="noopener"
          >
            analisi delle partite
          </a>{" "}
          basato su statistiche, forma recente e contesto tecnico può fare riferimento a portali
          editoriali specializzati nel calcio, indipendenti dai concessionari di gioco.
        </p>
      </section>
    </GuideArticle>
  );
}
