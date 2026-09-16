import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Reimposta password | Guida Casinò Italia" },
      {
        name: "description",
        content: "Scegli una nuova password per il tuo account di Guida Casinò Italia.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Reimposta password | Guida Casinò Italia" },
      { property: "og:description", content: "Scegli una nuova password per il tuo account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let done = false;
    // Il link dell'email porta un token nella URL: il client Supabase lo
    // converte in sessione di recupero, a volte poco dopo il montaggio.
    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session && !done) {
        done = true;
        setValid(true);
        setReady(true);
      }
    };
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") void check();
    });
    void check();
    const t = setTimeout(() => setReady(true), 2500);
    return () => {
      clearTimeout(t);
      sub.subscription.unsubscribe();
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (password.length < 8) return setMsg("La password deve avere almeno 8 caratteri.");
    if (password !== confirm) return setMsg("Le due password non coincidono.");
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) return setMsg(error.message);
    setMsg("Password aggiornata. Ti stiamo portando all'area riservata…");
    setTimeout(() => navigate({ to: "/admin/exit-popup" }), 1200);
  }

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-md px-4 py-12">
        <h1 className="font-serif text-2xl">Reimposta la password</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Scegli una nuova password per il tuo account.
        </p>

        {ready && !valid ? (
          <div className="mt-6 rounded-2xl border border-border bg-card p-4">
            <p className="text-sm">
              Il link di reimpostazione non è valido o è scaduto. Richiedine uno nuovo dalla pagina
              di accesso.
            </p>
            <button
              type="button"
              onClick={() => navigate({ to: "/auth" })}
              className="mt-3 w-full rounded-lg bg-gold px-3 py-2.5 text-sm font-bold text-primary-foreground"
            >
              Torna all'accesso
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-6 space-y-3 rounded-2xl border border-border bg-card p-4"
          >
            <div>
              <label
                htmlFor="new-password"
                className="text-xs uppercase tracking-wide text-muted-foreground"
              >
                Nuova password
              </label>
              <input
                id="new-password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="text-xs uppercase tracking-wide text-muted-foreground"
              >
                Conferma password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            {msg ? <p className="text-xs text-gold">{msg}</p> : null}
            <button
              type="submit"
              disabled={busy || !valid}
              className="w-full rounded-lg bg-gold px-3 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-60"
            >
              {busy ? "Attendere…" : "Salva nuova password"}
            </button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
