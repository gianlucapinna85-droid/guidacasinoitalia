import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/bonus-benvenuto-casino",
  title: "Bonus di benvenuto casinò ADM 2026: le condizioni",
  h1: "Bonus di benvenuto casinò: come funzionano e come si leggono le condizioni",
  description:
    "Guida ai bonus di benvenuto dei casinò con concessione ADM: differenza con il bonus senza deposito, requisiti di puntata, giochi ammessi, scadenze e limite di vincita prelevabile. Solo +18.",
  keywords:
    "bonus benvenuto casino, bonus casino adm, requisiti di puntata, wagering casino, bonus deposito casino online, condizioni bonus casino",
  breadcrumb: "Bonus di benvenuto",
  sections: [
    {
      id: "tipologie",
      label: "Tipologie di bonus",
      h2: "Le tipologie di bonus offerte dai concessionari",
      paragraphs: [
        "I concessionari ADM riconoscono, entro i limiti fissati dalla normativa, alcune forme di credito di gioco al momento dell'apertura del conto. Le principali sono il bonus senza deposito, accreditato dopo la verifica dei documenti, e il bonus sul primo deposito, calcolato in percentuale sull'importo versato.",
        "Esistono poi i pacchetti di free spin, utilizzabili su titoli specifici, e i bonus a rimborso, che restituiscono una quota delle perdite di un periodo definito.",
      ],
      bullets: [
        "Bonus senza deposito: nessun versamento richiesto, importi contenuti",
        "Bonus sul primo deposito: percentuale sull'importo versato, con tetto massimo",
        "Free spin: giri gratuiti vincolati a titoli e valore di puntata definiti",
        "Cashback: rimborso parziale calcolato su un periodo determinato",
      ],
    },
    {
      id: "wagering",
      label: "Requisiti di puntata",
      h2: "Requisiti di puntata: il dato che determina il valore reale",
      paragraphs: [
        "Il requisito di puntata (wagering) indica quante volte l'importo del bonus deve essere giocato prima che le vincite generate diventino prelevabili. Un bonus da 50 euro con requisito 30x richiede 1.500 euro di giocate complessive.",
        "Vanno letti insieme al wagering anche il contributo dei giochi (le slot contribuiscono in genere al 100%, i giochi da tavolo molto meno), la scadenza del bonus e l'eventuale tetto massimo di vincita convertibile.",
      ],
    },
    {
      id: "valutare",
      label: "Come valutarlo",
      h2: "Come valutare un bonus senza farsi ingannare dall'importo",
      paragraphs: [
        "L'importo nominale è il dato meno significativo. Un bonus contenuto con wagering basso, scadenza ampia e nessun tetto di conversione ha un valore reale superiore a una cifra elevata con condizioni restrittive. Il documento da leggere è sempre quello dei Termini e Condizioni pubblicati dal concessionario, non il messaggio in evidenza.",
        "Ricorda inoltre che nessun bonus modifica l'RTP dei giochi né rende il gioco una fonte di guadagno: resta una forma di intrattenimento a pagamento.",
      ],
    },
  ],
  faqs: [
    {
      q: "Qual è la differenza tra bonus di benvenuto e bonus senza deposito?",
      a: "Il bonus senza deposito viene accreditato dopo la sola verifica dell'identità, senza versare denaro. Il bonus di benvenuto sul primo deposito è invece calcolato in percentuale sull'importo effettivamente versato.",
    },
    {
      q: "Cosa significa wagering 30x?",
      a: "Significa che l'importo del bonus deve essere giocato 30 volte prima che le vincite generate diventino prelevabili. Su un bonus di 50 euro corrispondono a 1.500 euro di giocate complessive.",
    },
    {
      q: "Posso prelevare subito il bonus?",
      a: "No. Il credito bonus non è prelevabile finché non sono soddisfatte le condizioni pubblicate dal concessionario, incluso l'eventuale tetto massimo di vincita convertibile.",
    },
    {
      q: "I bonus sono uguali su tutti i casinò ADM?",
      a: "No. Importi, requisiti di puntata, giochi ammessi e scadenze variano per operatore: vanno confrontati leggendo i rispettivi Termini e Condizioni.",
    },
  ],
};

export const Route = createFileRoute("/bonus-benvenuto-casino")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
