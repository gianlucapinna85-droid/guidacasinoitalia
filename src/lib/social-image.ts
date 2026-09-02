/**
 * Immagine di anteprima social condivisa.
 *
 * Non viene dichiarata in __root.tsx: il root concatena i propri meta in ogni
 * rotta e sovrascriverebbe le anteprime specifiche di pagina. Ogni rotta la
 * include tramite `socialImageMeta()`.
 */
import ogAsset from "@/assets/og-guidacasino.jpg.asset.json";

export const SOCIAL_IMAGE_URL = `https://www.guidacasino-italia.it${ogAsset.url}`;

export function socialImageMeta(url: string = SOCIAL_IMAGE_URL) {
  return [
    { property: "og:image", content: url },
    { name: "twitter:image", content: url },
  ];
}
