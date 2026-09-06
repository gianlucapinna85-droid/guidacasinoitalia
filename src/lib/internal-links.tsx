import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

/**
 * Motore di link interni automatici.
 * Ogni frase chiave presente nel testo di un articolo viene trasformata in un
 * link verso la sezione pertinente del sito. Le frasi possono comparire più
 * volte nello stesso articolo: il link viene applicato ogni volta, con un
 * limite per frase per evitare over-optimization.
 */

type LinkRule = { phrases: string[]; to: string; hash?: string };

export const PRONOSTICI_URL = "https://pronostici-vincenti.it";
export const EXTERNAL_BLOG_URL = "https://guidacasino-italia.blogspot.com/?m=1";

const RULES: LinkRule[] = [
  { phrases: ["migliori casinò online ADM", "migliori casino online ADM", "casinò online ADM", "casino online ADM"], to: "/migliori-casino-online-adm" },
  { phrases: ["migliori casinò online", "migliori casino online"], to: "/migliori-casino-online" },
  { phrases: ["guida completa ai casinò online", "guida ai casinò online italiani", "guida casinò online Italia"], to: "/guida-casino-online-italia" },
  { phrases: ["bonus immediato senza deposito e senza documento", "bonus immediato senza deposito", "bonus immediato con SPID", "registrazione con SPID", "SPID"], to: "/bonus-immediato-spid" },
  { phrases: ["bonus senza deposito aggiornati", "bonus casinò senza deposito", "bonus casino senza deposito", "bonus senza deposito"], to: "/bonus-casino-online-senza-deposito" },

  { phrases: ["bonus di benvenuto"], to: "/bonus-benvenuto-casino" },
  { phrases: ["requisiti di scommessa", "requisito di puntata"], to: "/requisiti-scommessa-bonus" },
  { phrases: ["slot online consigliate", "slot online con soldi veri", "slot online soldi veri", "slot online"], to: "/slot-online-soldi-veri" },
  { phrases: ["slot con RTP alto", "RTP alto"], to: "/slot-rtp-alto" },
  { phrases: ["slot ad alta volatilità", "alta volatilità"], to: "/slot-alta-volatilita" },
  { phrases: ["slot gratis in versione demo", "slot demo", "slot gratis"], to: "/slot-gratis-demo" },
  { phrases: ["guida completa alla roulette online", "roulette online"], to: "/roulette-online-italia" },
  { phrases: ["blackjack online"], to: "/blackjack-online-italia" },
  { phrases: ["casinò live", "casino live", "giochi con croupier dal vivo"], to: "/casino-live" },
  { phrases: ["RTP", "return to player"], to: "/guida-rtp" },
  { phrases: ["metodi di pagamento"], to: "/metodi-pagamento-casino" },
  { phrases: ["prelievi rapidi", "prelievi veloci", "tempi di prelievo"], to: "/prelievi-veloci" },
  { phrases: ["pagamenti sicuri"], to: "/pagamenti-sicuri-casino" },
  { phrases: ["PayPal"], to: "/casino-paypal" },
  { phrases: ["licenza ADM", "concessione ADM"], to: "/verificare-licenza-adm" },
  { phrases: ["casinò sicuri", "casino sicuri", "sicurezza del conto di gioco"], to: "/casino-online-sicuri" },
  { phrases: ["casinò online per regione", "regione per regione", "differenze regionali"], to: "/casino-online-per-regione" },
  { phrases: ["gestione del bankroll", "bankroll"], to: "/gestione-bankroll" },
  { phrases: ["gioco responsabile", "autoesclusione"], to: "/gioco-responsabile" },
  { phrases: ["come registrarsi", "registrazione del conto di gioco"], to: "/come-registrarsi" },
  { phrases: ["come scegliere un casinò", "come scegliere un casino"], to: "/come-scegliere-casino-online-adm" },
  { phrases: ["casinò da mobile", "casinò mobile", "app da mobile"], to: "/casino-mobile-adm" },
  { phrases: ["principianti"], to: "/casino-online-principianti" },
  { phrases: ["scommesse sportive"], to: "/scommesse-sportive-online-adm" },
  { phrases: ["siti scommesse ADM", "migliori siti scommesse"], to: "/migliori-siti-scommesse-adm" },
  { phrases: ["scommesse live"], to: "/scommesse-live-come-funzionano" },
  { phrases: ["quote", "lettura delle quote"], to: "/come-leggere-quote-calcio" },
  { phrases: ["Serie A"], to: "/scommesse-serie-a-guida" },
  { phrases: ["pronostici calcio", "analisi delle partite"], to: "/pronostici-calcio-come-analizzare" },
  { phrases: ["news casinò", "aggiornamenti editoriali"], to: "/news" },
  { phrases: ["come valutiamo i casinò", "metodologia"], to: "/come-valutiamo-i-casino" },
];

const MAX_PER_PHRASE = 2;

type Match = { start: number; end: number; text: string; to: string; hash?: string };

function findMatches(text: string, budget: Map<string, number>): Match[] {
  const matches: Match[] = [];
  const lower = text.toLowerCase();

  for (const rule of RULES) {
    for (const phrase of rule.phrases) {
      const used = budget.get(phrase) ?? 0;
      if (used >= MAX_PER_PHRASE) continue;
      const idx = lower.indexOf(phrase.toLowerCase());
      if (idx === -1) continue;
      // Evita match parziali dentro una parola più lunga.
      const before = text[idx - 1];
      const after = text[idx + phrase.length];
      if (before && /[\p{L}\p{N}]/u.test(before)) continue;
      if (after && /[\p{L}\p{N}]/u.test(after)) continue;
      matches.push({ start: idx, end: idx + phrase.length, text: text.slice(idx, idx + phrase.length), to: rule.to, hash: rule.hash });
      budget.set(phrase, used + 1);
    }
  }

  // Ordina e scarta sovrapposizioni (vince il match più lungo).
  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const out: Match[] = [];
  let cursor = -1;
  for (const m of matches) {
    if (m.start < cursor) continue;
    out.push(m);
    cursor = m.end;
  }
  return out;
}

/** Trasforma un paragrafo in nodi React con link interni contestuali. */
export function withInternalLinks(text: string, budget: Map<string, number>): ReactNode {
  const matches = findMatches(text, budget);
  if (matches.length === 0) return text;

  const nodes: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    if (m.start > cursor) nodes.push(<Fragment key={`t${i}`}>{text.slice(cursor, m.start)}</Fragment>);
    nodes.push(
      <Link
        key={`l${i}`}
        to={m.to}
        hash={m.hash}
        className="font-medium text-gold underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
      >
        {m.text}
      </Link>,
    );
    cursor = m.end;
  });
  if (cursor < text.length) nodes.push(<Fragment key="tail">{text.slice(cursor)}</Fragment>);
  return <>{nodes}</>;
}

/** Nuovo budget di link per articolo. */
export function newLinkBudget(): Map<string, number> {
  return new Map<string, number>();
}
