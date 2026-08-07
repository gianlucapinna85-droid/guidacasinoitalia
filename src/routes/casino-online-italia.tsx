import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/casino-online-italia",
  title: "Casinò online in Italia 2026: come funzionano, regole ADM e tutele",
  h1: "Casinò online in Italia: come funzionano, normativa ADM e tutele del giocatore",
  description:
    "Guida generale ai casinò online in Italia nel 2026: concessione ADM, quadro normativo, giochi disponibili, pagamenti, tassazione delle vincite e strumenti di tutela. Contenuto informativo, solo +18.",
  keywords:
    "casinò online, casinò online italia, casinò adm, casinò aams, casino online 2026, concessione adm, casinò legali italia, gioco online normativa",
  breadcrumb: "Casinò online in Italia",
  sections: [
    {
      id: "come-funzionano",
      label: "Come funzionano",
      h2: "Come funziona un casinò online in Italia",
      paragraphs: [
        "Un casinò online può operare legalmente in Italia solo se titolare di una concessione rilasciata dall'Agenzia delle Dogane e dei Monopoli (ADM, ex AAMS). La concessione impone requisiti su capitale, server, tracciabilità delle giocate, certificazione dei giochi e strumenti di tutela del giocatore.",
        "Il conto di gioco è nominativo e intestato a una sola persona fisica maggiorenne. Depositi e prelievi devono avvenire con strumenti intestati al titolare del conto, in applicazione della normativa antiriciclaggio.",
      ],
      bullets: [
        "Numero di concessione ADM pubblicato in fondo al sito dell'operatore",
        "Elenco ufficiale dei concessionari consultabile su adm.gov.it",
        "Conto di gioco nominativo, un solo conto per persona per operatore",
        "Verifica dell'identità obbligatoria prima del primo prelievo",
      ],
    },
    {
      id: "giochi",
      label: "Giochi disponibili",
      h2: "Quali giochi trovi su un concessionario ADM",
      paragraphs: [
        "L'offerta tipica comprende slot con RNG certificato, casinò live con croupier reali in streaming (roulette, blackjack, baccarat, game show), giochi da tavolo digitali, poker e bingo. Ogni titolo deve essere approvato e certificato prima della pubblicazione.",
        "Per ogni gioco il concessionario è tenuto a rendere consultabile la scheda informativa con RTP dichiarato e regole. È l'unica fonte affidabile: lo stesso titolo può essere distribuito con configurazioni di RTP diverse.",
      ],
    },
    {
      id: "pagamenti-tasse",
      label: "Pagamenti e tassazione",
      h2: "Pagamenti, prelievi e tassazione delle vincite",
      paragraphs: [
        "I metodi più diffusi sono carte di debito e credito, PayPal, Postepay, bonifico bancario e ricariche in ricevitoria. I tempi di prelievo dipendono dallo strumento scelto e dal completamento della verifica documentale, che spesso è la vera causa dei ritardi al primo incasso.",
        "Sulle vincite ottenute presso un concessionario ADM l'imposta è già assolta alla fonte dall'operatore: il giocatore non deve dichiararle. Le vincite ottenute su siti privi di concessione non godono di questa tutela né di alcuna protezione del saldo.",
      ],
      bullets: [
        "Strumenti di pagamento intestati al titolare del conto",
        "Verifica documentale completata prima del primo prelievo",
        "Imposta assolta alla fonte sui concessionari ADM",
      ],
    },
    {
      id: "tutele-ia",
      label: "Tutele e ruolo dell'IA",
      h2: "Tutele del giocatore e ruolo dell'intelligenza artificiale",
      paragraphs: [
        "Ogni concessionario deve offrire limiti di deposito, limiti di spesa, autolimitazione temporanea e accesso al Registro Unico degli Autoesclusi (RUA) gestito da ADM, gratuito e valido su tutti gli operatori italiani.",
        "Dal punto di vista tecnologico, i sistemi di intelligenza artificiale sono impiegati per identificare pattern di gioco a rischio, prevenire frodi e velocizzare la verifica dell'identità. Non incidono in alcun modo sull'esito dei giochi, che resta determinato da generatori di numeri casuali certificati.",
        "Il Decreto Dignità (D.L. 87/2018, art. 9) vieta la pubblicità del gioco con vincita in denaro: i contenuti di questo sito sono informativi e non promozionali.",
      ],
      bullets: [
        "Limiti di deposito e di spesa impostabili in qualsiasi momento",
        "Autoesclusione tramite RUA, gratuita e valida su tutti i concessionari",
        "Telefono Verde ISS 800 558822 per supporto gratuito e anonimo",
      ],
    },
  ],
  faqs: [
    {
      q: "Come capisco se un casinò online è legale in Italia?",
      a: "Il sito deve riportare il numero di concessione ADM, verificabile nell'elenco pubblico dei concessionari su adm.gov.it. In assenza di concessione il sito non è autorizzato a operare in Italia.",
    },
    {
      q: "Le vincite dei casinò online sono tassate?",
      a: "Sui concessionari ADM l'imposta è assolta alla fonte dall'operatore, quindi il giocatore non deve dichiarare le vincite.",
    },
    {
      q: "Posso avere più conti di gioco?",
      a: "Un solo conto per persona per ogni concessionario. Il conto è nominativo e non cedibile.",
    },
    {
      q: "L'intelligenza artificiale influenza i risultati dei giochi?",
      a: "No. I risultati derivano da RNG certificati. L'IA viene impiegata per tutela del giocatore, antifrode e verifica dell'identità.",
    },
  ],
};

export const Route = createFileRoute("/casino-online-italia")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
