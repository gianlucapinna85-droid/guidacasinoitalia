import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHeadWithWebPage, type GuideConfig } from "@/components/guide-article";

const cfg: GuideConfig = {
  path: "/scommesse-live-come-funzionano",
  title: "Scommesse live: come funzionano quote in tempo reale e cash out",
  h1: "Scommesse live: come funzionano davvero",
  description:
    "Guida alle scommesse live sui siti ADM: come si formano le quote in tempo reale, ritardo del segnale, cash out, margini e rischi specifici del gioco in diretta. Solo +18.",
  keywords:
    "scommesse live, quote in tempo reale, cash out scommesse, betting live calcio, scommesse in diretta adm",
  breadcrumb: "Scommesse live",
  sections: [
    {
      id: "meccanismo",
      label: "Come si formano le quote",
      h2: "Come si formano le quote nelle scommesse live",
      paragraphs: [
        "Nelle scommesse live le quote vengono ricalcolate in continuo da modelli che aggiornano la probabilità di ogni esito in base a punteggio, minuto, uomini in campo, tiri, corner e pressione territoriale. Un gol o un'espulsione producono variazioni immediate, spesso precedute da una sospensione temporanea del mercato.",
        "Il ritardo del segnale è l'elemento meno compreso: la diretta televisiva o in streaming arriva con alcuni secondi di scarto rispetto ai dati usati dal bookmaker. Chi scommette basandosi su ciò che vede sta reagendo a un'informazione già incorporata nella quota, non anticipandola.",
        "I margini applicati al live sono in genere superiori a quelli del prematch, perché il rischio gestito dall'operatore è più alto e i tempi di aggiornamento più stretti. È un costo che si somma a decisioni prese con pochi secondi a disposizione.",
      ],
    },
    {
      id: "cash-out",
      label: "Cash out",
      h2: "Il cash out: cosa si guadagna e cosa si paga",
      paragraphs: [
        "Il cash out consente di chiudere anticipatamente una giocata accettando un importo calcolato sulle quote correnti. È uno strumento di gestione del rischio, non un vantaggio economico: il valore proposto incorpora un margine aggiuntivo rispetto alla probabilità reale dell'esito in quel momento.",
        "Usato in modo sistematico riduce sia le perdite sia i profitti attesi, con un effetto netto tendenzialmente negativo nel lungo periodo. Ha senso in situazioni specifiche — un infortunio che cambia il quadro, una lettura della partita rivelatasi errata — non come abitudine.",
        "Molte promozioni escludono dal calcolo dei requisiti le giocate chiuse con cash out: è una delle clausole più frequenti nei regolamenti dei bonus e conviene verificarla prima di utilizzarlo.",
      ],
    },
    {
      id: "rischi",
      label: "Rischi specifici",
      h2: "Perché il live è la modalità più rischiosa",
      paragraphs: [
        "Il gioco in diretta comprime il tempo tra impulso e decisione. Nel prematch è possibile analizzare, confrontare e rinunciare; nel live la finestra è di pochi secondi e la valutazione razionale viene sostituita dalla reazione emotiva all'andamento della partita.",
      ],
      bullets: [
        "Alta frequenza di giocate in una singola sessione, con perdita del controllo sul totale speso.",
        "Tendenza a rincorrere una giocata perdente con una nuova puntata sullo stesso incontro.",
        "Margini superiori rispetto al prematch su gran parte dei mercati.",
        "Ritardo del segnale che rende illusoria la percezione di vantaggio informativo.",
        "Notifiche e quote lampeggianti progettate per sollecitare una risposta immediata.",
      ],
    },
    {
      id: "pratiche",
      label: "Pratiche prudenti",
      h2: "Pratiche prudenti per chi gioca in diretta",
      paragraphs: [
        "Fissare in anticipo il numero massimo di giocate per partita e l'importo complessivo della sessione è più efficace di qualsiasi strategia sui mercati. Impostare i limiti direttamente nel conto di gioco, dove i concessionari ADM sono obbligati a metterli a disposizione, li rende vincolanti anche nel momento in cui viene meno la lucidità.",
        "Il gioco con vincite in denaro è vietato ai minori di 18 anni e può causare dipendenza patologica. Se durante una sessione live si avverte l'esigenza di aumentare gli importi per recuperare, la scelta corretta è chiudere l'applicazione. Il numero verde ISS 800 558822 offre ascolto gratuito e anonimo.",
      ],
    },
  ],
  faqs: [
    {
      q: "Perché il mercato live viene sospeso?",
      a: "Durante episodi rilevanti come gol, rigori o espulsioni il bookmaker sospende i mercati per ricalcolare le quote ed evitare giocate su informazioni non ancora incorporate nel prezzo.",
    },
    {
      q: "Il cash out conviene?",
      a: "È uno strumento di gestione del rischio, non di profitto: l'importo proposto incorpora un margine aggiuntivo, quindi l'uso sistematico riduce il rendimento atteso.",
    },
    {
      q: "Guardare la partita dà un vantaggio nel live?",
      a: "Poco: la diretta arriva con alcuni secondi di ritardo rispetto ai dati usati dal bookmaker, quindi la quota ha già recepito l'evento appena visto.",
    },
    {
      q: "I margini live sono più alti del prematch?",
      a: "Generalmente sì, perché l'operatore gestisce un rischio maggiore con aggiornamenti molto rapidi. Il confronto si fa sommando le probabilità implicite degli esiti di uno stesso mercato.",
    },
    {
      q: "Le giocate live contano per i requisiti dei bonus?",
      a: "Dipende dal regolamento: molte promozioni escludono le giocate chiuse con cash out e alcuni mercati live. La verifica va fatta nei termini della singola offerta.",
    },
  ],
};

export const Route = createFileRoute("/scommesse-live-come-funzionano")({
  head: () => guideHeadWithWebPage(cfg),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={cfg}>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Preparare la partita prima del fischio d'inizio</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Il modo più efficace per non subire la pressione del live è arrivare alla partita già
          analizzata. Per{" "}
          <a
            href="https://pronostici-vincenti.it"
            className="text-gold underline underline-offset-4 hover:opacity-80"
            rel="noopener"
          >
            pronostici calcio e analisi pre-partita
          </a>{" "}
          su campionati italiani ed esteri esistono portali editoriali specializzati, indipendenti
          dai bookmaker.
        </p>
      </section>
    </GuideArticle>
  );
}
