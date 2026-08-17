import { operators, type Operator } from "@/lib/operators";

/**
 * Hub pagamenti: i metodi sono ricavati esclusivamente dai dati reali
 * dichiarati in src/lib/operators.ts (campo paymentMethods). Nessun dato inventato.
 */
export type PaymentMethod = {
  slug: string;
  /** etichette usate nei dati operatori che corrispondono a questo metodo */
  aliases: string[];
  name: string;
  short: string;
  intro: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    slug: "paypal",
    aliases: ["paypal"],
    name: "PayPal",
    short: "Portafoglio elettronico con accredito rapido e nessun dato di carta condiviso con il casinò.",
    intro:
      "PayPal è uno dei metodi più diffusi sui conti di gioco dei concessionari ADM: il deposito è immediato e il prelievo viene accreditato sul conto PayPal collegato dopo la verifica dell'identità richiesta dalla normativa italiana.",
  },
  {
    slug: "carte",
    aliases: ["carte", "carta", "visa", "mastercard"],
    name: "Carte di credito e debito",
    short: "Visa e Mastercard: metodo più comune per depositi e prelievi sul conto di gioco.",
    intro:
      "Le carte di credito e debito restano il metodo più utilizzato nei casinò con concessione ADM. Il deposito è immediato, mentre il prelievo segue i tempi di rimborso del circuito bancario.",
  },
  {
    slug: "postepay",
    aliases: ["postepay"],
    name: "PostePay",
    short: "Carta prepagata Poste Italiane, molto usata in Italia per il controllo del budget.",
    intro:
      "PostePay è una prepagata: consente di separare il budget dedicato al gioco dal conto corrente principale, coerentemente con gli strumenti di autolimitazione previsti dai concessionari ADM.",
  },
  {
    slug: "skrill",
    aliases: ["skrill"],
    name: "Skrill",
    short: "E-wallet internazionale accettato da diversi concessionari italiani.",
    intro:
      "Skrill è un portafoglio elettronico accettato da diversi operatori ADM, con accrediti in genere più rapidi rispetto al bonifico bancario.",
  },
  {
    slug: "neteller",
    aliases: ["neteller"],
    name: "Neteller",
    short: "E-wallet della stessa famiglia di Skrill, usato per depositi e prelievi rapidi.",
    intro:
      "Neteller è un portafoglio elettronico usato per depositi immediati; i prelievi restano soggetti alla verifica documentale obbligatoria sul conto di gioco.",
  },
  {
    slug: "bonifico",
    aliases: ["bonifico"],
    name: "Bonifico bancario",
    short: "Trasferimento diretto da conto corrente: tempi più lunghi, massima tracciabilità.",
    intro:
      "Il bonifico bancario è il metodo più tracciabile ma anche il più lento: l'accredito del prelievo può richiedere alcuni giorni lavorativi in base alla banca.",
  },
];

export function operatorsForMethod(method: PaymentMethod): Operator[] {
  return operators.filter((op) =>
    op.paymentMethods.some((pm) =>
      method.aliases.some((a) => pm.toLowerCase().includes(a)),
    ),
  );
}

export function getPaymentMethod(slug: string) {
  return paymentMethods.find((m) => m.slug === slug);
}

/** Metodi con almeno un operatore reale associato (evita pagine vuote in sitemap). */
export const activePaymentMethods = paymentMethods.filter(
  (m) => operatorsForMethod(m).length > 0,
);
