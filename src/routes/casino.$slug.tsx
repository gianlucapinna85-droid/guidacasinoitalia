import { createFileRoute, redirect, notFound } from "@tanstack/react-router";
import { operators } from "@/lib/operators";

/**
 * Alias /casino/<slug> -> /operatori/<slug> (redirect 301 permanente).
 * La scheda operatore canonica resta /operatori/<slug>: si evita così
 * contenuto duplicato mantenendo raggiungibile anche il percorso /casino/.
 */
export const Route = createFileRoute("/casino/$slug")({
  beforeLoad: ({ params }) => {
    const op = operators.find((o) => o.slug === params.slug);
    if (!op) throw notFound();
    throw redirect({ to: "/operatori/$slug", params: { slug: op.slug }, statusCode: 301 });
  },
  component: () => null,
});
