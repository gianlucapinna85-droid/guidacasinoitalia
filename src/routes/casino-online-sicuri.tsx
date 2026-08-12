import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/casino-online-sicuri",
  title: "Casinò online sicuri ADM 2026: i siti legali",
  h1: "Casinò online sicuri: come riconoscere un sito legale con concessione ADM",
  description:
    "Guida pratica per riconoscere i casinò online sicuri in Italia: verifica della concessione ADM (ex AAMS), certificazioni, protezione dei dati, prelievi garantiti e siti da evitare. Solo +18.",
  keywords:
    "casino online sicuri, casino aams sicuri, casino adm sicuri, siti casino legali italia, come verificare concessione adm, casino non aams rischi",
  breadcrumb: "Casinò online sicuri",
  sections: [
    {
      id: "verifica",
      label: "Verificare la concessione",
      h2: "Come verificare la concessione ADM in un minuto",
      paragraphs: [
        "Ogni casinò legale in Italia espone in fondo alla home page il logo ADM e il numero di concessione. Quel numero va confrontato con l'elenco ufficiale dei concessionari pubblicato sul sito dell'Agenzia delle Dogane e dei Monopoli, adm.gov.it: è l'unico controllo che conta davvero.",
        "Se il numero non compare nell'elenco, o se il sito è raggiungibile con un dominio diverso da .it senza riferimenti alla concessione, l'operatore non è autorizzato a offrire giochi con vincite in denaro ai residenti in Italia.",
      ],
      bullets: [
        "Numero di concessione ADM visibile nel footer del sito",
        "Logo ADM e simbolo del divieto ai minori di 18 anni",
        "Riferimento al Registro Unico degli Autoesclusi (RUA)",
        "Termini e Condizioni e probabilità di vincita pubblicati e consultabili",
        "Connessione cifrata HTTPS e informativa privacy conforme al GDPR",
      ],
    },
    {
      id: "tutele",
      label: "Le tutele previste",
      h2: "Quali tutele garantisce un casinò con concessione ADM",
      paragraphs: [
        "Su un concessionario ADM i giochi sono collegati al totalizzatore nazionale e i generatori di numeri casuali sono certificati da laboratori indipendenti. L'identità del titolare del conto è verificata per obbligo antiriciclaggio, i limiti di deposito sono impostabili dall'utente e l'autoesclusione è gestita centralmente tramite il RUA.",
        "Queste tutele non esistono sui siti privi di concessione: in caso di controversia non c'è autorità italiana a cui rivolgersi e i fondi depositati non sono protetti.",
      ],
    },
    {
      id: "segnali",
      label: "Segnali d'allarme",
      h2: "Segnali d'allarme di un sito non sicuro",
      paragraphs: [
        "Diffida dei siti che promettono vincite garantite, che chiedono depositi in criptovalute non tracciabili, che non pubblicano i Termini e Condizioni in italiano o che rendono impossibile impostare limiti di gioco. Un altro segnale tipico è l'assenza di qualsiasi riferimento al divieto per i minori di 18 anni.",
      ],
    },
  ],
  faqs: [
    {
      q: "AAMS e ADM sono la stessa cosa?",
      a: "Sì. AAMS (Amministrazione Autonoma dei Monopoli di Stato) è la vecchia denominazione dell'attuale ADM, Agenzia delle Dogane e dei Monopoli. Le concessioni sono le stesse e molti operatori usano ancora il termine AAMS.",
    },
    {
      q: "I casinò non AAMS sono illegali in Italia?",
      a: "Un operatore privo di concessione ADM non è autorizzato a offrire giochi con vincite in denaro in Italia e i suoi domini sono soggetti a inibizione. Non offre alcuna tutela riconosciuta dall'ordinamento italiano.",
    },
    {
      q: "Il casinò può rifiutare un prelievo?",
      a: "Un concessionario ADM può sospendere un prelievo solo per motivi previsti dai Termini e Condizioni o dalla normativa antiriciclaggio, ad esempio in mancanza di documenti validi o in caso di intestazione difforme del metodo di pagamento.",
    },
    {
      q: "I miei dati sono protetti?",
      a: "I concessionari ADM trattano i dati secondo il GDPR e la normativa italiana e sono tenuti a conservare la documentazione antiriciclaggio. L'informativa privacy dell'operatore indica finalità e tempi di conservazione.",
    },
  ],
};

export const Route = createFileRoute("/casino-online-sicuri")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
