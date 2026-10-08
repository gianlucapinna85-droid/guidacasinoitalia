import { createFileRoute } from "@tanstack/react-router";
import {
  GuideArticle,
  guideHead,
  SeoTable,
  InternalCtaLinks,
  type GuideConfig,
} from "@/components/guide-article";
import { OperatorCardsGrid } from "@/components/operator-cards";

const CFG: GuideConfig = {
  path: "/prelievo-lottomatica-postepay",
  title: "Prelievo Lottomatica su Postepay: quanto tempo ci vuole (2026)",
  h1: "Prelievo Lottomatica su Postepay: tempi, requisiti e motivi dei ritardi",
  description:
    "Quanto ci mette un prelievo da Lottomatica su Postepay? Le due fasi del pagamento, i requisiti da rispettare, gli errori che lo bloccano e le alternative più rapide. +18.",
  keywords:
    "prelievo lottomatica postepay, quanto tempo prelievo lottomatica, lottomatica postepay evolution, prelievo lottomatica tempi, lottomatica prelievo non arriva",
  eyebrow: "Pagamenti",
  breadcrumb: "Prelievo Lottomatica Postepay",
  sections: [
    {
      id: "risposta-rapida",
      label: "Risposta rapida",
      h2: "In breve: quanto tempo ci vuole",
      paragraphs: [
        "Un prelievo su Postepay passa da due fasi: prima Lottomatica approva la richiesta, poi il circuito della carta accredita l'importo. Il tempo totale è la somma delle due. In condizioni normali, con conto già verificato, l'accredito su carta richiede in genere da poche ore a qualche giorno lavorativo dopo l'approvazione.",
        "I tempi ufficiali aggiornati sono quelli indicati nella sezione pagamenti di Lottomatica: vanno sempre controllati lì, perché possono cambiare.",
      ],
      bullets: [
        "Fase 1 — approvazione interna dell'operatore (giorni lavorativi)",
        "Fase 2 — accredito sul circuito della carta",
        "Conto non verificato = prelievo fermo finché la verifica non si chiude",
        "Richieste nel weekend vengono spesso istruite il primo giorno lavorativo",
      ],
    },
    {
      id: "requisiti",
      label: "Requisiti",
      h2: "Cosa serve perché il prelievo parta",
      paragraphs: [
        "Prima di chiedere un prelievo conviene controllare quattro condizioni. Se una manca, la richiesta resta in attesa o viene respinta.",
      ],
      bullets: [
        "Identità convalidata (documento o SPID/CIE)",
        "Postepay intestata allo stesso titolare del conto gioco",
        "Importo pari o superiore alla soglia minima indicata dall'operatore",
        "Nessun bonus attivo con requisiti di puntata non completati",
      ],
    },
    {
      id: "ritardi",
      label: "Ritardi",
      h2: "Perché il prelievo non arriva: le cause più comuni",
      paragraphs: [
        "Quando il denaro tarda, la causa è quasi sempre in uno di questi punti: documenti in revisione, carta intestata a un'altra persona (non ammessa sui siti ADM), richiesta inviata nel fine settimana, bonus ancora attivo o controlli aggiuntivi sopra determinate soglie.",
        "Se la richiesta risulta approvata ma l'importo non compare oltre i tempi dichiarati, controlla i movimenti della carta nell'app Postepay e poi scrivi all'assistenza Lottomatica indicando data, importo e ultime cifre della carta.",
      ],
    },
    {
      id: "alternative",
      label: "Alternative",
      h2: "Metodi alternativi alla Postepay",
      paragraphs: [
        "Se la rapidità è la priorità, i portafogli elettronici come PayPal sono in genere il metodo con accredito più veloce dopo l'approvazione. Il bonifico è utile per importi elevati ma dipende dai tempi della banca, salvo dove è disponibile il bonifico istantaneo.",
        "Ricorda che sui siti ADM si preleva di norma con un metodo già usato per depositare e intestato a te.",
      ],
    },
  ],
  faqs: [
    {
      q: "Quanto ci mette Lottomatica a pagare su Postepay?",
      a: "Il tempo totale è dato dall'approvazione interna di Lottomatica più l'accredito sul circuito della carta. Con conto verificato si va in genere da poche ore a qualche giorno lavorativo. Il dato ufficiale è nella sezione pagamenti dell'operatore.",
    },
    {
      q: "Posso prelevare su una Postepay intestata a un familiare?",
      a: "No. Sui siti con concessione ADM il metodo di pagamento deve essere intestato al titolare del conto gioco.",
    },
    {
      q: "Il prelievo è approvato ma non vedo i soldi: cosa faccio?",
      a: "Controlla i movimenti nell'app Postepay, attendi il tempo indicato per il circuito e poi contatta l'assistenza con data, importo e ultime cifre della carta.",
    },
    {
      q: "Si può prelevare di sabato o domenica?",
      a: "La richiesta si può inviare, ma l'approvazione manuale avviene spesso nei giorni lavorativi. Per questo una richiesta del venerdì sera può essere evasa il lunedì.",
    },
    {
      q: "C'è un importo minimo di prelievo?",
      a: "Sì, ogni operatore fissa una soglia minima per metodo. Sotto quella cifra la richiesta non può essere inviata: verifica il valore aggiornato nella pagina pagamenti.",
    },
  ],
};

export const Route = createFileRoute("/prelievo-lottomatica-postepay")({
  head: () => guideHead(CFG),
  component: () => (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption="Metodi di prelievo a confronto (indicativo)"
        headers={["Metodo", "Accredito dopo l'approvazione", "Note"]}
        rows={[
          ["Portafoglio elettronico (es. PayPal)", "In genere il più rapido", "Deve essere intestato al titolare"],
          ["Carta prepagata (es. Postepay)", "Da poche ore a qualche giorno lavorativo", "Dipende dal circuito"],
          ["Bonifico istantaneo", "Rapido, se supportato", "Non offerto da tutti gli operatori"],
          ["Bonifico ordinario", "1-3 giorni lavorativi", "Adatto a importi elevati"],
        ]}
      />
      <h2 className="mt-10 font-display text-2xl font-semibold">Casinò ADM da confrontare</h2>
      <p className="mt-2 text-muted-foreground">
        Confronta altri operatori con concessione ADM e metodi di pagamento diversi. Gioca solo se maggiorenne e con
        moderazione.
      </p>
      <div className="mt-6">
        <OperatorCardsGrid limit={3} />
      </div>
      <InternalCtaLinks />
    </GuideArticle>
  ),
});
