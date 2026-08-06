#!/usr/bin/env node
/**
 * Controllo SEO automatico (eseguito prima di ogni build/deploy).
 *
 * Verifica:
 *  - riferimenti residui a *.lovable.app
 *  - canonical assenti o su dominio errato
 *  - og:url / twitter:url errati
 *  - immagini senza attributo alt
 *  - pagine senza H1
 *  - link interni verso rotte inesistenti (404 interni)
 *  - mixed content http:// nelle risorse
 *  - validita di base delle sitemap (BASE_URL corretto)
 *
 * Uso: node scripts/seo-check.mjs        (esce con codice 1 in caso di errori)
 *      node scripts/seo-check.mjs --warn (non blocca, stampa soltanto)
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const CANONICAL_ORIGIN = "https://guidacasino-italia.it";
const WARN_ONLY = process.argv.includes("--warn");

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (["node_modules", "dist", ".git", ".output", ".nitro", "remotion"].includes(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const files = walk(join(ROOT, "src")).concat(
  existsSync(join(ROOT, "public")) ? walk(join(ROOT, "public")) : [],
);

// Rotte disponibili (per i 404 interni)
const routeFiles = files.filter((f) => f.includes(`${"src"}/routes/`) && /\.tsx$/.test(f));
const knownRoutes = new Set(["/"]);
for (const f of routeFiles) {
  const m = readFileSync(f, "utf8").match(/createFileRoute\(\s*["'`]([^"'`]+)["'`]\s*\)/);
  if (m) knownRoutes.add(m[1]);
}
const routeMatches = (path) => {
  if (knownRoutes.has(path)) return true;
  for (const r of knownRoutes) {
    if (!r.includes("$")) continue;
    const rx = new RegExp("^" + r.replace(/\$[A-Za-z0-9_]+/g, "[^/]+") + "$");
    if (rx.test(path)) return true;
  }
  return false;
};

for (const file of files) {
  if (/\.(png|jpe?g|webp|avif|svg|ico|mp4|woff2?|ttf|otf)$/i.test(file)) continue;
  const rel = relative(ROOT, file);
  const src = readFileSync(file, "utf8");

  // 1. vecchio dominio
  if (/lovable\.app/.test(src) && !rel.startsWith("scripts/") && rel !== "src/server.ts") {
    err(rel, "contiene un riferimento a *.lovable.app");
  }

  // 2/3. canonical, og:url, twitter:url
  for (const m of src.matchAll(/rel:\s*["']canonical["'][^}]*href:\s*["']([^"']+)["']/g)) {
    if (!m[1].startsWith(CANONICAL_ORIGIN)) err(rel, `canonical non canonico: ${m[1]}`);
  }
  for (const m of src.matchAll(/["'](?:og:url|twitter:url)["'][^}]*content:\s*["']([^"']+)["']/g)) {
    if (!m[1].startsWith(CANONICAL_ORIGIN)) err(rel, `og:url/twitter:url errato: ${m[1]}`);
  }

  // 4. immagini senza alt
  for (const m of src.matchAll(/<img\b[^>]*?\/>/gs)) {
    if (!/\balt=/.test(m[0])) err(rel, "tag <img> senza attributo alt");
  }

  // 7. mixed content
  for (const m of src.matchAll(/(?:src|href)[=:]\s*["'](http:\/\/[^"']+)["']/g)) {
    err(rel, `mixed content (http://): ${m[1]}`);
  }

  if (rel.startsWith("src/routes/") && rel.endsWith(".tsx")) {
    // 5. pagine senza H1 (solo rotte con component di pagina)
    const isPage = /component:/.test(src) && !rel.includes("__root");
    if (isPage && !/<h1[\s>]/.test(src) && !/GuideArticle|PageShell.*h1/.test(src)) {
      warn(rel, "nessun <h1> rilevato nel file della rotta");
    }
    // 6. link interni verso rotte inesistenti
    for (const m of src.matchAll(/\bto=["'](\/[^"'{}]*)["']/g)) {
      const path = m[1].split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
      if (!routeMatches(path)) err(rel, `link interno verso rotta inesistente: ${m[1]}`);
    }
  }
}

// 8. sitemap + robots
for (const f of ["src/routes/sitemap[.]xml.ts", "src/routes/sitemap-guides[.]xml.ts", "src/routes/sitemap-reviews[.]xml.ts"]) {
  const full = join(ROOT, f);
  if (!existsSync(full)) { warn(f, "sitemap mancante"); continue; }
  const s = readFileSync(full, "utf8");
  if (!s.includes(`const BASE_URL = "${CANONICAL_ORIGIN}"`)) err(f, "BASE_URL non canonico");
  if (!s.includes("<urlset")) err(f, "sitemap non valida (manca <urlset>)");
}
const robotsPath = join(ROOT, "public/robots.txt");
if (existsSync(robotsPath)) {
  const r = readFileSync(robotsPath, "utf8");
  if (!r.includes(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`)) err("public/robots.txt", "manca la direttiva Sitemap canonica");
  if (/^\s*Disallow:\s*\/\s*$/m.test(r)) err("public/robots.txt", "Disallow: / blocca tutti i crawler");
} else {
  err("public/robots.txt", "file mancante");
}

for (const w of warnings) console.warn(`⚠️  ${w}`);
if (errors.length) {
  console.error(`\n❌ SEO check: ${errors.length} problemi rilevati\n`);
  for (const e of errors) console.error(`   - ${e}`);
  if (!WARN_ONLY) process.exit(1);
} else {
  console.log(`✅ SEO check superato (${warnings.length} avvisi) — dominio ${CANONICAL_ORIGIN}`);
}
