import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/requisiti-scommessa-bonus",
  title: "Requisiti di scommessa dei bonus: come funzionano | 2026",
  h1: "Guida ai requisiti di scommessa (wagering) dei bonus casinò",
  description:
    "Che cosa sono i requisiti di puntata, come si calcolano, quali giochi contribuiscono e perché le condizioni vanno lette nei termini del concessionario. Solo +18.",
  keywords:
    "requisiti di scommessa, wagering bonus casino, requisiti di puntata, condizioni bonus casino, come funziona il wagering",
  breadcrumb: "Requisiti di scommessa",
  sections: [
    {
      id: "definizione",
      label: "Che cosa sono",
      h2: "Che cosa sono i requisiti di scommessa",
      paragraphs: [
        "Il requisito di scommessa, o wagering, indica quante volte un determinato importo deve essere giocato prima che il saldo bonus (o le vincite da esso generate) diventi trasferibile sul saldo prelevabile. È una condizione contrattuale definita dal concessionario nei propri termini e condizioni.",
        "Trattandosi di condizioni legate a iniziative commerciali, in Italia il dettaglio dei singoli bonus non è divulgabile al pubblico ai sensi dell'art. 9 del D.L. 87/2018: questa guida spiega il meccanismo, non promuove offerte.",
      ],
    },
    {
      id: "calcolo",
      label: "Come si calcola",
      h2: "Come si calcola il requisito",
      paragraphs: [
        "Il moltiplicatore può essere applicato al solo importo bonus oppure alla somma di deposito e bonus: è la prima distinzione da individuare nel regolamento, perché cambia sensibilmente il volume di gioco richiesto.",
        "Al moltiplicatore si affiancano quasi sempre altri parametri: puntata massima consentita mentre il requisito è attivo, scadenza entro cui completarlo e importo massimo convertibile. Ignorare uno solo di questi parametri può annullare il bonus e le relative vincite.",
      ],
      bullets: [
        "Base di calcolo: solo bonus oppure deposito più bonus",
        "Scadenza temporale entro cui completare il requisito",
        "Puntata massima per singola giocata durante il wagering",
        "Tetto massimo di vincita convertibile in saldo reale",
      ],
    },
    {
      id: "contributo",
      label: "Contributo dei giochi",
      h2: "Il contributo dei giochi al requisito",
      paragraphs: [
        "Non tutti i giochi contribuiscono allo stesso modo. Le slot contribuiscono in genere per intero, mentre giochi da tavolo, roulette, blackjack e sezioni live contribuiscono in percentuale ridotta o nulla. La tabella dei contributi è parte integrante del regolamento.",
        "Alcuni titoli sono esclusi del tutto: giocarli mentre il requisito è attivo può comportare l'annullamento dell'offerta. Il regolamento indica sempre l'elenco delle esclusioni.",
      ],
    },
    {
      id: "lettura",
      label: "Come leggere le condizioni",
      h2: "Come leggere le condizioni prima di aderire",
      paragraphs: [
        "Le condizioni complete si trovano nella sezione promozioni o nei termini del conto di gioco del concessionario, spesso accessibili solo dopo la registrazione. È l'unica fonte contrattualmente vincolante.",
        "Un criterio pratico: valutare il volume di gioco richiesto rispetto al proprio budget abituale e ai limiti di deposito impostati. Se il requisito impone di giocare somme superiori a quelle che si spenderebbero comunque, l'offerta non è compatibile con una gestione prudente del bankroll.",
      ],
    },
  ],
  faqs: [
    {
      q: "Il requisito di scommessa si applica anche alle vincite?",
      a: "Nella maggior parte dei regolamenti sì: le vincite generate con saldo bonus restano vincolate fino al completamento del requisito e possono essere soggette a un tetto massimo di conversione.",
    },
    {
      q: "Perché non pubblicate i requisiti dei singoli bonus?",
      a: "Perché la comunicazione al pubblico delle condizioni di iniziative commerciali sul gioco è vietata in Italia dall'art. 9 del D.L. 87/2018. Le condizioni sono consultabili solo sul sito del concessionario.",
    },
    {
      q: "Cosa succede se supero la puntata massima consentita?",
      a: "Il regolamento tipicamente prevede l'annullamento del bonus e delle vincite maturate. È uno dei motivi più frequenti di contestazione.",
    },
    {
      q: "Posso rinunciare a un bonus già attivo?",
      a: "In genere sì, dall'area personale o contattando l'assistenza. Rinunciando si perde il saldo bonus ma si libera il saldo reale dai vincoli.",
    },
  ],
};

export const Route = createFileRoute("/requisiti-scommessa-bonus")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
