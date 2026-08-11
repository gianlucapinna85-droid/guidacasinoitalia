/**
 * Immagine di anteprima social condivisa.
 *
 * Non viene dichiarata in __root.tsx: il root concatena i propri meta in ogni
 * rotta e sovrascriverebbe le anteprime specifiche di pagina. Ogni rotta la
 * include tramite `socialImageMeta()`.
 */
export const SOCIAL_IMAGE_URL =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/cf8e0514-8e16-4a73-b5c2-c762d8a04391";

export function socialImageMeta(url: string = SOCIAL_IMAGE_URL) {
  return [
    { property: "og:image", content: url },
    { name: "twitter:image", content: url },
  ];
}
