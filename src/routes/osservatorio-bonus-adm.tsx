import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GuideArticle,
  guideHeadWithWebPage,
  SeoTable,
  InternalCtaLinks,
  type GuideConfig,
} from "@/components/guide-article";
import { operatorBonuses, BONUS_LAST_CHECK, BONUS_NOTE } from "@/data/bonuses";
import { operators } from "@/lib/operators";

const nameOf = (slug: string) => operators.find((o) => o.slug === slug)?.name ?? slug;

const rows = operatorBonuses.map((b) => [
  nameOf(b.slug),
  b.noDeposit ? b.noDeposit.amount : "dato non disponibile",
  b.deposit ? b.deposit.amount : "dato non disponibile",
  b.sourceType === "settore" ? "fonte di settore" : "pagina ufficiale",
]);

const conNoDeposit = operatorBonuses.filter((b) => b.noDeposit).length;
const conDeposit = operatorBonuses.filter((b) => b.deposit).length;
const ufficiali = operatorBonuses.filter((b) => b.sourceType !== "settore").length;

const CFG: GuideConfig = {
  path: "/osservatorio-bonus-adm",
  title: `Osservatorio bonus ADM: dati aggiornati a ${BONUS_LAST_CHECK}`,
  h1: "Osservatorio bonus ADM: rilevazione periodica delle promozioni dichiarate",
  description:
    "Rilevazione periodica dei bonus dichiarati dai concessionari ADM: quanti operatori pubblicano un bonus senza deposito, quanti un bonus di benvenuto, metodo e fonti. Dati liberamente citabili. Solo +18.",
  keywords:
    "osservatorio bonus adm, dati bonus casino italia, statistiche bonus senza deposito, concessionari adm bonus, rilevazione bonus casino 2026",
  eyebrow: "Dati aperti · aggiornamento periodico",
  breadcrumb: "Osservatorio bonus ADM",
  sections: [
    {
      id: "sintesi",
      label: "Sintesi",
      h2: "I numeri della rilevazione",
      paragraphs: [
        `Alla rilevazione del ${BONUS_LAST_CHECK} abbiamo esaminato ${operatorBonuses.length} concessionari ADM presenti nel nostro archivio. Di questi, ${conNoDeposit} pubblicano una promozione senza deposito consultabile e ${conDeposit} un bonus legato al primo deposito. Per ${ufficiali} operatori l'importo è stato letto direttamente sulla pagina promozionale del dominio ufficiale.`,
        "Il dato non misura la convenienza delle offerte, ma la loro reperibilità e trasparenza: quante promozioni sono pubblicate in modo consultabile e verificabile da un utente prima della registrazione. Dove la pagina ufficiale non riporta un importo, registriamo \"dato non disponibile\" invece di stimare.",
      ],
      bullets: [
        `Concessionari nell'archivio: ${operatorBonuses.length}`,
        `Con bonus senza deposito pubblicato: ${conNoDeposit}`,
        `Con bonus di benvenuto su deposito: ${conDeposit}`,
        `Importi letti su pagina ufficiale: ${ufficiali}`,
      ],
    },
    {
      id: "metodo",
      label: "Metodo",
      h2: "Come raccogliamo e classifichiamo i dati",
      paragraphs: [
        "Per ogni concessionario apriamo la pagina promozionale sul dominio ufficiale e riportiamo l'importo così come pubblicato, senza arrotondamenti né riformulazioni commerciali. Quando la pagina non è consultabile, l'importo viene ripreso da testate e comparatori di settore e classificato come tale, così che chi cita il dato sappia sempre da dove arriva.",
        "Non usiamo importi stimati, non pubblichiamo posizioni a pagamento nella rilevazione e non trattiamo i massimali \"fino a\" come somme garantite. Ogni riga resta soggetta a requisiti di puntata, deposito minimo e scadenze indicati nei Termini e Condizioni dell'operatore.",
      ],
      bullets: [
        "Fonte primaria: pagina promozionale del dominio del concessionario",
        "Fonte secondaria dichiarata quando la pagina ufficiale non è consultabile",
        "Nessun importo stimato: in assenza di fonte si scrive \"dato non disponibile\"",
        "Aggiornamento della rilevazione a cadenza periodica",
      ],
    },
    {
      id: "limiti",
      label: "Limiti",
      h2: "Cosa questi dati non dicono",
      paragraphs: [
        "La rilevazione fotografa ciò che gli operatori dichiarano in un dato momento: le promozioni cambiano più volte l'anno e un importo elevato non implica un valore reale elevato, perché requisito di puntata, tetto di vincita e contributo dei giochi possono ridurlo sensibilmente.",
        "Chi cita questi numeri dovrebbe indicare sempre la data della rilevazione. Prima di aderire a una promozione, la sola fonte valida restano i Termini e Condizioni pubblicati dal concessionario.",
      ],
    },
  ],
  faqs: [
    {
      q: "Posso citare o riprendere questi dati?",
      a: "Sì. I dati sono liberamente riutilizzabili citando la fonte (Guida Casinò Italia) con un collegamento alla pagina dell'osservatorio e indicando la data della rilevazione.",
    },
    {
      q: "Ogni quanto viene aggiornata la rilevazione?",
      a: "A cadenza periodica: la data dell'ultimo controllo delle pagine promozionali è indicata in cima alla tabella.",
    },
    {
      q: "Perché alcuni operatori risultano senza importo?",
      a: "Perché sulla pagina ufficiale non era pubblicato un importo consultabile al momento del controllo. In quel caso registriamo \"dato non disponibile\" invece di stimare una cifra.",
    },
    {
      q: "I dati indicano quale bonus conviene di più?",
      a: "No. Misurano la reperibilità e la trasparenza delle promozioni dichiarate, non la loro convenienza, che dipende da requisiti di puntata, scadenze e tetti di vincita.",
    },
  ],
};

export const Route = createFileRoute("/osservatorio-bonus-adm")({
  head: () => guideHeadWithWebPage(CFG),
  component: () => (
    <GuideArticle cfg={CFG}>
      <SeoTable
        caption={`Bonus dichiarati dai concessionari ADM — rilevazione del ${BONUS_LAST_CHECK}`}
        headers={["Operatore", "Senza deposito", "Su primo deposito", "Origine del dato"]}
        rows={rows}
      />
      <p className="mt-3 text-xs text-muted-foreground">{BONUS_NOTE}</p>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Come citare questi dati</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          I dati possono essere ripresi gratuitamente da testate, blog e ricerche citando la fonte e la data
          della rilevazione. Formula suggerita:
        </p>
        <p className="mt-3 rounded-lg border border-border bg-background p-3 text-sm">
          Fonte: Osservatorio bonus ADM — Guida Casinò Italia, rilevazione del {BONUS_LAST_CHECK}
          {" "}(https://www.guidacasino-italia.it/osservatorio-bonus-adm)
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Approfondimenti collegati</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link to="/bonus-senza-deposito" className="text-gold hover:underline">Bonus senza deposito: guida completa</Link></li>
          <li><Link to="/bonus-casino-ufficiali" className="text-gold hover:underline">Bonus ufficiali dei concessionari</Link></li>
          <li><Link to="/requisiti-scommessa-bonus" className="text-gold hover:underline">Requisiti di scommessa spiegati</Link></li>
          <li><Link to="/come-valutiamo-i-casino" className="text-gold hover:underline">Come valutiamo i casinò</Link></li>
          <li><Link to="/migliori-casino-online-adm" className="text-gold hover:underline">Migliori casinò online ADM</Link></li>
          <li><Link to="/gioco-responsabile" className="text-gold hover:underline">Gioco responsabile</Link></li>
        </ul>
      </section>
      <InternalCtaLinks />
    </GuideArticle>
  ),
});
