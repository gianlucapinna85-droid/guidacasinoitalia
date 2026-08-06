import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/metodi-pagamento-casino",
  title: "Metodi di pagamento casinò ADM: depositi e prelievi 2026",
  h1: "Metodi di pagamento sui casinò ADM: depositi, prelievi e tempi",
  description:
    "Guida ai metodi di pagamento accettati dai casinò online con concessione ADM: carte, PayPal, Postepay, bonifico, Skrill. Tempi di accredito, limiti, commissioni e verifiche. Solo +18.",
  keywords:
    "metodi di pagamento casino, deposito casino online, prelievo casino adm, casino postepay, casino paypal, bonifico casino online, tempi prelievo casino",
  breadcrumb: "Metodi di pagamento",
  sections: [
    {
      id: "metodi",
      label: "Metodi accettati",
      h2: "Quali metodi di pagamento accettano i casinò ADM",
      paragraphs: [
        "La normativa italiana impone che i movimenti sul conto di gioco siano tracciabili e intestati alla stessa persona titolare del conto. Per questo i concessionari accettano solo strumenti nominativi.",
      ],
      bullets: [
        "Carte di credito e debito (Visa, Mastercard) — deposito immediato",
        "PayPal — deposito immediato, prelievo tra poche ore e 3 giorni lavorativi",
        "Postepay ed equivalenti prepagate nominative",
        "Bonifico bancario — tempi più lunghi, in genere 2-5 giorni lavorativi",
        "Portafogli elettronici come Skrill e Neteller, dove dichiarati",
        "Contanti presso i punti vendita fisici, per gli operatori con rete territoriale",
      ],
    },
    {
      id: "prelievi",
      label: "Prelievi e tempi",
      h2: "Come funziona un prelievo e quanto tempo richiede",
      paragraphs: [
        "Il prelievo può essere richiesto solo dopo la verifica dell'identità imposta dalla normativa antiriciclaggio. La richiesta passa da una fase di elaborazione interna del concessionario e da una successiva fase di accredito, che dipende dal circuito scelto.",
        "I tempi dichiarati vanno letti come somma delle due fasi: un portafoglio elettronico è quasi sempre più rapido di un bonifico, ma nessun metodo bypassa la verifica documentale.",
      ],
    },
    {
      id: "commissioni",
      label: "Commissioni e limiti",
      h2: "Commissioni, limiti e intestazione del metodo",
      paragraphs: [
        "Nella maggior parte dei casi i concessionari non applicano commissioni su depositi e prelievi; eventuali costi del circuito sono indicati nei Termini e Condizioni. I limiti minimi e massimi variano per operatore e sono riportati nelle nostre schede.",
        "Il vincolo più importante resta l'intestazione: se il metodo di pagamento non è intestato al titolare del conto di gioco, il prelievo viene bloccato.",
      ],
    },
  ],
  faqs: [
    {
      q: "Qual è il metodo di prelievo più veloce?",
      a: "In genere i portafogli elettronici e PayPal, dove disponibili, con accrediti dichiarati tra poche ore e pochi giorni lavorativi. Il bonifico bancario è normalmente il più lento.",
    },
    {
      q: "Posso depositare con la carta di un familiare?",
      a: "No. La normativa antiriciclaggio impone che il metodo di pagamento sia intestato alla stessa persona titolare del conto di gioco.",
    },
    {
      q: "I casinò ADM applicano commissioni?",
      a: "Nella maggior parte dei casi no su depositi e prelievi standard. Eventuali costi sono sempre indicati nei Termini e Condizioni dell'operatore.",
    },
    {
      q: "Perché il mio prelievo è in attesa?",
      a: "Le cause più comuni sono documenti non ancora convalidati, un metodo di pagamento con intestazione difforme o un bonus con requisiti di puntata non completati.",
    },
  ],
};

export const Route = createFileRoute("/metodi-pagamento-casino")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
