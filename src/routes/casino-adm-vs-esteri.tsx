import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/casino-adm-vs-esteri",
  title: "Casinò ADM e casinò esteri: differenze reali | Guida 2026",
  h1: "Differenza tra casinò ADM e casinò esteri: cosa cambia davvero",
  description:
    "Concessione, tutele, tassazione, pagamenti e trattamento dei dati: le differenze concrete tra un casinò con concessione ADM e un sito con licenza estera. Solo +18.",
  keywords:
    "casino adm o esteri, differenza casino adm esteri, casino con licenza estera, casino non aams, casino legali italia, concessione adm",
  breadcrumb: "Casinò ADM e casinò esteri",
  sections: [
    {
      id: "quadro",
      label: "Quadro normativo",
      h2: "Il quadro normativo italiano",
      paragraphs: [
        "In Italia i giochi con vincite in denaro a distanza possono essere offerti solo da soggetti titolari di concessione ADM. La concessione impone requisiti patrimoniali, controlli tecnici sui software, obblighi antiriciclaggio e l'adesione agli strumenti pubblici di tutela del giocatore.",
        "Un sito con licenza rilasciata da un'autorità straniera può essere perfettamente legittimo nel proprio ordinamento, ma non è autorizzato a raccogliere gioco in Italia: per l'utente italiano ciò significa assenza delle tutele nazionali.",
      ],
    },
    {
      id: "tutele",
      label: "Tutele per l'utente",
      h2: "Tutele, reclami e autoesclusione",
      paragraphs: [
        "Sui concessionari ADM il giocatore dispone di un canale di reclamo riconosciuto, di limiti di deposito obbligatori e dell'autoesclusione tramite Registro Unico degli Autoesclusi, valida contemporaneamente su tutti gli operatori italiani.",
        "Con un sito estero l'autoesclusione, quando esiste, vale solo su quel marchio o su quel network, e le controversie si trattano davanti a un'autorità straniera, spesso in lingua diversa dall'italiano.",
      ],
      bullets: [
        "RUA: unico registro valido su tutti i concessionari italiani",
        "Reclami gestiti secondo le regole nazionali",
        "Conto di gioco intestato e verificato per legge",
        "Dati trattati secondo GDPR e normativa italiana",
      ],
    },
    {
      id: "fisco",
      label: "Fisco e vincite",
      h2: "Tassazione e trattamento delle vincite",
      paragraphs: [
        "Sui concessionari ADM l'imposta è assolta a monte dall'operatore: le vincite accreditate sul conto di gioco non vanno dichiarate dal giocatore. È una semplificazione che deriva direttamente dal regime concessorio.",
        "Le somme provenienti da operatori privi di concessione non godono dello stesso trattamento e possono comportare obblighi dichiarativi in capo alla persona fisica, oltre a difficoltà nella tracciabilità dei movimenti bancari.",
      ],
    },
    {
      id: "pagamenti",
      label: "Pagamenti",
      h2: "Pagamenti, prelievi e continuità del servizio",
      paragraphs: [
        "I concessionari italiani lavorano con circuiti e istituti che operano regolarmente in Italia: carte, bonifico, portafogli elettronici e soluzioni come Postepay o PayPal, con tempi dichiarati e assistenza in italiano.",
        "Sui siti privi di concessione i pagamenti possono essere rifiutati dagli istituti italiani e l'accesso al dominio può essere inibito, con conseguenze dirette sul saldo residuo.",
      ],
    },
  ],
  faqs: [
    {
      q: "I casinò esteri sono illegali?",
      a: "Possono essere legittimi nel Paese che li licenzia, ma non sono autorizzati a offrire gioco in Italia. Per l'utente italiano decadono le tutele previste dall'ordinamento nazionale.",
    },
    {
      q: "Le vincite su un concessionario ADM vanno dichiarate?",
      a: "No. L'imposta è già assolta dall'operatore concessionario, quindi le vincite accreditate sul conto di gioco non vanno indicate nella dichiarazione dei redditi.",
    },
    {
      q: "L'autoesclusione vale anche sui siti esteri?",
      a: "No. Il Registro Unico degli Autoesclusi ha effetto solo sui concessionari italiani; un sito estero non è tenuto a consultarlo.",
    },
    {
      q: "Come verifico che un sito abbia la concessione ADM?",
      a: "Confrontando il numero di concessione riportato nel footer del sito con l'elenco ufficiale pubblicato su adm.gov.it.",
    },
  ],
};

export const Route = createFileRoute("/casino-adm-vs-esteri")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
