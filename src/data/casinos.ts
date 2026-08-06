// Metadati editoriali dei concessionari (voto, badge, dati di conto).
// NOTA: questo file NON contiene link affiliati. Gli href degli operatori restano
// definiti esclusivamente in src/lib/operators.ts (campo officialUrl) e non vanno modificati.
// I valori economici sono indicativi: verifica sempre i Termini e Condizioni ufficiali.

export type CasinoMeta = {
  slug: string;
  rating: number; // 1-10
  paypal: boolean;
  fastWithdrawal: boolean;
  minDeposit: string;
  minWithdrawal: string;
  featured: boolean;
  short: string;
  pros: string[];
  cons: string[];
};

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
      "Concessionario ADM con catalogo slot molto ampio, app mobile curata e strumenti di autolimitazione ben visibili nel conto di gioco.",
    pros: ["Catalogo slot e live molto ampio", "App mobile tra le più complete", "Verifica identità rapida"],
    cons: ["Interfaccia ricca, meno immediata per chi inizia"],
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
      "Operatore storico attivo dal 2001, con sezione casinò e sport integrate e assistenza in lingua italiana tutti i giorni.",
    pros: ["Operatore con lunga storia sul mercato", "Assistenza in italiano 7/7", "Metodi di pagamento diffusi"],
    cons: ["Sezione live meno estesa rispetto ai maggiori concessionari"],
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
      "Piattaforma proprietaria con RTP medio dichiarato tra i più alti del confronto e sezione gioco responsabile molto strutturata.",
    pros: ["RTP medio dichiarato elevato", "Piattaforma proprietaria stabile", "Strumenti di tutela ben documentati"],
    cons: ["Prelievo minimo più alto della media"],
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
      "Concessionario italiano con oltre 2.400 titoli, registrazione con SPID/CIE e limiti di deposito personalizzabili.",
    pros: ["Deposito minimo contenuto", "Registrazione SPID/CIE", "Catalogo giochi molto ampio"],
    cons: ["Interfaccia desktop meno moderna"],
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
      "Concessionario recente (2020) con offerta divisa tra sport e casinò e strumenti di gioco responsabile standard ADM.",
    pros: ["Sezioni sport e casinò integrate", "Piattaforma leggera anche da mobile"],
    cons: ["Operatore recente, meno storico", "Tempi di prelievo nella media"],
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
      "Marchio internazionale con concessione ADM, registrazione immediata con SPID e adesione al Registro Unico degli Autoesclusi.",
    pros: ["Marchio internazionale consolidato", "Registrazione immediata con SPID", "Prelievi rapidi dichiarati"],
    cons: ["Catalogo slot più contenuto rispetto ai concorrenti"],
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
      "Concessionario storico del mercato italiano, con rete di punti vendita fisici per depositi e prelievi in contanti.",
    pros: ["Rete capillare di punti vendita", "Catalogo oltre 2.500 titoli", "Verifica con SPID/CIE"],
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
      "Concessionario con forte presenza territoriale, verifica dell'identità tramite SPID o documento e limiti personalizzabili.",
    pros: ["Punti vendita in tutta Italia", "Limiti di deposito personalizzabili"],
    cons: ["RTP medio dichiarato leggermente sotto i migliori"],
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
      "Operatore storico con rete di agenzie sul territorio, catalogo tra i più ampi e assistenza interamente in italiano.",
    pros: ["Oltre 2.600 titoli disponibili", "Rete di agenzie fisiche", "Assistenza in italiano"],
    cons: ["RTP medio dichiarato in linea con la media"],
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
      "Concessionario storico dei giochi pubblici in Italia, con registrazione SPID e strumenti di autoesclusione integrati.",
    pros: ["Concessionario storico dal 1946", "Registrazione SPID immediata", "Strumenti di autoesclusione integrati"],
    cons: ["Sezione live meno estesa"],
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
      "Concessionario con catalogo slot internazionale e adesione al Registro Unico degli Autoesclusi; PayPal non risulta tra i metodi dichiarati.",
    pros: ["Catalogo con provider internazionali", "Adesione al RUA"],
    cons: ["PayPal non disponibile", "Meno metodi di pagamento rispetto alla media"],
  },
];

const bySlug = new Map(casinos.map((c) => [c.slug, c]));

export function getCasinoMeta(slug: string): CasinoMeta | undefined {
  return bySlug.get(slug);
}
