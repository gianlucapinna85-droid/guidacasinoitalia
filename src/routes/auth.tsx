import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useServerFn } from "@tanstack/react-start";
import { claimAdminWithInvite } from "@/lib/admin-access.functions";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Area riservata | Guida Casinò Italia" },
      { name: "description", content: "Accesso riservato alla redazione di Guida Casinò Italia." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Area riservata | Guida Casinò Italia" },
      { property: "og:description", content: "Accesso riservato alla redazione." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const claimAdmin = useServerFn(claimAdminWithInvite);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invite, setInvite] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin/exit-popup" });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setMsg(error.message);
      navigate({ to: "/admin/exit-popup" });
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin/exit-popup` },
      });
      if (error) {
        setBusy(false);
        return setMsg(error.message);
      }
      let extra = "";
      if (data.session) {
        const res = await claimAdmin({ data: { code: invite } });
        extra = ` ${res.message}`;
      } else {
        extra = " Conferma l'email, accedi e ripeti l'attivazione con il codice invito.";
      }
      setBusy(false);
      setMsg(`Registrazione completata.${extra}`);
      setMode("signin");
    }
  }


  return (
    <PageShell>
      <div className="mx-auto w-full max-w-md px-4 py-12">
        <h1 className="font-serif text-2xl">Area riservata</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Accesso alla dashboard del popup exit-intent.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-3 rounded-2xl border border-border bg-card p-4">
          <div>
            <label htmlFor="email" className="text-xs uppercase tracking-wide text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs uppercase tracking-wide text-muted-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            />
          </div>
          {mode === "signup" ? (
            <div>
              <label htmlFor="invite" className="text-xs uppercase tracking-wide text-muted-foreground">
                Codice invito redazione
              </label>
              <input
                id="invite"
                type="password"
                required
                minLength={8}
                value={invite}
                onChange={(e) => setInvite(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
          ) : null}
          {msg ? <p className="text-xs text-gold">{msg}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-gold px-3 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-60"
          >
            {busy ? "Attendere…" : mode === "signin" ? "Accedi" : "Crea account"}
          </button>
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="w-full text-center text-xs text-muted-foreground underline-offset-2 hover:text-gold hover:underline"
          >
            {mode === "signin" ? "Non hai un account? Registrati" : "Hai già un account? Accedi"}
          </button>
        </form>
        <p className="mt-3 text-[11px] text-muted-foreground">
          Gli account non hanno privilegi. Il ruolo di amministratore si attiva solo con il codice invito riservato della redazione.
        </p>
      </div>
    </PageShell>
  );
}
