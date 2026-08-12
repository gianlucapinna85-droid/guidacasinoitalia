import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHeadWithWebPage, type GuideConfig } from "@/components/guide-article";

const cfg: GuideConfig = {
  path: "/scommesse-serie-a-guida",
  title: "Scommesse Serie A 2026: mercati, quote e statistiche",
  h1: "Scommesse Serie A: guida ai mercati e alle statistiche",
  description:
    "Guida alle scommesse sulla Serie A: mercati più liquidi, margini sulle quote, statistiche utili, fattore campo e calendario europeo. Contenuto informativo. Solo +18.",
  keywords:
    "scommesse serie a, quote serie a, pronostici serie a, statistiche serie a, over under serie a, mercati scommesse calcio italiano",
  breadcrumb: "Scommesse Serie A",
  sections: [
    {
      id: "perche",
      label: "Perché la Serie A",
      h2: "Perché la Serie A è il campionato più liquido per il mercato italiano",
      paragraphs: [
        "La Serie A concentra la maggior parte del volume raccolto dai concessionari ADM sul calcio. Un volume elevato produce margini più contenuti e mercati più profondi rispetto alle serie minori: sullo stesso incontro è frequente trovare decine di mercati e quote aggiornate con maggiore frequenza.",
        "Per chi analizza, la liquidità è un vantaggio e un limite insieme. Vantaggio perché il prezzo è più efficiente e i costi impliciti più bassi; limite perché le informazioni sono ampiamente disponibili e il margine di vantaggio informativo si riduce rispetto a campionati meno coperti.",
      ],
    },
    {
      id: "mercati",
      label: "Mercati più usati",
      h2: "I mercati più utilizzati sulla Serie A",
      paragraphs: [
        "La scelta del mercato dovrebbe discendere dalla conclusione dell'analisi, non precederla.",
      ],
      bullets: [
        "1X2: l'esito classico, con margini generalmente competitivi sui big match.",
        "Over/Under 2,5: legato al profilo offensivo e difensivo, non a chi vince.",
        "Goal/No Goal: utile quando l'analisi indica due squadre che concedono occasioni.",
        "Doppia chance: riduce il rischio a fronte di una quota più bassa.",
        "Handicap: riequilibra incontri con differenze tecniche marcate.",
        "Mercati sui giocatori: marcatori, tiri, cartellini; molto sensibili a rotazioni e minutaggio.",
      ],
    },
    {
      id: "statistiche",
      label: "Statistiche utili",
      h2: "Le statistiche che descrivono davvero una squadra di Serie A",
      paragraphs: [
        "La classifica misura l'esito, non il rendimento. Gli indicatori più informativi sono gli expected goals prodotti e concessi su media mobile, i tiri nello specchio, il rendimento sui calci piazzati e la produttività nella metà campo avversaria. Una squadra con xG creati alti e punti bassi tende statisticamente a riavvicinarsi ai propri valori nel medio periodo.",
        "Il fattore campo in Serie A resta rilevante ma inferiore a quanto la percezione comune suggerisca: va pesato in relazione allo stadio, alla distanza percorsa dalla squadra ospite e al periodo del calendario. Nelle settimane con impegni europei, il turnover incide più del fattore campo stesso.",
        "Le motivazioni di classifica diventano determinanti nelle ultime otto giornate: squadre salve o già qualificate mostrano rendimenti diversi da quelli espressi fino a quel momento, e i modelli statistici lo registrano con ritardo.",
      ],
    },
    {
      id: "quote",
      label: "Leggere le quote",
      h2: "Leggere le quote di Serie A senza farsi ancorare",
      paragraphs: [
        "La probabilità implicita si ottiene dividendo 1 per la quota decimale. Sommando i tre esiti di un 1X2 si misura il margine dell'operatore: sui big match di Serie A valori intorno al 4-5% sono competitivi, oltre l'8% incidono in modo significativo sul risultato di lungo periodo.",
        "Un accorgimento metodologico utile è formulare la propria stima prima di consultare le quote. Guardarle per prime produce ancoraggio: si tende a costruire una giustificazione del prezzo esistente invece di valutarlo in modo indipendente.",
      ],
    },
    {
      id: "tutele",
      label: "Tutele",
      h2: "Limiti, tutele e gioco responsabile",
      paragraphs: [
        "Seguire la Serie A con continuità genera una sensazione di competenza che non riduce il margine del bookmaker né la casualità degli episodi. Il rischio specifico è proprio questo: confondere la conoscenza sportiva con la capacità di prevedere risultati.",
        "Il gioco con vincite in denaro è vietato ai minori di 18 anni e può causare dipendenza patologica. Tutti i concessionari ADM mettono a disposizione limiti di versamento e di giocata, pause di riflessione e autoesclusione tramite RUA. Il numero verde ISS 800 558822 offre supporto gratuito.",
      ],
    },
  ],
  faqs: [
    {
      q: "Quale mercato è più adatto per la Serie A?",
      a: "Nessuno in assoluto: il mercato va scelto in base alla conclusione dell'analisi. Se indica una partita produttiva, l'Over è coerente; se indica superiorità tecnica ma discontinuità, lo è la doppia chance.",
    },
    {
      q: "Quanto pesa il fattore campo in Serie A?",
      a: "È rilevante ma spesso sovrastimato. Va valutato insieme a distanza percorsa dagli ospiti, calendario europeo e turnover, che nelle settimane fitte incidono di più.",
    },
    {
      q: "Le statistiche stagionali bastano per un pronostico?",
      a: "No: vanno lette su media mobile recente e integrate con il contesto, cioè assenze, cambi di allenatore e motivazioni di classifica.",
    },
    {
      q: "Perché le quote della stessa partita cambiano tra operatori?",
      a: "Perché ogni bookmaker applica modelli e margini differenti e gestisce un proprio flusso di giocate. Confrontare le probabilità implicite evidenzia queste differenze.",
    },
    {
      q: "Le multiple sulla Serie A sono convenienti?",
      a: "Statisticamente no: il margine si compone su ogni evento e la probabilità complessiva di successo cala rapidamente all'aumentare degli incontri inseriti.",
    },
  ],
};

export const Route = createFileRoute("/scommesse-serie-a-guida")({
  head: () => guideHeadWithWebPage(cfg),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={cfg}>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Statistiche e pronostici sulle partite di Serie A</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Per approfondire giornata per giornata con{" "}
          <a
            href="https://pronostici-vincenti.it"
            className="text-gold underline underline-offset-4 hover:opacity-80"
            rel="noopener"
          >
            pronostici Serie A e analisi statistiche delle partite
          </a>{" "}
          è possibile consultare portali editoriali specializzati nel calcio, indipendenti dai
          concessionari di gioco.
        </p>
      </section>
    </GuideArticle>
  );
}
