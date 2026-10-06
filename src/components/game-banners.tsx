import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gameCatalog } from "@/data/game-catalog";

export function GameBanners() {
  return (
    <section id="guide-giochi" aria-labelledby="games-heading" className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-2.5 py-8 md:px-6 md:py-12">
        <p className="text-xs uppercase text-gold">Regole e approfondimenti · +18</p>
        <h2 id="games-heading" className="mt-2 font-serif text-2xl md:text-4xl">Guide ai giochi da casinò</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">Poker, roulette, blackjack e gli altri giochi: regole, probabilità e differenze da conoscere prima di scegliere.</p>
        <nav aria-label="Accesso rapido alle guide dei giochi" className="mt-5 flex flex-wrap gap-2">
          {gameCatalog.map((game) => <Button key={game.path} asChild variant="outline" className="border-gold/50 text-foreground"><Link to={game.path}>{game.name}<ArrowRight /></Link></Button>)}
        </nav>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gameCatalog.map((game) => (
            <article key={game.path} className="overflow-hidden rounded-lg border border-border bg-card">
              <Link to={game.path} aria-label={`Guida ${game.name}`}><img src={game.image} alt={`Illustrazione editoriale: ${game.name}`} width={1200} height={640} loading="lazy" decoding="async" className="aspect-[15/8] w-full object-cover" /></Link>
              <div className="p-4">
                <h3 className="font-serif text-xl text-card-foreground">{game.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{game.description}</p>
                <Button asChild className="mt-4 w-full bg-gold text-primary-foreground hover:bg-gold/90"><Link to={game.path}>Leggi la guida {game.name}<ArrowRight /></Link></Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GameGuideNavigation({ current }: { current: string }) {
  return <nav aria-label="Altre guide ai giochi" className="mt-8 border-t border-border pt-5"><h2 className="font-serif text-xl">Altre guide ai giochi</h2><div className="mt-3 flex flex-wrap gap-2">{gameCatalog.filter((game) => game.path !== current).map((game) => <Button asChild variant="outline" key={game.path}><Link to={game.path}>{game.name}<ArrowRight /></Link></Button>)}</div></nav>;
}