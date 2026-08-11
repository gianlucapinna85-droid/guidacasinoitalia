// Tipi del blog editoriale (/blog e /blog/<slug>).
// Ogni articolo vive in un file di batch dentro src/data/blog/ ed entra
// automaticamente in: indice /blog, rotta dinamica, sitemap.xml, IndexNow
// e risottomissione a Google Search Console.

export type BlogCategory =
  | "Slot"
  | "Giochi da tavolo"
  | "Live casino"
  | "Bonus"
  | "Pagamenti"
  | "Sicurezza"
  | "Strategie"
  | "Provider"
  | "Sport";

export type BlogH3 = { h3: string; paragraphs: string[]; bullets?: string[] };

export type BlogSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: BlogH3[];
};

export type BlogFaq = { q: string; a: string };

export type BlogArticle = {
  slug: string;
  category: BlogCategory;
  /** Cluster tematico usato per i link interni fra articoli correlati. */
  cluster: string;
  title: string; // <title>, <= 60 caratteri consigliati
  h1: string;
  description: string; // meta description, <= 160 caratteri
  keywords: string; // keyword principale + correlate + long tail
  date: string; // ISO
  updated?: string; // ISO, alimenta lastmod e dateModified
  summary: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
};
