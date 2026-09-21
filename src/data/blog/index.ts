// Indice unico del blog editoriale. Ogni batch di articoli viene aggiunto qui:
// da questo elenco derivano indice /blog, rotta /blog/<slug>, sitemap.xml,
// IndexNow e risottomissione a Google Search Console.
import type { BlogArticle, BlogCategory } from "./types";
import { batch01 } from "./batch-01";
import { batch02 } from "./batch-02";
import { batchSport01 } from "./sport-01";
import { batchAi01 } from "./batch-ai-01";

export type { BlogArticle, BlogCategory, BlogSection, BlogFaq } from "./types";

export const blogArticles: BlogArticle[] = [
  ...batchAi01,
  ...batch02,
  ...batch01,
  ...batchSport01,
];

export const sortedBlog: BlogArticle[] = [...blogArticles].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const blogBySlug: Map<string, BlogArticle> = new Map(
  blogArticles.map((a) => [a.slug, a]),
);

export const blogCategories: BlogCategory[] = Array.from(
  new Set(blogArticles.map((a) => a.category)),
) as BlogCategory[];

/** Articoli correlati: stesso cluster, poi stessa categoria. */
export function relatedArticles(article: BlogArticle, limit = 6): BlogArticle[] {
  const sameCluster = sortedBlog.filter((a) => a.slug !== article.slug && a.cluster === article.cluster);
  const sameCategory = sortedBlog.filter(
    (a) => a.slug !== article.slug && a.cluster !== article.cluster && a.category === article.category,
  );
  const rest = sortedBlog.filter(
    (a) => a.slug !== article.slug && a.cluster !== article.cluster && a.category !== article.category,
  );
  return [...sameCluster, ...sameCategory, ...rest].slice(0, limit);
}

/** Conteggio parole approssimato, usato per il tempo di lettura. */
export function wordCount(article: BlogArticle): number {
  const chunks: string[] = [article.summary];
  for (const s of article.sections) {
    chunks.push(s.h2, ...s.paragraphs, ...(s.bullets ?? []));
    for (const sub of s.subsections ?? []) chunks.push(sub.h3, ...sub.paragraphs, ...(sub.bullets ?? []));
  }
  for (const f of article.faqs) chunks.push(f.q, f.a);
  return chunks.join(" ").split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(article: BlogArticle): number {
  return Math.max(3, Math.round(wordCount(article) / 200));
}

// ---------------------------------------------------------------------------
// Silos per categoria: /blog/<categoria>/<slug>
// ---------------------------------------------------------------------------

/** Slug URL di ogni categoria editoriale (parte del percorso /blog/<categoria>). */
export const CATEGORY_SLUG: Record<BlogCategory, string> = {
  Slot: "slot-online",
  "Giochi da tavolo": "giochi-da-tavolo",
  "Live casino": "casino-live",
  Bonus: "bonus-casino",
  Pagamenti: "pagamenti",
  Sicurezza: "sicurezza",
  Strategie: "strategie",
  Provider: "provider-giochi",
  Sport: "sport",
};

export const CATEGORY_BY_SLUG: Map<string, BlogCategory> = new Map(
  (Object.entries(CATEGORY_SLUG) as [BlogCategory, string][]).map(([cat, slug]) => [slug, cat]),
);

export type CategoryHub = {
  category: BlogCategory;
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
};

const HUB_COPY: Record<BlogCategory, { title: string; h1: string; description: string; intro: string }> = {
  Slot: {
    title: "Slot Online: guide, RTP e volatilità | Blog",
    h1: "Slot online: guide, RTP e volatilità",
    description:
      "Tutte le guide sulle slot online ADM: come funzionano RNG e RTP, volatilità, giri gratis, jackpot e criteri per leggere la scheda del gioco.",
    intro:
      "Approfondimenti sulle slot machine online autorizzate ADM: funzionamento del generatore di numeri casuali, lettura dell'RTP dichiarato, differenze di volatilità e caratteristiche dei giri bonus.",
  },
  "Giochi da tavolo": {
    title: "Giochi da Tavolo: roulette e blackjack | Blog",
    h1: "Giochi da tavolo: roulette, blackjack e regole",
    description:
      "Guide ai giochi da tavolo online: varianti della roulette, strategia di base del blackjack, margine del banco e regole applicate nei casinò ADM.",
    intro:
      "Regole, varianti e margine del banco dei principali giochi da tavolo disponibili nei casinò online con licenza ADM.",
  },
  "Live casino": {
    title: "Casino Live: guide ai tavoli con dealer | Blog",
    h1: "Casinò live: tavoli con dealer reale",
    description:
      "Come funzionano i tavoli live nei casinò ADM: streaming, dealer reali, limiti di puntata, game show e differenze rispetto ai giochi RNG.",
    intro:
      "Tutto sui tavoli con dealer reale: tecnologia di streaming, limiti di puntata, tipologie di tavolo e differenze rispetto ai giochi automatici.",
  },
  Bonus: {
    title: "Bonus Casino: requisiti e condizioni | Blog",
    h1: "Bonus casinò: requisiti, condizioni e verifica",
    description:
      "Guide ai bonus dei casinò ADM: bonus senza deposito, requisiti di puntata, scadenze, contributo dei giochi e clausole da leggere prima di accettare.",
    intro:
      "Come si leggono davvero le condizioni di un bonus: requisiti di puntata, contributo dei giochi, tetti di vincita e tempistiche.",
  },
  Pagamenti: {
    title: "Pagamenti Casino: depositi e prelievi | Blog",
    h1: "Pagamenti: depositi, prelievi e tempi reali",
    description:
      "Metodi di pagamento nei casinò ADM: tempi di prelievo, verifica dei documenti, limiti per metodo, commissioni e cause dei ritardi più comuni.",
    intro:
      "Metodi ammessi, tempi dichiarati, verifica dell'identità e motivi più frequenti di blocco o ritardo di un prelievo.",
  },
  Sicurezza: {
    title: "Sicurezza e Licenze ADM | Blog",
    h1: "Sicurezza: licenze ADM e tutela del giocatore",
    description:
      "Come verificare una licenza ADM, riconoscere i siti non autorizzati, capire gli strumenti di autolimitazione e il Registro Unico Autoesclusi.",
    intro:
      "Verifica della concessione ADM, strumenti di tutela previsti dalla normativa italiana e segnali che distinguono un operatore autorizzato.",
  },
  Strategie: {
    title: "Strategie e Gestione del Bankroll | Blog",
    h1: "Strategie: gestione del bankroll e disciplina",
    description:
      "Gestione del budget di gioco, calcolo del rischio, limiti di sessione e perché nessun sistema modifica il margine matematico del banco.",
    intro:
      "Metodi di gestione del budget e limiti di sessione, con una premessa non negoziabile: nessuna strategia cambia il margine del banco.",
  },
  Provider: {
    title: "Provider di Giochi: chi produce le slot | Blog",
    h1: "Provider di giochi: chi produce slot e tavoli",
    description:
      "I provider certificati che forniscono slot e tavoli ai casinò ADM: certificazioni, RTP configurabili, cataloghi e differenze tecniche.",
    intro:
      "Chi sviluppa i giochi presenti nei casinò italiani, quali certificazioni servono e perché lo stesso titolo può avere RTP diversi.",
  },
  Sport: {
    title: "Scommesse Sportive: analisi e quote | Blog",
    h1: "Sport: analisi statistica e lettura delle quote",
    description:
      "Guide sulle scommesse sportive ADM: lettura delle quote, probabilità implicita, margine del bookmaker, mercati live e analisi statistica.",
    intro:
      "Lettura delle quote, probabilità implicita, margine del bookmaker e metodo statistico applicato all'analisi delle partite.",
  },
};

/** Hub di categoria effettivamente popolati (almeno un articolo). */
export const categoryHubs: CategoryHub[] = blogCategories.map((category) => ({
  category,
  slug: CATEGORY_SLUG[category],
  ...HUB_COPY[category],
}));

export const hubBySlug: Map<string, CategoryHub> = new Map(
  categoryHubs.map((h) => [h.slug, h]),
);

/** Percorso canonico dell'articolo: /blog/<categoria>/<slug>. */
export function blogPath(article: BlogArticle): { category: string; slug: string } {
  return { category: CATEGORY_SLUG[article.category], slug: article.slug };
}

export function articlesByCategory(category: BlogCategory): BlogArticle[] {
  return sortedBlog.filter((a) => a.category === category);
}
