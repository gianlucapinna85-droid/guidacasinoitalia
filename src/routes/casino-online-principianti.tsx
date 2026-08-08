import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/casino-online-principianti",
  title: "Casinò online per principianti: guida completa 2026",
  h1: "Casinò online per principianti: guida completa passo per passo",
  description:
    "Dalla verifica della concessione ADM alla registrazione, dai limiti di spesa alla lettura dell'RTP: tutto quello che serve sapere prima di iniziare. Solo +18.",
  keywords:
    "casino online per principianti, guida casino online, come iniziare casino online, primo conto di gioco, casino adm principianti",
  breadcrumb: "Guida per principianti",
  sections: [
    {
      id: "prima",
      label: "Prima di iniziare",
      h2: "Prima di iniziare: tre verifiche essenziali",
      paragraphs: [
        "La prima verifica riguarda la concessione ADM dell'operatore, da confrontare con l'elenco pubblico dell'Agenzia delle Dogane e dei Monopoli. La seconda riguarda l'età: il gioco con vincite in denaro è vietato ai minori di 18 anni. La terza riguarda il budget, che va definito prima di registrarsi e non durante la sessione.",
        "Impostare un budget significa stabilire una somma la cui perdita totale non incide su spese necessarie. Il gioco non è una fonte di reddito e nessuna tecnica modifica le probabilità matematiche dei giochi certificati.",
      ],
    },
    {
      id: "conto",
      label: "Conto di gioco",
      h2: "Apertura e verifica del conto di gioco",
      paragraphs: [
        "La registrazione richiede dati anagrafici, codice fiscale e un documento valido; molti concessionari accettano SPID o CIE, riducendo i tempi di verifica. Il conto deve essere intestato alla persona che gioca: l'uso di conti altrui è vietato.",
        "Subito dopo l'attivazione conviene impostare i limiti di deposito settimanali o mensili dall'area personale: è la misura più efficace per mantenere il controllo fin dalla prima sessione.",
      ],
      bullets: [
        "Documento valido e codice fiscale per la verifica",
        "SPID o CIE dove disponibili per accelerare l'attivazione",
        "Limiti di deposito impostati prima del primo versamento",
        "Metodo di pagamento intestato alla stessa persona",
      ],
    },
    {
      id: "giochi",
      label: "Capire i giochi",
      h2: "Capire i giochi: RTP, volatilità e demo",
      paragraphs: [
        "Ogni gioco pubblica nella scheda informativa l'RTP, cioè la percentuale teorica di reintegro nel lungo periodo, e spesso un'indicazione di volatilità. Sono dati statistici: non prevedono l'esito della singola sessione, determinato da un generatore di numeri casuali certificato.",
        "La modalità demo, dove disponibile, usa lo stesso software della versione reale con saldo virtuale. È lo strumento più adatto per capire regole e meccaniche senza impiegare denaro.",
      ],
    },
    {
      id: "errori",
      label: "Errori frequenti",
      h2: "Gli errori più frequenti di chi inizia",
      paragraphs: [
        "L'errore più comune è tentare di recuperare una perdita aumentando le puntate: statisticamente non riduce la perdita attesa e accelera l'esaurimento del budget. Il secondo è aderire a offerte senza aver letto le condizioni nei termini del concessionario.",
        "Il terzo è giocare senza limiti di tempo. Fissare la durata della sessione, oltre all'importo, aiuta a mantenere il gioco su un piano ricreativo. In caso di difficoltà è disponibile il Telefono Verde ISS 800 558822 e l'autoesclusione tramite RUA.",
      ],
    },
  ],
  faqs: [
    {
      q: "Da dove conviene iniziare per capire come funziona?",
      a: "Dalla modalità demo dei giochi, che usa lo stesso software della versione reale con saldo virtuale, e dalla lettura della scheda informativa con RTP e regole.",
    },
    {
      q: "Quanto tempo serve per verificare il conto?",
      a: "Con SPID o CIE la verifica è spesso immediata; con il caricamento manuale dei documenti i tempi dichiarati dai concessionari vanno in genere da poche ore ad alcuni giorni lavorativi.",
    },
    {
      q: "Posso impostare un limite di spesa?",
      a: "Sì. Tutti i concessionari ADM devono offrire limiti di deposito e strumenti di autolimitazione modificabili dall'area personale, oltre all'autoesclusione tramite RUA.",
    },
    {
      q: "Esiste un gioco più conveniente per chi inizia?",
      a: "No, nessun gioco offre un vantaggio al giocatore nel lungo periodo. Cambiano RTP e volatilità, ma il margine resta a favore del banco in tutti i casi.",
    },
  ],
};

export const Route = createFileRoute("/casino-online-principianti")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
