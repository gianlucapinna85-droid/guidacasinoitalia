import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/slot-online",
  title: "Slot online 2026: come funzionano, RTP e volatilità",
  h1: "Slot online: come funzionano davvero, RTP, volatilità e provider",
  description:
    "Guida alle slot online sui casinò con concessione ADM: funzionamento del generatore di numeri casuali, RTP, volatilità, linee di pagamento, provider e miti da sfatare. Solo +18.",
  keywords:
    "slot online, slot machine online, slot adm, migliori slot online, rtp slot, volatilità slot, provider slot, slot gratis demo",
  breadcrumb: "Slot online",
  sections: [
    {
      id: "funzionamento",
      label: "Come funzionano",
      h2: "Come funziona una slot online su un casinò ADM",
      paragraphs: [
        "Ogni giro di una slot online è determinato da un generatore di numeri casuali (RNG) certificato da laboratori indipendenti e verificato dall'Agenzia delle Dogane e dei Monopoli. Il risultato è indipendente dai giri precedenti: non esistono slot \"calde\" o \"fredde\", né orari o strategie che modifichino l'esito.",
        "Il gioco si svolge su rulli con simboli e linee di pagamento (o meccaniche a cluster e Megaways). Il valore della puntata influisce solo sull'importo della vincita potenziale, non sulla probabilità che si verifichi.",
      ],
    },
    {
      id: "rtp-volatilita",
      label: "RTP e volatilità",
      h2: "RTP e volatilità: i due numeri che contano",
      paragraphs: [
        "L'RTP (Return to Player) è la percentuale teorica di reintegro calcolata su milioni di giocate. La volatilità descrive invece come queste restituzioni si distribuiscono nel tempo: alta volatilità significa vincite rare ma più consistenti, bassa volatilità vincite frequenti di importo contenuto.",
        "Entrambi i valori sono indicati nella scheda informativa del singolo gioco, all'interno del casinò concessionario. È l'unica fonte attendibile: lo stesso titolo può essere distribuito con configurazioni di RTP differenti.",
      ],
      bullets: [
        "RTP alto non significa vincita garantita né prevedibile",
        "La volatilità incide sulla durata del saldo, non sul risultato atteso",
        "La demo gratuita usa lo stesso RNG della versione con denaro reale",
        "Bonus round e free spin fanno già parte del calcolo dell'RTP",
      ],
    },
    {
      id: "provider",
      label: "Provider e cataloghi",
      h2: "Provider di slot disponibili sui concessionari italiani",
      paragraphs: [
        "I cataloghi dei casinò ADM raccolgono software house internazionali come Pragmatic Play, NetEnt, Play'n GO, Nolimit City, Big Time Gaming, Red Tiger, Yggdrasil e Novomatic. Ogni provider ha uno stile riconoscibile per meccaniche, volatilità media e struttura dei bonus.",
        "Nelle schede provider del sito trovi, operatore per operatore, l'elenco delle software house disponibili con RTP medio dichiarato e titolo più giocato.",
      ],
    },
  ],
  faqs: [
    {
      q: "Esiste una strategia per vincere alle slot online?",
      a: "No. L'esito di ogni giro è determinato da un generatore di numeri casuali certificato e indipendente dai giri precedenti. Nessun sistema, orario o importo di puntata modifica le probabilità.",
    },
    {
      q: "Qual è un buon RTP per una slot?",
      a: "La media di categoria si colloca intorno al 96%. Valori superiori indicano un reintegro teorico più alto nel lungo periodo, ma non offrono alcuna garanzia sulla singola sessione.",
    },
    {
      q: "Le slot in versione demo sono uguali a quelle reali?",
      a: "Sì, utilizzano lo stesso software e lo stesso RNG. Cambia solo il fatto che il saldo è virtuale e le vincite non sono prelevabili.",
    },
    {
      q: "Cosa sono le slot Megaways?",
      a: "Sono slot con un numero variabile di simboli per rullo a ogni giro, che genera migliaia di combinazioni vincenti possibili. Tendono ad avere volatilità elevata.",
    },
  ],
};

export const Route = createFileRoute("/slot-online")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
