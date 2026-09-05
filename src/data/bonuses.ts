// Bonus di benvenuto DICHIARATI dai concessionari ADM sulle proprie pagine ufficiali.
//
// REGOLA REDAZIONALE (obbligatoria):
// - ogni importo riportato qui deve essere presente su una pagina del dominio
//   ufficiale dell'operatore, indicata nel campo `source`;
// - se un importo non è verificabile su fonte ufficiale si scrive
//   `null` (la UI mostra "dato non disponibile" e rimanda al sito ufficiale);
// - gli importi "fino a" sono massimali dichiarati in promozione, non somme
//   garantite: la formula va sempre accompagnata dai requisiti dei T&C.

export type BonusDetail = {
  /** Importo dichiarato dall'operatore, così come pubblicato. */
  amount: string;
  /** Condizione di accesso dichiarata (registrazione, SPID, deposito minimo...). */
  condition: string;
};

export type OperatorBonus = {
  slug: string;
  /** Bonus senza deposito: null quando non risulta pubblicato ufficialmente. */
  noDeposit: BonusDetail | null;
  /** Bonus con deposito / primo deposito: null quando non verificabile. */
  deposit: BonusDetail | null;
  /** Pagina ufficiale dell'operatore da cui proviene il dato. */
  source: string;
  /**
   * "ufficiale" = importo letto sulla pagina promozionale del concessionario.
   * "settore"   = importo riportato da testate/comparatori di settore quando la
   *               pagina ufficiale non è consultabile automaticamente; va sempre
   *               verificato sul sito dell'operatore prima di aderire.
   */
  sourceType?: "ufficiale" | "settore";
  /** Riferimento della fonte di settore, quando sourceType = "settore". */
  secondarySource?: string;
};

/** Data dell'ultima rilevazione delle pagine promozionali ufficiali. */
export const BONUS_LAST_CHECK = "5 settembre 2026";

export const BONUS_NOTE =
  `Bonus rilevati dalle pagine promozionali ufficiali dei concessionari (ultimo controllo: ${BONUS_LAST_CHECK}). Quando la pagina ufficiale non è consultabile, l'importo è ripreso da testate e comparatori di settore e va verificato sul sito dell'operatore. Gli importi "fino a" sono massimali dichiarati in promozione e sono soggetti a requisiti di puntata, deposito minimo e scadenze indicati nei Termini e Condizioni dell'operatore.`;


export const operatorBonuses: OperatorBonus[] = [
  {
    slug: "leovegas",
    noDeposit: {
      amount: "Fino a 50 giri gratis",
      condition: "Registrazione con SPID e verifica dell'identità, senza deposito.",
    },
    deposit: {
      amount: "Fino a 1.500 € + 250 giri gratis",
      condition: "Offerta casinò su più depositi; sezione live fino a 2.000 € sui primi 3 depositi.",
    },
    source: "https://www.leovegas.it/promozioni/offerta-benvenuto-casino",
  },
  {
    slug: "netbet",
    noDeposit: {
      amount: "200 giri gratis",
      condition: "Registrazione con SPID e verifica del conto, senza deposito.",
    },
    deposit: {
      amount: "Fino a 2.000 € (casinò) · 100% fino a 1.000 € (sport)",
      condition: "Deposito minimo 10 € dichiarato sull'offerta sport.",
    },
    source: "https://www.netbet.it/promozioni",
  },
  {
    slug: "888",
    noDeposit: {
      amount: "88 giri gratis + 50 alla verifica",
      condition: "Giri alla registrazione e ulteriori giri alla convalida del documento.",
    },
    deposit: {
      amount: "100% fino a 1.000 €",
      condition: "Bonus sulla prima ricarica, soggetto ai requisiti dell'informativa bonus.",
    },
    source: "https://www.888casino.it/promozioni/bonus-benvenuto",
  },
  {
    slug: "betflag",
    noDeposit: {
      amount: "5.000 € slot + 25 € virtual (massimale)",
      condition: "Registrazione con CIE/SPID; accredito a step al raggiungimento del giocato.",
    },
    deposit: {
      amount: "Fino a 5.000 € (slot) · fino a 3.000 € (casinò live)",
      condition: "Accredito progressivo a step; validità dichiarata 30 giorni.",
    },
    source: "https://info.betflag.it/promozioni-e-bonus",
  },
  {
    slug: "sunbet",
    noDeposit: {
      amount: "10 € (5 € sport + 5 € casinò)",
      condition: "Accredito alla convalida del documento, senza deposito.",
    },
    deposit: {
      amount: "Fino a 1.000 €",
      condition: "Bonus distribuito sui primi 3 depositi.",
    },
    source: "https://www.sunbet.it/promo",
  },
  {
    slug: "william-hill",
    noDeposit: {
      amount: "10 € sport con SPID",
      condition: "Registrazione con SPID e verifica dell'identità, senza deposito.",
    },
    deposit: {
      amount: "100 € cash + 100 € free bet (sport) · 100% fino a 1.000 € + 50 giri (casinò)",
      condition: "Deposito minimo dichiarato 20 € sull'offerta casinò.",
    },
    source: "https://www.williamhill.it/",
  },
  {
    slug: "lottomatica",
    noDeposit: null,
    deposit: {
      amount: "Fino a 6.550 € (scommesse)",
      condition: "Offerta selezionabile durante la registrazione e legata ai primi depositi.",
    },
    source: "https://www.lottomatica.it/bonus/bonus-di-benvenuto",
  },
  {
    slug: "goldbet",
    noDeposit: null,
    deposit: null,
    source: "https://www.goldbet.it/bonus/tutti",
  },
  {
    slug: "snai",
    noDeposit: {
      amount: "Bonus senza deposito attivo (importo non pubblicato)",
      condition: "Sezione dedicata sul sito ufficiale: importo indicato in fase di registrazione.",
    },
    deposit: {
      amount: "Fino a 1.500 € (sport) · fino a 3.000 € (casinò)",
      condition: "Deposito minimo 10 € entro 14 giorni dalla registrazione; bonifico escluso.",
    },
    source: "https://www.snai.it/bonus/bonus-benvenuto",
  },
  {
    slug: "sisal",
    noDeposit: null,
    deposit: {
      amount: "Fino a 6.000 € (casinò Fun Bonus) · fino a 5.050 € (Real + Fun)",
      condition:
        "Bonus di benvenuto selezionabile in registrazione; requisiti e scadenze nei T&C ufficiali.",
    },
    source: "https://www.sisal.it/bonus/bonus-benvenuto/casino",
  },
  {
    slug: "eplay24",
    noDeposit: null,
    deposit: null,
    source: "https://www.eplay24.it/",
  },
  {
    slug: "admiralbet",
    noDeposit: {
      amount: "2.000 € + 1.000 giri gratis (massimale)",
      condition: "Registrazione con SPID; accredito progressivo secondo i T&C.",
    },
    deposit: {
      amount: "200% fino a 5.000 € (slot) · fino a 7.000 € + 1.000 giri (sport)",
      condition: "Bonus di primo deposito con SPID, soggetto ai requisiti dei T&C ufficiali.",
    },
    source: "https://www.admiralbet.it/promozioni/bonus-benvenuto",
  },
  {
    slug: "stake",
    noDeposit: null,
    deposit: {
      amount: "100% fino a 750 €",
      condition: "Primo deposito, minimo dichiarato 10 €; promozione con scadenza mensile.",
    },
    source: "https://stake.it/promo",
  },
  {
    slug: "sportium",
    noDeposit: null,
    deposit: null,
    source: "https://www.sportium.it/",
  },
];

const byBonusSlug = new Map(operatorBonuses.map((b) => [b.slug, b]));

export function getOperatorBonus(slug: string): OperatorBonus | undefined {
  return byBonusSlug.get(slug);
}

/** Operatori con un bonus senza deposito verificato su fonte ufficiale. */
export function hasVerifiedNoDeposit(slug: string): boolean {
  return Boolean(byBonusSlug.get(slug)?.noDeposit);
}
