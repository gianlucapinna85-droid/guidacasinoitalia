import type { Operator } from "./operators";

export type OperatorReview = {
  summary: string;
  strengths: string[];
  attention: string[];
  suitability: string;
};

/**
 * Produce a neutral, informative review from the operator's public data.
 * Deliberately non-promotional: no scores, no "best/top", no incentives.
 * Conforme a D.L. 87/2018 (art. 9) — solo informazione oggettiva.
 */
export function buildReview(op: Operator): OperatorReview {
  const rtp = parseFloat(op.rtpAverage.replace(",", "."));
  const age = new Date().getFullYear() - op.founded;
  const rtpNote =
    rtp >= 96.3
      ? "L'RTP medio dichiarato risulta leggermente superiore alla media di categoria (96%)."
      : rtp >= 96
        ? "L'RTP medio dichiarato è in linea con la media di categoria (96%)."
        : "L'RTP medio dichiarato è leggermente inferiore alla media di categoria (96%); verifica il dato aggiornato sul sito ufficiale.";

  const ageNote =
    age >= 12
      ? `Operatore con presenza consolidata sul mercato italiano regolamentato (oltre ${age} anni di concessione).`
      : age >= 5
        ? `Operatore con esperienza pluriennale sul mercato italiano regolamentato (${age} anni di concessione).`
        : `Operatore relativamente recente sul mercato italiano regolamentato (${age} anni di concessione).`;

  const summary = `${op.name} figura nell'elenco pubblico dei concessionari dell'Agenzia delle Dogane e dei Monopoli (${op.concessionN}). ${ageNote} Il catalogo comprende oltre ${op.games} titoli certificati. ${rtpNote}`;

  const strengths = [
    `Concessione ADM in corso di validità (${op.concessionN}).`,
    `${op.paymentMethods.length} metodi di pagamento tracciabili: ${op.paymentMethods.join(", ")}.`,
    ...op.highlights,
  ];

  const attention = [
    "I dati riportati (RTP, numero di titoli, metodi di pagamento) sono a titolo illustrativo: verifica sempre i valori aggiornati sul sito ufficiale del concessionario.",
    "Consulta l'informativa privacy, le condizioni contrattuali e le probabilità di vincita prima di aprire un conto di gioco.",
    "Assicurati che gli strumenti di autolimitazione (limiti di deposito, tempo, autoesclusione tramite RUA) siano configurati prima di iniziare.",
    rtp < 96
      ? "RTP medio dichiarato inferiore alla media di categoria: valuta con attenzione il dato aggiornato."
      : "Ricorda che l'RTP è un valore statistico teorico calcolato su un ampio numero di sessioni, non una previsione del risultato individuale.",
  ];

  const suitability = `La scheda è di natura puramente informativa e non costituisce raccomandazione all'uso di servizi di gioco con vincite in denaro. Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica. In caso di difficoltà: Telefono Verde ISS 800 558822 (anonimo e gratuito) o Registro Unico degli Autoesclusi (RUA) su adm.gov.it.`;

  return { summary, strengths, attention, suitability };
}
