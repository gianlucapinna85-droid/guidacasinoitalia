import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell } from "@/components/site-layout";
import { guides } from "@/data/guides";
import { sortedBlog, blogPath } from "@/data/blog";
import { sortedNews } from "@/data/news";
import { slots } from "@/data/slots";
import { operators } from "@/lib/operators";
import { activePaymentMethods } from "@/lib/payments";

const URL = "https://www.guidacasino-italia.it/mappa-sito";
const TITLE = "Mappa del sito | GuidaCasinò.IT";
const DESCRIPTION =
  "Indice completo delle recensioni, guide, articoli, news, slot e pagine informative pubblicate da GuidaCasinò.IT.";

const mainPages = [
  { to: "/", label: "Home" },
  { to: "/recensioni", label: "Recensioni casinò ADM" },
  { to: "/guide", label: "Tutte le guide" },
  { to: "/blog", label: "Blog casinò e sport" },
  { to: "/news", label: "News casinò" },
  { to: "/slot", label: "Slot online" },
  { to: "/bonus", label: "Bonus casinò" },
  { to: "/slot-piu-giocate", label: "Slot più giocate" },
  { to: "/pagamenti", label: "Metodi di pagamento" },
  { to: "/assistente-guida-casino", label: "Assistente GuidaCasinò" },
  { to: "/autore/gianluca-pinna", label: "Autore: Gianluca Pinna" },
  { to: "/note-legali", label: "Note legali" },
  { to: "/privacy", label: "Privacy e cookie" },
] as const;

export const Route = createFileRoute("/mappa-sito")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESCRIPTION,
          url: URL,
          inLanguage: "it-IT",
        }),
      },
    ],
  }),
  component: SiteMapPage,
});

function LinkList({ children }: { children: ReactNode }) {
  return <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{children}</ul>;
}

function SiteLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="block h-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-gold/60 hover:text-gold"
      >
        {children}
      </Link>
    </li>
  );
}

function SiteMapPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-2.5 py-10 md:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-gold">Home</Link> / Mappa del sito
        </nav>
        <header className="mt-4 border-b border-border pb-6">
          <h1 className="font-serif text-3xl md:text-4xl">Mappa del sito</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Tutte le pagine informative pubbliche di GuidaCasinò.IT, organizzate per argomento.
          </p>
        </header>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Pagine principali</h2>
          <LinkList>{mainPages.map((page) => <SiteLink key={page.to} to={page.to}>{page.label}</SiteLink>)}</LinkList>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Recensioni degli operatori ADM</h2>
          <LinkList>{operators.map((op) => <SiteLink key={op.slug} to={`/operatori/${op.slug}`}>Recensione {op.name}</SiteLink>)}</LinkList>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Guide</h2>
          <LinkList>{guides.map((guide) => <SiteLink key={guide.path} to={guide.path}>{guide.title}</SiteLink>)}</LinkList>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Articoli del blog</h2>
          <LinkList>{sortedBlog.map((article) => {
            const path = blogPath(article);
            return <SiteLink key={article.slug} to={`/blog/${path.category}/${path.slug}`}>{article.h1}</SiteLink>;
          })}</LinkList>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">News</h2>
          <LinkList>{sortedNews.map((article) => <SiteLink key={article.slug} to={`/news/${article.slug}`}>{article.h1}</SiteLink>)}</LinkList>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Slot</h2>
          <LinkList>{slots.map((slot) => <SiteLink key={slot.slug} to={`/slot/${slot.slug}`}>{slot.name} — {slot.provider}</SiteLink>)}</LinkList>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Metodi di pagamento</h2>
          <LinkList>{activePaymentMethods.map((method) => <SiteLink key={method.slug} to={`/pagamenti/${method.slug}`}>{method.name}</SiteLink>)}</LinkList>
        </section>
      </main>
    </PageShell>
  );
}