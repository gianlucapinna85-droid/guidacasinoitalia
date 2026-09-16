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

  async function onGoogle() {
    setBusy(true);
    setMsg(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setBusy(false);
      return setMsg("Accesso con Google non riuscito. Riprova.");
    }
    if (result.redirected) return;
    navigate({ to: "/admin/exit-popup" });
  }

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
          <div className="flex items-center gap-2 py-1" aria-hidden="true">
            <span className="h-px flex-1 bg-border" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">oppure</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <button
            type="button"
            onClick={onGoogle}
            disabled={busy}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:bg-accent disabled:opacity-60"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"/>
              <path fill="#FBBC05" d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58v-3.1H1.29a12 12 0 0 0 0 10.78l3.98-3.09Z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.97 11.97 0 0 0 12 0 11.99 11.99 0 0 0 1.29 6.61l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"/>
            </svg>
            Accedi con Google
          </button>
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="w-full text-center text-xs text-muted-foreground underline-offset-2 hover:text-gold hover:underline"
          >
            {mode === "signin" ? "Non hai un account? Registrati" : "Hai già un account? Accedi"}
          </button>
          {mode === "signin" ? (
            <button
              type="button"
              onClick={onForgotPassword}
              disabled={busy}
              className="w-full text-center text-xs text-muted-foreground underline-offset-2 hover:text-gold hover:underline disabled:opacity-60"
            >
              Password dimenticata?
            </button>
          ) : null}
        </form>
        <p className="mt-3 text-[11px] text-muted-foreground">
          Gli account non hanno privilegi. Il ruolo di amministratore si attiva solo con il codice invito riservato della redazione.
        </p>
      </div>
    </PageShell>
  );
}
