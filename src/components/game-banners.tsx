import { Link } from "@tanstack/react-router";
import { ArrowRight, Club, CircleDot, Spade, Diamond, Grid3X3, Dices, Video, CirclePlay, Cherry } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gameCatalog } from "@/data/game-catalog";

export function GameBanners() {
  const icons = [Club, CircleDot, Spade, Diamond, Grid3X3, Dices, Video, CirclePlay, Cherry];
  return (
    <section id="guide-giochi" aria-labelledby="games-heading" className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-2.5 py-4 md:px-6 md:py-5">
        <h2 id="games-heading" className="font-serif text-lg md:text-xl">Giochi da casinò</h2>
        <nav aria-label="Accesso rapido alle guide dei giochi" className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
          {gameCatalog.map((game, index) => {
            const Icon = icons[index] ?? Club;
            return (
              <Button key={game.path} asChild variant="outline" className="h-auto min-h-16 min-w-0 flex-col gap-1.5 border-gold/50 bg-gold/5 px-1.5 py-2.5 text-foreground hover:border-gold hover:bg-gold/15">
                <Link to={game.path}><Icon className="text-gold" aria-hidden="true" /><span className="whitespace-normal text-center text-xs leading-tight">{game.name}</span></Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

export function GameGuideNavigation({ current }: { current: string }) {
  return <nav aria-label="Altre guide ai giochi" className="mt-8 border-t border-border pt-5"><h2 className="font-serif text-xl">Altre guide ai giochi</h2><div className="mt-3 flex flex-wrap gap-2">{gameCatalog.filter((game) => game.path !== current).map((game) => <Button asChild variant="outline" key={game.path}><Link to={game.path}>{game.name}<ArrowRight /></Link></Button>)}</div></nav>;
}