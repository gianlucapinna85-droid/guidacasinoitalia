// Indice unico del blog editoriale. Ogni batch di articoli viene aggiunto qui:
// da questo elenco derivano indice /blog, rotta /blog/<slug>, sitemap.xml,
// IndexNow e risottomissione a Google Search Console.
import type { BlogArticle, BlogCategory } from "./types";
import { batch01 } from "./batch-01";
import { batchSport01 } from "./sport-01";

export type { BlogArticle, BlogCategory, BlogSection, BlogFaq } from "./types";

export const blogArticles: BlogArticle[] = [...batch01, ...batchSport01];

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
