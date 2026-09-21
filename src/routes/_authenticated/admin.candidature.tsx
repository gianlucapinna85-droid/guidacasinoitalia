import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { PageShell } from "@/components/site-layout";
import { sendOutreachEmail } from "@/lib/outreach.functions";

export const Route = createFileRoute("/_authenticated/admin/candidature")({
  head: () => ({
    meta: [
      { title: "Candidature redazioni | Guida Casinò Italia" },
      { name: "description", content: "Invio delle candidature editoriali alle redazioni." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CandidatureAdmin,
});

const CANDIDATURE = [
  {
    template: "outreach-jamma" as const,
    testata: "JAMMA",
    destinatario: "redazione@jamma.it",
    oggetto: "Trasparenza dei bonus ADM: un monitoraggio pubblico su requisiti e scadenze",
  },
  {
    template: "outreach-agipronews" as const,
    testata: "Agipronews",
    destinatario: "info@agipro.it",
    oggetto: "Segnalazione dati — Osservatorio sui bonus dei concessionari ADM",
  },
];

function CandidatureAdmin() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [esiti, setEsiti] = useState<Record<string, string>>({});

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      const uid = userData.user?.id;
      if (!uid) return setIsAdmin(false);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(Boolean(data));
    })();
  }, []);

  const invia = async (template: (typeof CANDIDATURE)[number]["template"]) => {
    setBusy(template);
    try {
      const res = await sendOutreachEmail({ data: { template } });
      setEsiti((p) => ({ ...p, [template]: res.detail }));
    } catch (e: any) {
      setEsiti((p) => ({ ...p, [template]: e?.message ?? "Errore imprevisto" }));
    } finally {
      setBusy(null);
    }
  };

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-2 text-2xl font-bold">Candidature alle redazioni</h1>
        <p className="mb-8 text-sm opacity-80">
          Invio delle email dell'Osservatorio Bonus ADM. Testi e destinatari sono fissi;
          ogni invio è registrato e non duplicabile.
        </p>
        {isAdmin === false && <p>Accesso riservato agli amministratori.</p>}
        {isAdmin && (
          <ul className="space-y-6">
            {CANDIDATURE.map((c) => (
              <li key={c.template} className="rounded-lg border p-5">
                <h2 className="text-lg font-semibold">{c.testata}</h2>
                <p className="text-sm">A: {c.destinatario}</p>
                <p className="mb-4 text-sm opacity-80">Oggetto: {c.oggetto}</p>
                <button
                  type="button"
                  disabled={busy !== null}
                  onClick={() => invia(c.template)}
                  className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50"
                >
                  {busy === c.template ? "Invio in corso…" : `Invia a ${c.testata}`}
                </button>
                {esiti[c.template] && (
                  <p className="mt-3 text-sm" role="status">{esiti[c.template]}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
    </PageShell>
  );
}
