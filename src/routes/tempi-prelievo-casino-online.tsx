import { createFileRoute } from "@tanstack/react-router";
import { GuideArticle, guideHead, type GuideConfig } from "@/components/guide-article";

const CFG: GuideConfig = {
  path: "/tempi-prelievo-casino-online",
  title: "Tempi di prelievo casinò online ADM 2026",
  h1: "Quanto tempo ci vuole per prelevare da un casinò online ADM",
  description:
    "Tempi di prelievo dichiarati dai principali concessionari ADM: quanto ci mette Snai, Goldbet, Sisal e gli altri, differenze per metodo e cosa fare se il pagamento tarda. +18.",
  keywords:
    "tempi prelievo casino online, prelievo snai quanto tempo, goldbet quanto tempo prelievo, quanto ci mette un prelievo casino, tempi prelievo adm",
  breadcrumb: "Tempi di prelievo",
  sections: [
    {
      id: "come-si-contano",
      label: "Come si contano",
      h2: "I tempi dichiarati non sono i tempi percepiti",
      paragraphs: [
        "Ogni concessionario indica nella pagina pagamenti un tempo di elaborazione: è la finestra entro cui approva internamente la richiesta. A quel numero va sempre sommato il tempo del circuito scelto, che l'operatore non controlla. Per questo lo stesso casinò può risultare rapidissimo con un portafoglio elettronico e lento con bonifico.",
        "I tempi si contano in giorni lavorativi: una richiesta inviata venerdì sera viene tipicamente istruita il lunedì. È la ragione più banale — e più frequente — dietro un prelievo che sembra bloccato.",
      ],
      bullets: [
        "Elaborazione interna: da poche ore a 3 giorni lavorativi",
        "Portafogli elettronici: accredito da immediato a poche ore",
        "Carte: 1-3 giorni lavorativi dopo l'approvazione",
        "Bonifico SEPA: 1-3 giorni lavorativi secondo la banca ricevente",
      ],
    },
    {
      id: "operatori",
      label: "Per operatore",
      h2: "Quanto tempo dichiarano i principali operatori",
      paragraphs: [
        "Le schede operatore di questo sito riportano, per ciascun concessionario, il tempo di elaborazione dichiarato, la soglia minima di prelievo e i metodi ammessi. Le domande più frequenti — quanto tempo ci mette un prelievo Snai, quanto Goldbet, quanto Sisal — hanno tutte la stessa risposta di fondo: la finestra dichiarata riguarda l'approvazione, mentre l'accredito dipende dal metodo.",
        "Nella pratica, gli operatori storici con rete fisica tendono a dichiarare finestre di 24-72 ore lavorative, mentre l'accredito su portafoglio elettronico arriva spesso lo stesso giorno dell'approvazione. Le cifre esatte vanno sempre lette nella pagina pagamenti dell'operatore, perché possono cambiare senza preavviso.",
      ],
      bullets: [
        "Verifica il tempo dichiarato nella sezione pagamenti dell'operatore",
        "Controlla la soglia minima: sotto quella cifra la richiesta non parte",
        "Guarda se il metodo scelto è tra quelli abilitati al prelievo",
        "Considera i giorni lavorativi, non quelli di calendario",
      ],
    },
    {
      id: "verifica-documenti",
      label: "Verifica documenti",
      h2: "L'iter documentale è la variabile che pesa di più",
      paragraphs: [
        "Un conto non verificato azzera qualsiasi promessa di rapidità: finché l'identità non è convalidata nessun concessionario ADM può liquidare un prelievo. La verifica richiede un documento in corso di validità e, in molti casi, il codice fiscale; con SPID o CIE la convalida è in genere immediata, con l'invio manuale dei documenti servono di norma 24-48 ore.",
        "Conviene completare l'iter subito dopo la registrazione e non al primo prelievo: è la singola azione che riduce di più il tempo di attesa complessivo.",
      ],
    },
    {
      id: "cosa-fare",
      label: "Se tarda",
      h2: "Cosa fare se il prelievo non arriva",
      paragraphs: [
        "Prima di contattare l'assistenza vanno controllati quattro punti nel conto gioco: stato della verifica documenti, presenza di bonus attivi non completati, intestazione del metodo di pagamento e rispetto della soglia minima. Nella maggior parte dei casi il blocco dipende da uno di questi.",
        "Se la richiesta risulta approvata ma l'importo non è accreditato oltre i tempi dichiarati, si scrive all'assistenza indicando data, importo e metodo. Se la risposta non risolve, il giocatore può presentare reclamo formale all'operatore e, in seconda istanza, segnalare la questione ad ADM.",
      ],
    },
  ],
  faqs: [
    {
      q: "Prelievo Snai: quanto tempo ci vuole?",
      a: "Snai dichiara una finestra di elaborazione in giorni lavorativi, cui va sommato il tempo del metodo scelto: con portafoglio elettronico l'accredito è in genere lo stesso giorno dell'approvazione, con bonifico servono 1-3 giorni lavorativi. Il dato aggiornato è nella pagina pagamenti dell'operatore.",
    },
    {
      q: "Quanto tempo ci vuole per prelevare da Goldbet?",
      a: "Anche in questo caso il tempo dichiarato riguarda l'approvazione interna. L'accredito effettivo dipende dal metodo e dal fatto che i documenti siano già stati convalidati.",
    },
    {
      q: "Perché il prelievo è ancora in elaborazione dopo giorni?",
      a: "Di solito perché i documenti non sono convalidati, il metodo non è intestato al titolare, un bonus è ancora attivo oppure la richiesta è caduta nel fine settimana.",
    },
    {
      q: "Si può annullare un prelievo in corso?",
      a: "Molti operatori consentono di revocare la richiesta finché è in elaborazione, riportando l'importo sul saldo di gioco. È una funzione utile all'operatore, non al giocatore: usarla vanifica l'attesa già trascorsa.",
    },
    {
      q: "I tempi cambiano se prelevo un importo alto?",
      a: "Sopra determinate soglie possono scattare controlli antiriciclaggio aggiuntivi, che allungano l'istruttoria. È una procedura prevista dalla normativa, non una scelta discrezionale dell'operatore.",
    },
  ],
};

export const Route = createFileRoute("/tempi-prelievo-casino-online")({
  head: () => guideHead(CFG),
  component: () => <GuideArticle cfg={CFG} />,
});
