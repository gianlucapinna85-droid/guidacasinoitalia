import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/prelievi-veloci",
  title: "Casinò con prelievi veloci: guida ADM 2026",
  h1: "Casinò con prelievi veloci: quanto si aspetta davvero e da cosa dipende",
  description:
    "Come funzionano i prelievi rapidi sui casinò con concessione ADM: fasi di elaborazione, verifica dei documenti, metodi più veloci e cause dei ritardi. Confronto informativo. Solo +18.",
  keywords:
    "casino prelievi veloci, prelievo immediato casino, tempi prelievo casino adm, casino pagamento rapido, quanto tempo prelievo casino online",
  breadcrumb: "Prelievi veloci",
  sections: [
    {
      id: "fasi",
      label: "Le due fasi",
      h2: "Un prelievo passa sempre da due fasi",
      paragraphs: [
        "La prima fase è l'elaborazione interna: il concessionario verifica lo stato del conto, la conclusione di eventuali bonus e la regolarità dei documenti. La seconda è l'accredito sul circuito scelto, con tempi che dipendono dalla banca o dal portafoglio elettronico.",
        "Quando un operatore dichiara \"prelievo in 24 ore\" si riferisce quasi sempre alla sola prima fase. Il tempo percepito dall'utente è la somma delle due.",
      ],
    },
    {
      id: "accelerare",
      label: "Come accelerare",
      h2: "Come ridurre i tempi di attesa",
      paragraphs: [
        "La leva più efficace è completare la verifica dell'identità subito dopo la registrazione, prima ancora di depositare: con SPID o CIE la convalida è in genere immediata.",
      ],
      bullets: [
        "Verifica i documenti appena aperto il conto, non al momento del prelievo",
        "Usa un metodo intestato a te e già utilizzato per il deposito",
        "Completa o rinuncia ai bonus attivi prima di richiedere il prelievo",
        "Evita richieste multiple frazionate: allungano l'elaborazione",
        "Controlla i limiti minimi di prelievo indicati dall'operatore",
      ],
    },
    {
      id: "ritardi",
      label: "Cause dei ritardi",
      h2: "Perché un prelievo può essere sospeso",
      paragraphs: [
        "Le sospensioni derivano quasi sempre da obblighi normativi: documenti scaduti, intestazione difforme del metodo di pagamento, controlli antiriciclaggio su importi rilevanti o requisiti di puntata di un bonus non ancora soddisfatti. Il concessionario è tenuto a comunicare il motivo tramite l'area riservata.",
      ],
    },
  ],
  faqs: [
    {
      q: "Esiste un casinò ADM con prelievo istantaneo?",
      a: "Nessun concessionario può liquidare un prelievo prima della verifica dei documenti. Con l'identità già convalidata e un portafoglio elettronico, alcuni operatori dichiarano accrediti in poche ore.",
    },
    {
      q: "Quanto tempo richiede un prelievo con bonifico?",
      a: "In genere 2-5 giorni lavorativi, sommando l'elaborazione dell'operatore ai tempi interbancari.",
    },
    {
      q: "Posso annullare una richiesta di prelievo?",
      a: "Molti concessionari lo consentono finché la richiesta è in elaborazione. È una funzione da usare con prudenza: reinserire i fondi nel saldo di gioco è una delle dinamiche più rischiose per il controllo della spesa.",
    },
    {
      q: "Il prelievo minimo è uguale per tutti gli operatori?",
      a: "No, varia in genere tra 10 e 20 euro. Il valore dichiarato da ciascun concessionario è riportato nella relativa scheda informativa.",
    },
  ],
};

export const Route = createFileRoute("/prelievi-veloci")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
