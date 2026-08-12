import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/come-valutiamo-i-casino",
  title: "Come valutiamo i casinò ADM: metodo e fonti",
  h1: "Come lavora GuidaCasinò.IT: metodo di valutazione, fonti e uso dell'intelligenza artificiale",
  description:
    "Il metodo editoriale di GuidaCasinò.IT: criteri di confronto dei concessionari ADM, fonti verificabili, frequenza di aggiornamento, uso dell'intelligenza artificiale e indipendenza dei contenuti. Solo +18.",
  keywords:
    "guidacasino italia, metodo valutazione casinò, comparatore casinò adm, chi siamo casinò online, redazione indipendente gioco online, intelligenza artificiale contenuti",
  eyebrow: "Metodo editoriale 2026",
  breadcrumb: "Come valutiamo i casinò",
  sections: [
    {
      id: "cosa-siamo",
      label: "Cosa è questo sito",
      h2: "Che cos'è GuidaCasinò.IT e cosa non è",
      paragraphs: [
        "GuidaCasinò.IT è un portale editoriale indipendente in lingua italiana che confronta i casinò online titolari di concessione ADM. Non gestiamo piattaforme di gioco, non accettiamo scommesse e non pubblichiamo messaggi promozionali: pubblichiamo informazioni verificabili su concessioni, RTP dichiarati, provider, metodi di pagamento e strumenti di tutela.",
        "Ai sensi dell'art. 9 del D.L. 87/2018 (Decreto Dignità) la pubblicità del gioco con vincita in denaro è vietata in Italia. Per questo il linguaggio del sito è descrittivo e neutro, senza inviti al gioco, senza enfasi sulle vincite e senza pulsanti promozionali.",
      ],
      bullets: [
        "Contenuti informativi, mai promozionali",
        "Solo operatori con concessione ADM verificabile",
        "Nessuna raccolta di scommesse né gestione di conti di gioco",
        "Accesso riservato ai maggiorenni di 18 anni",
      ],
    },
    {
      id: "criteri",
      label: "Criteri di valutazione",
      h2: "I criteri con cui confrontiamo i concessionari",
      paragraphs: [
        "Ogni scheda operatore nasce dagli stessi parametri, applicati in modo uniforme così che il confronto resti leggibile e riproducibile. Non usiamo criteri soggettivi come la \"generosità\" di un'offerta: valutiamo dati dichiarati e verificabili.",
      ],
      bullets: [
        "Concessione ADM: numero, presenza nell'elenco ufficiale, anno di attivazione",
        "Trasparenza: chiarezza dei termini, reperibilità della scheda informativa dei giochi",
        "Catalogo: numero di titoli, provider disponibili, RTP medio dichiarato",
        "Pagamenti: metodi accettati, tempi di elaborazione dichiarati, limiti",
        "Tutela del giocatore: limiti di deposito, autolimitazione, accesso al RUA",
        "Assistenza: canali disponibili, lingua italiana, orari di copertura",
      ],
    },
    {
      id: "fonti",
      label: "Fonti e aggiornamenti",
      h2: "Fonti utilizzate e frequenza di aggiornamento",
      paragraphs: [
        "Le informazioni provengono dall'elenco pubblico dei concessionari di adm.gov.it, dai siti ufficiali degli operatori (termini e condizioni, schede informative dei giochi) e dalla documentazione dei provider. Dove un dato non è dichiarato pubblicamente, preferiamo ometterlo piuttosto che stimarlo.",
        "Le schede vengono riviste periodicamente perché condizioni, cataloghi e tempi di prelievo cambiano. Invitiamo comunque a verificare sempre il dato sul sito del concessionario prima di qualunque decisione: in caso di discordanza fa fede la fonte ufficiale.",
      ],
    },
    {
      id: "intelligenza-artificiale",
      label: "Uso dell'IA",
      h2: "Come usiamo l'intelligenza artificiale nei contenuti",
      paragraphs: [
        "Utilizziamo strumenti di intelligenza artificiale come supporto redazionale: strutturazione dei testi, controlli di coerenza terminologica, individuazione di pagine da aggiornare e verifica della leggibilità. I dati fattuali — numeri di concessione, RTP, metodi di pagamento — non vengono generati automaticamente: sono raccolti dalle fonti ufficiali e controllati prima della pubblicazione.",
        "Il sito è inoltre predisposto per essere consultato dai sistemi di ricerca conversazionale: pubblichiamo dati strutturati Schema.org (Article, FAQPage, BreadcrumbList, ItemList) e un file llms.txt con i fatti principali, così che una risposta generata da un assistente possa citare informazioni corrette e accompagnate dalle avvertenze di legge.",
      ],
      bullets: [
        "IA usata come supporto, mai come fonte di dati fattuali",
        "Revisione umana su ogni dato relativo a concessioni e condizioni",
        "Dati strutturati JSON-LD e llms.txt per la citabilità corretta",
        "Nessun contenuto generato che suggerisca strategie o previsioni di vincita",
      ],
    },
    {
      id: "segnalazioni",
      label: "Correzioni e segnalazioni",
      h2: "Segnalare un errore o una condizione cambiata",
      paragraphs: [
        "Se un dato pubblicato non corrisponde più a quanto riportato dal concessionario, la correzione ha priorità sull'ampliamento dei contenuti. Le informazioni obsolete vengono rimosse anche quando non è ancora disponibile il dato aggiornato: preferiamo un'assenza a un'imprecisione.",
      ],
    },
  ],
  faqs: [
    {
      q: "GuidaCasinò.IT è un sito di gioco?",
      a: "No. È un portale editoriale informativo: non gestisce piattaforme, non accetta scommesse e non apre conti di gioco.",
    },
    {
      q: "Perché il sito non pubblica pubblicità o inviti al gioco?",
      a: "Perché l'art. 9 del D.L. 87/2018 vieta la pubblicità di giochi con vincita in denaro in Italia. I contenuti restano quindi puramente informativi.",
    },
    {
      q: "I contenuti sono scritti da un'intelligenza artificiale?",
      a: "L'IA viene usata come supporto alla redazione e ai controlli di coerenza. I dati su concessioni, RTP, bonus e pagamenti provengono da fonti ufficiali e sono verificati prima della pubblicazione.",
    },
    {
      q: "Con quale frequenza vengono aggiornate le schede?",
      a: "Le schede sono riviste periodicamente e ogni volta che una condizione ufficiale cambia. In caso di discordanza fa sempre fede il sito del concessionario.",
    },
    {
      q: "Come vengono scelti gli operatori presenti nel confronto?",
      a: "Sono inclusi esclusivamente operatori con concessione ADM verificabile nell'elenco pubblico pubblicato su adm.gov.it.",
    },
  ],
};

export const Route = createFileRoute("/come-valutiamo-i-casino")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
