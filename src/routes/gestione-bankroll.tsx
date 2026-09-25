import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const cfg: GuideConfig = {
  path: "/gestione-bankroll",
  title: "Gestione Bankroll: Metodo Semplice per Scommesse e Casinò (2026)",
  h1: "Gestione del bankroll per scommesse sportive e casinò online",
  description:
    "Come impostare un budget di gioco: dimensionamento della puntata, staking plan, varianza, registrazione dei risultati e limiti di autolimitazione sui concessionari ADM. Guida informativa. Solo +18.",
  keywords:
    "gestione bankroll, budget gioco, staking plan, unità di puntata, varianza scommesse, limiti di deposito, autolimitazione adm",
  breadcrumb: "Gestione del bankroll",
  sections: [
    {
      id: "definizione",
      label: "Che cos'è il bankroll",
      h2: "Che cos'è il bankroll e come si definisce",
      paragraphs: [
        "Il bankroll è la somma destinata in modo esclusivo all'attività di gioco, separata da ogni altra voce del bilancio personale. Non è un capitale di investimento e non deve essere confuso con un risparmio: è una spesa di intrattenimento il cui esito atteso, per la presenza del margine dell'operatore, è strutturalmente negativo nel lungo periodo.",
        "La regola di definizione è semplice: il bankroll è l'importo che, se perso integralmente, non modifica in alcun modo la capacità di far fronte a spese ordinarie, obblighi familiari e impegni finanziari. Se il numero individuato genera esitazione, è già troppo alto. Nessuna competenza tecnica, in nessun mercato, compensa un budget dimensionato male.",
        "Una volta definito, il bankroll va isolato: un importo mensile, versato una sola volta, senza ricariche straordinarie. La ricarica non pianificata è il primo segnale osservabile di perdita di controllo, ed è più significativa del risultato economico in sé.",
      ],
    },
    {
      id: "unita",
      label: "L'unità di puntata",
      h2: "L'unità di puntata e il dimensionamento del rischio",
      paragraphs: [
        "L'unità è la frazione di bankroll impiegata in una singola giocata. Impostarla tra l'1% e il 2% del totale è la prassi più diffusa tra chi gioca con metodo: su un bankroll di 200 euro corrisponde a giocate da 2-4 euro. Sembra poco, ed è esattamente il punto: l'unità serve a garantire che una sequenza negativa non chiuda anticipatamente l'attività.",
        "La matematica della rovina è impietosa. Con puntate pari al 10% del bankroll, una serie di sette esiti negativi consecutivi — statisticamente frequente anche con pronostici corretti al 55% — dimezza il capitale. Con puntate all'1%, la stessa serie incide per il 7% ed è pienamente assorbibile.",
        "L'unità va ricalcolata periodicamente sul bankroll effettivo, mai aumentata nel corso di una sessione negativa. L'incremento della puntata dopo una perdita, che i sistemi di tipo martingala formalizzano, non modifica il valore atteso e aumenta invece in modo esponenziale il rischio di esaurire il capitale.",
      ],
    },
    {
      id: "staking",
      label: "Staking plan",
      h2: "Staking plan: i modelli più diffusi e i loro limiti",
      paragraphs: [
        "Uno staking plan è la regola che lega l'importo della giocata alla situazione del bankroll. Nessun piano trasforma un gioco a margine negativo in un'attività profittevole: serve a controllare la variabilità, non a creare rendimento.",
      ],
      bullets: [
        "Staking fisso: importo costante per ogni giocata. È il più semplice, il più prevedibile e il più adatto a chi inizia.",
        "Staking proporzionale: percentuale costante del bankroll corrente. Riduce automaticamente l'esposizione nelle fasi negative.",
        "Staking a valore: importo modulato sulla differenza percepita tra probabilità stimata e probabilità implicita nella quota. Richiede una stima affidabile, che quasi nessuno possiede realmente.",
        "Progressioni negative (martingala e varianti): raddoppio dopo ogni perdita. Da evitare: portano rapidamente ai limiti di puntata del tavolo o del palinsesto con un capitale già compromesso.",
        "Progressioni positive: aumento dopo una vincita. Meno pericolose delle precedenti, ma prive di qualsiasi fondamento matematico di vantaggio.",
      ],
    },
    {
      id: "varianza",
      label: "Varianza e casinò",
      h2: "Varianza: perché il casinò e le scommesse richiedono impostazioni diverse",
      paragraphs: [
        "Nei giochi di casinò il margine è noto e fisso: una slot con RTP dichiarato del 96% restituisce teoricamente 96 euro ogni 100 puntati nel lungo periodo, con un margine del 4% valido per costruzione. Non esiste abilità che modifichi questo valore. Nelle scommesse sportive il margine è simile per ordine di grandezza, ma la componente di valutazione dell'evento introduce un elemento non presente nella slot.",
        "Cambia soprattutto la velocità di consumo del bankroll. Una slot elabora centinaia di giocate all'ora e realizza il valore atteso negativo in tempi brevissimi; una schedina si risolve in novanta minuti. A parità di budget, il tempo di esposizione al rischio è quindi radicalmente diverso, e per i giochi ad alta frequenza il limite di sessione è più efficace del limite di importo.",
        "L'alta volatilità aumenta ulteriormente questo effetto: distribuzioni di vincita rare e ampie generano sequenze negative lunghe, che risultano psicologicamente più difficili da sostenere. Conoscere la volatilità del gioco scelto è parte del dimensionamento del bankroll quanto conoscerne l'RTP.",
      ],
    },
    {
      id: "registrazione",
      label: "Registrare i risultati",
      h2: "Registrare i risultati: l'unico dato che non mente",
      paragraphs: [
        "La memoria del giocatore è sistematicamente distorta: gli esiti positivi vengono ricordati con maggiore nitidezza di quelli negativi, e il bilancio percepito risulta quasi sempre migliore di quello reale. Un registro, anche un semplice foglio di calcolo, elimina la distorsione.",
        "È sufficiente annotare data, tipologia di gioco o mercato, importo, quota, esito e saldo progressivo. Dopo qualche settimana emergono informazioni utilizzabili: quali mercati generano perdite ricorrenti, in quali fasce orarie si gioca peggio, se gli importi aumentano dopo un esito negativo. Tutti i concessionari ADM mettono inoltre a disposizione lo storico completo delle transazioni nell'area personale.",
        "Il dato più importante da monitorare non è il saldo ma la coerenza rispetto alle regole che ci si è dati: quante volte l'unità è stata superata, quante ricariche straordinarie sono state effettuate, quante sessioni hanno superato la durata prevista.",
      ],
    },
    {
      id: "strumenti",
      label: "Strumenti di tutela",
      h2: "Strumenti di autolimitazione previsti dalla normativa ADM",
      paragraphs: [
        "La disciplina personale è più solida quando è supportata da vincoli tecnici. I concessionari ADM sono tenuti a offrire limiti di versamento giornalieri, settimanali e mensili, limiti di puntata, limiti di durata della sessione, pause di riflessione temporanee e autoesclusione dal singolo operatore o da tutti i concessionari tramite il Registro Unico degli Autoesclusi (RUA).",
        "Una caratteristica rilevante di questi strumenti è l'asimmetria temporale: l'abbassamento di un limite ha effetto immediato, mentre l'innalzamento richiede un periodo di attesa. Impostarli quando si è lucidi produce quindi una protezione che resta efficace anche nei momenti in cui la lucidità viene meno.",
        "Se il gioco smette di essere intrattenimento, se si gioca per recuperare somme perse o si sottrae tempo e denaro ad altri ambiti della vita, il supporto è gratuito e anonimo: Telefono Verde ISS 800 558822, servizi territoriali per le dipendenze delle ASL, portale giocaresponsabile.it. Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica.",
      ],
    },
  ],
  faqs: [
    {
      q: "Quanto dovrebbe essere grande un bankroll?",
      a: "Deve corrispondere a una somma la cui perdita integrale non incide su spese ordinarie e impegni finanziari. Non esiste un importo consigliato: esiste un importo compatibile con il proprio bilancio personale.",
    },
    {
      q: "Qual è la percentuale corretta per la singola giocata?",
      a: "Chi gioca con metodo utilizza in genere l'1-2% del bankroll per giocata, così che una sequenza negativa non esaurisca il capitale. Percentuali superiori aumentano rapidamente il rischio di rovina.",
    },
    {
      q: "I sistemi a raddoppio funzionano?",
      a: "No. La martingala e le sue varianti non modificano il valore atteso e portano rapidamente ai limiti massimi di puntata con un capitale già eroso. Sono tra le cause più frequenti di perdite rilevanti.",
    },
    {
      q: "La gestione del bankroll rende profittevole il gioco?",
      a: "No. Il margine dell'operatore rende il risultato atteso negativo nel lungo periodo. La gestione del bankroll controlla la variabilità e la durata dell'attività, non genera rendimento.",
    },
    {
      q: "Come si impostano i limiti su un casinò ADM?",
      a: "Nell'area personale del conto di gioco, alla sezione dedicata al gioco responsabile. La riduzione di un limite è immediata, l'aumento è soggetto a un periodo di attesa previsto dalla normativa.",
    },
  ],
};

export const Route = createFileRoute("/gestione-bankroll")({
  head: () => guideHead(cfg),
  component: Page,
});

function Page() {
  return (
    <GuideArticle cfg={cfg}>
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Budget e selezione degli eventi</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Un budget ben impostato ha senso solo se accompagnato da una selezione ridotta e motivata
          degli eventi: chi segue le scommesse sportive può confrontare le proprie valutazioni con
          le{" "}
          <a
            href="https://pronostici-vincenti.it"
            className="text-gold underline underline-offset-4 hover:opacity-80"
            rel="noopener"
          >
            schedine vincenti
          </a>{" "}
          e le analisi pubblicate da redazioni indipendenti, evitando di aumentare il numero di
          giocate quando le informazioni disponibili sono poche.
        </p>
      </section>
    </GuideArticle>
  );
}
