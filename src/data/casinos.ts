// Metadati editoriali dei concessionari (voto redazionale, dati di conto dichiarati).
// NOTA: questo file NON contiene link affiliati. Gli href degli operatori restano
// definiti esclusivamente in src/lib/operators.ts (campo officialUrl) e non vanno modificati.
//
// REGOLA REDAZIONALE: i valori economici e le caratteristiche riportate qui sono
// DICHIARATI DAGLI OPERATORI sui rispettivi siti ufficiali e non costituiscono una
// verifica indipendente. Non usare superlativi ("i più alti", "tra i più ampi",
// "verifica immediata") né dati stimati: se un dato non è documentato, usare
// "dato non disponibile" oppure rimandare al sito ufficiale del concessionario.

export type CasinoMeta = {
  slug: string;
  rating: number; // 1-10 — valutazione redazionale, non un dato dell'operatore
  paypal: boolean;
  fastWithdrawal: boolean;
  /** Registrazione con SPID dichiarata sul sito ufficiale. */
  spid: boolean;
  minDeposit: string;
  minWithdrawal: string;
  featured: boolean;
  short: string;
  pros: string[];
  cons: string[];
};

/** Data dell'ultimo controllo redazionale delle informazioni riportate in questo file. */
export const CASINOS_LAST_CHECK = "agosto 2026";

/** Formula standard da mostrare accanto ai dati di conto. */
export const DECLARED_DATA_NOTE =
  `Dati dichiarati dall'operatore e rilevati dalle pagine pubbliche del concessionario (ultimo controllo: ${CASINOS_LAST_CHECK}). Verificare importi, limiti, commissioni e tempi sul sito ufficiale dell'operatore.`;

export const casinos: CasinoMeta[] = [
  {
    slug: "leovegas",
    rating: 9.4,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "10 €",
    minWithdrawal: "10 €",
    featured: true,
    short:
      "Concessionario ADM con sezione slot e sezione live, app per iOS e Android e strumenti di autolimitazione accessibili dall'area conto.",
    pros: ["Catalogo slot e live", "App per iOS e Android", "Strumenti di autolimitazione nell'area conto"],
    cons: ["Interfaccia con molte sezioni, meno immediata per chi inizia"],
  },
  {
    slug: "netbet",
    rating: 9.1,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "10 €",
    minWithdrawal: "10 €",
    featured: true,
    short:
      "Operatore attivo sul mercato italiano con sezione casinò e sezione scommesse nello stesso conto e assistenza dichiarata in lingua italiana.",
    pros: ["Casinò e scommesse nello stesso conto", "Assistenza dichiarata in italiano", "Metodi di pagamento diffusi"],
    cons: ["Sezione live più contenuta rispetto ad altri concessionari analizzati"],
  },
  {
    slug: "888",
    rating: 9.0,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "10 €",
    minWithdrawal: "20 €",
    featured: true,
    short:
      "Piattaforma proprietaria con sezione dedicata al gioco responsabile e RTP indicato nelle schede dei singoli giochi.",
    pros: ["Piattaforma proprietaria", "Sezione gioco responsabile documentata", "RTP indicato per singolo gioco"],
    cons: ["Prelievo minimo dichiarato di 20 €, superiore agli altri operatori in elenco"],
  },
  {
    slug: "betflag",
    rating: 8.8,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "5 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Concessionario italiano con registrazione tramite SPID o CIE dichiarata sul sito ufficiale e limiti di deposito impostabili dall'area conto.",
    pros: ["Deposito minimo dichiarato di 5 €", "Registrazione con SPID/CIE dichiarata", "Catalogo slot e giochi da tavolo"],
    cons: ["Interfaccia desktop meno recente"],
  },
  {
    slug: "sunbet",
    rating: 8.4,
    paypal: true,
    fastWithdrawal: false,
    minDeposit: "10 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Concessionario con offerta divisa tra sport e casinò e strumenti di gioco responsabile previsti dalla normativa ADM.",
    pros: ["Sezioni sport e casinò integrate", "Interfaccia utilizzabile da mobile"],
    cons: ["Presenza sul mercato italiano più recente", "Tempi di prelievo non dichiarati come rapidi"],
  },
  {
    slug: "william-hill",
    rating: 8.9,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "10 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Marchio internazionale con concessione ADM, registrazione con SPID dichiarata e adesione al Registro Unico degli Autoesclusi.",
    pros: ["Marchio attivo in più mercati", "Registrazione con SPID dichiarata", "Adesione al RUA"],
    cons: ["Catalogo slot più contenuto rispetto ad altri operatori in elenco"],
  },
  {
    slug: "lottomatica",
    rating: 9.2,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "5 €",
    minWithdrawal: "10 €",
    featured: true,
    short:
      "Concessionario con rete di punti vendita fisici sul territorio, indicati dall'operatore anche per depositi e prelievi in contanti.",
    pros: ["Rete di punti vendita sul territorio", "Catalogo slot e giochi da tavolo", "Verifica con SPID/CIE dichiarata"],
    cons: ["Molte sezioni: navigazione inizialmente dispersiva"],
  },
  {
    slug: "goldbet",
    rating: 8.9,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "5 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Concessionario con punti vendita sul territorio, verifica dell'identità tramite SPID o documento e limiti di deposito impostabili.",
    pros: ["Punti vendita in più regioni", "Limiti di deposito impostabili dall'area conto"],
    cons: ["RTP dichiarato non aggregato in una pagina unica"],
  },
  {
    slug: "snai",
    rating: 9.0,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "5 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Operatore con rete di agenzie sul territorio, sezione casinò e sezione scommesse e assistenza dichiarata in lingua italiana.",
    pros: ["Catalogo slot e live", "Rete di agenzie fisiche", "Assistenza dichiarata in italiano"],
    cons: ["Alcuni dati di conto non sono pubblicati in forma aggregata"],
  },
  {
    slug: "sisal",
    rating: 9.1,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "5 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Concessionario storico dei giochi pubblici in Italia, con registrazione SPID dichiarata e strumenti di autoesclusione nell'area conto.",
    pros: ["Operatore attivo da decenni sul mercato italiano", "Registrazione con SPID dichiarata", "Strumenti di autoesclusione nell'area conto"],
    cons: ["Sezione live più contenuta"],
  },
  {
    slug: "eplay24",
    rating: 8.2,
    paypal: false,
    fastWithdrawal: false,
    minDeposit: "10 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Concessionario con catalogo di provider internazionali e adesione al Registro Unico degli Autoesclusi; PayPal non risulta tra i metodi dichiarati.",
    pros: ["Provider internazionali nel catalogo", "Adesione al RUA"],
    cons: ["PayPal non dichiarato", "Elenco dei metodi di pagamento più ridotto"],
  },
  {
    slug: "admiralbet",
    rating: 8.8,
    paypal: true,
    fastWithdrawal: true,
    minDeposit: "5 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Concessionario con punti vendita in Italia, sezione casinò e sezione scommesse e strumenti di autolimitazione previsti dalla normativa ADM.",
    pros: ["Punti vendita sul territorio", "Casinò e scommesse nello stesso conto", "Registrazione con SPID dichiarata"],
    cons: ["Interfaccia con molte sezioni"],
  },
  {
    slug: "stake",
    rating: 8.6,
    paypal: false,
    fastWithdrawal: true,
    minDeposit: "10 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Piattaforma con concessione ADM, sezione live dedicata e interfaccia essenziale anche da dispositivo mobile.",
    pros: ["Sezione live dedicata", "Interfaccia essenziale su mobile"],
    cons: ["PayPal non dichiarato", "Presenza sul mercato italiano recente"],
  },
  {
    slug: "sportium",
    rating: 8.3,
    paypal: false,
    fastWithdrawal: false,
    minDeposit: "10 €",
    minWithdrawal: "10 €",
    featured: false,
    short:
      "Concessionario con offerta divisa tra sport e casinò, adesione al RUA e strumenti di gioco responsabile previsti dalla normativa ADM.",
    pros: ["Sport e casinò nello stesso conto", "Interfaccia leggera da mobile"],
    cons: ["Catalogo più contenuto", "PayPal non dichiarato"],
  },
];

const bySlug = new Map(casinos.map((c) => [c.slug, c]));

export function getCasinoMeta(slug: string): CasinoMeta | undefined {
  return bySlug.get(slug);
}
