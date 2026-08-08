import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/come-scegliere-casino-online-adm",
  title: "Come scegliere un casinò online ADM sicuro | Guida 2026",
  h1: "Come scegliere un casinò online ADM sicuro: criteri verificabili",
  description:
    "Quali parametri controllare prima di aprire un conto di gioco: concessione ADM, trasparenza dei pagamenti, assistenza, strumenti di autolimitazione e qualità del catalogo. Solo +18.",
  keywords:
    "come scegliere casino online, casino online sicuri italia, casino adm sicuri, migliori casino online adm, criteri scelta casino, concessione adm",
  breadcrumb: "Come scegliere un casinò ADM",
  sections: [
    {
      id: "concessione",
      label: "Concessione ADM",
      h2: "Il primo controllo: la concessione ADM",
      paragraphs: [
        "Un casinò online può operare legalmente in Italia solo con una concessione rilasciata dall'Agenzia delle Dogane e dei Monopoli. Il numero di concessione è pubblicato in fondo alla home page del sito dell'operatore, insieme al logo ADM e al richiamo al divieto per i minori di 18 anni.",
        "Il confronto va fatto con l'elenco pubblico dei concessionari disponibile su adm.gov.it: se il numero non compare o il dominio non corrisponde, il sito non è autorizzato a operare in Italia e non offre alcuna tutela in caso di controversia.",
      ],
      bullets: [
        "Numero di concessione visibile e confrontabile con l'elenco ADM",
        "Dominio .it o dominio dichiarato dal concessionario nell'elenco",
        "Presenza del logo ADM, del simbolo +18 e del richiamo al RUA",
        "Termini e condizioni redatti in italiano e datati",
      ],
    },
    {
      id: "pagamenti",
      label: "Pagamenti e verifiche",
      h2: "Trasparenza su depositi, prelievi e verifica dell'identità",
      paragraphs: [
        "Un operatore affidabile pubblica in modo chiaro i metodi di pagamento accettati, gli importi minimi, i tempi di lavorazione dei prelievi e le eventuali commissioni. La verifica dell'identità (documento e codice fiscale) è obbligatoria per legge e va completata prima del primo prelievo: non è un ostacolo, è un requisito antiriciclaggio.",
        "Prima di aprire un conto conviene leggere quale strumento consente il prelievo più rapido e se è previsto il rimborso sullo stesso metodo usato per il deposito, regola comune sui concessionari italiani.",
      ],
    },
    {
      id: "tutele",
      label: "Tutele e assistenza",
      h2: "Strumenti di tutela e qualità dell'assistenza",
      paragraphs: [
        "Tutti i concessionari devono offrire limiti di deposito, limiti di spesa, autolimitazione temporanea e accesso al Registro Unico degli Autoesclusi (RUA). La differenza fra un operatore e l'altro sta nella facilità con cui questi strumenti si trovano e si attivano dall'area personale.",
        "Sull'assistenza contano canale (chat, e-mail, telefono), orari di copertura e lingua. Un servizio in italiano con orari estesi riduce sensibilmente i tempi di risoluzione dei problemi su conto e pagamenti.",
      ],
      bullets: [
        "Limiti di deposito e di spesa modificabili in autonomia",
        "Autoesclusione tramite RUA raggiungibile in pochi passaggi",
        "Assistenza in italiano con orari dichiarati",
        "Storico movimenti e rendiconto di gioco scaricabile",
      ],
    },
    {
      id: "catalogo",
      label: "Catalogo e tecnologia",
      h2: "Catalogo giochi, provider e qualità dell'app",
      paragraphs: [
        "Il numero di titoli conta meno della qualità dei provider presenti e della possibilità di consultare RTP e regole di ogni gioco nella scheda informativa. La presenza di software house certificate è un indicatore di controlli tecnici superati.",
        "Sul mobile valuta la fluidità del sito responsive o dell'app ufficiale, la velocità di caricamento e la disponibilità delle stesse funzioni presenti su desktop, comprese quelle di autolimitazione.",
      ],
    },
  ],
  faqs: [
    {
      q: "Come capisco se un casinò online è legale in Italia?",
      a: "Verificando il numero di concessione riportato in fondo al sito e confrontandolo con l'elenco ufficiale dei concessionari pubblicato dall'Agenzia delle Dogane e dei Monopoli su adm.gov.it.",
    },
    {
      q: "Quanti conti di gioco posso aprire?",
      a: "Puoi aprire un solo conto per ciascun concessionario, intestato a te e verificato con un documento valido. L'intestazione a terzi non è consentita.",
    },
    {
      q: "Serve lo SPID per registrarsi?",
      a: "Molti concessionari consentono la registrazione con SPID o CIE, che accelera la verifica dell'identità. In alternativa si carica un documento di identità e il codice fiscale.",
    },
    {
      q: "Cosa succede se gioco su un sito senza concessione ADM?",
      a: "Non esistono tutele previste dall'ordinamento italiano su saldo, pagamenti e trattamento dei dati, e il sito può essere oscurato in qualsiasi momento su disposizione dell'autorità.",
    },
  ],
};

export const Route = createFileRoute("/come-scegliere-casino-online-adm")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
