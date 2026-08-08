import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/verificare-licenza-adm",
  title: "Come verificare una licenza ADM di un casinò | Guida 2026",
  h1: "Come verificare una licenza ADM: procedura passo per passo",
  description:
    "Dove trovare il numero di concessione, come confrontarlo con l'elenco ufficiale ADM e quali segnali indicano un sito non autorizzato in Italia. Solo +18.",
  keywords:
    "verificare licenza adm, elenco concessionari adm, numero concessione casino, controllo licenza aams, casino autorizzati italia",
  breadcrumb: "Verificare una licenza ADM",
  sections: [
    {
      id: "dove",
      label: "Dove si trova",
      h2: "Dove si trova il numero di concessione",
      paragraphs: [
        "Ogni concessionario è tenuto a esporre il numero di concessione nel footer di tutte le pagine, insieme al logo ADM, al simbolo che vieta il gioco ai minori e all'indicazione delle probabilità di vincita. Il numero è composto da alcune cifre e identifica in modo univoco il titolare dell'autorizzazione.",
        "Nel footer trovi anche la ragione sociale della società concessionaria, che spesso non coincide con il marchio commerciale: è normale, ed è proprio la ragione sociale il dato da usare nel confronto con l'elenco pubblico.",
      ],
    },
    {
      id: "confronto",
      label: "Confronto con l'elenco",
      h2: "Il confronto con l'elenco ufficiale ADM",
      paragraphs: [
        "L'Agenzia delle Dogane e dei Monopoli pubblica su adm.gov.it l'elenco dei concessionari abilitati al gioco a distanza, con i domini autorizzati. La verifica consiste nel controllare tre elementi: numero di concessione, ragione sociale e dominio del sito che stai visitando.",
        "Se anche uno solo dei tre non corrisponde, la prudenza impone di non registrarsi. Un dominio simile a quello di un marchio noto ma non presente nell'elenco è uno dei segnali più frequenti di sito clone.",
      ],
      bullets: [
        "Numero di concessione presente nell'elenco pubblico",
        "Ragione sociale identica a quella dell'elenco",
        "Dominio esattamente coincidente, senza suffissi anomali",
        "Connessione HTTPS con certificato valido",
      ],
    },
    {
      id: "segnali",
      label: "Segnali di allarme",
      h2: "Segnali che indicano un sito non autorizzato",
      paragraphs: [
        "Assenza del logo ADM, footer privo di numero di concessione, termini e condizioni solo in inglese, richiesta di pagamenti verso conti personali o in criptovaluta, promesse di vincite garantite: sono indizi convergenti di un operatore non autorizzato in Italia.",
        "Un altro segnale è l'assenza di strumenti di autolimitazione e di riferimenti al Registro Unico degli Autoesclusi, obbligatori per tutti i concessionari italiani.",
      ],
    },
    {
      id: "dopo",
      label: "Dopo la verifica",
      h2: "Cosa fare dopo la verifica",
      paragraphs: [
        "Superato il controllo, resta utile leggere la sezione dedicata al conto di gioco: modalità di verifica dell'identità, limiti impostabili, tempi dichiarati per i prelievi e canali di assistenza. Sono informazioni pubbliche e consultabili prima della registrazione.",
        "Nelle schede operatore di questo portale riportiamo, per ciascun concessionario, numero di concessione, ragione sociale e sito ufficiale, così da rendere immediato il confronto con l'elenco ADM.",
      ],
    },
  ],
  faqs: [
    {
      q: "Dove trovo l'elenco ufficiale dei casinò autorizzati?",
      a: "Sul sito dell'Agenzia delle Dogane e dei Monopoli, adm.gov.it, nella sezione dedicata al gioco a distanza, dove sono pubblicati concessionari e domini autorizzati.",
    },
    {
      q: "ADM e AAMS sono la stessa cosa?",
      a: "Sì. AAMS (Amministrazione Autonoma dei Monopoli di Stato) è la denominazione storica confluita nell'attuale Agenzia delle Dogane e dei Monopoli. Molti utenti usano ancora il vecchio acronimo.",
    },
    {
      q: "Il numero di concessione può cambiare?",
      a: "Può variare in caso di rinnovo o riassegnazione della concessione. Per questo il confronto con l'elenco pubblico va fatto sul dato aggiornato, non su fonti secondarie.",
    },
    {
      q: "Un'app dello store è automaticamente autorizzata?",
      a: "No. Anche per le app va verificato che l'editore corrisponda alla società concessionaria indicata nell'elenco ADM.",
    },
  ],
};

export const Route = createFileRoute("/verificare-licenza-adm")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
