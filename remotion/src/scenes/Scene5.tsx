import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Backdrop, Reveal, Eyebrow } from "../components";
import { C, display, body } from "../theme";

const checks = [
  "Verifica la concessione ADM sul sito adm.gov.it",
  "Leggi per intero i Termini e Condizioni",
  "Controlla wagering, scadenza e giochi ammessi",
  "Attiva gli strumenti di autolimitazione",
];

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 18) * 0.015;
  const zoom = interpolate(frame, [0, 160], [1, 1.04]);
  return (
    <AbsoluteFill style={{ fontFamily: body }}>
      <Backdrop />
      <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center", transform: `scale(${zoom})` }}>
        <Reveal>
          <Eyebrow>04 · Prima di aderire</Eyebrow>
        </Reveal>
        <Reveal delay={8} y={50}>
          <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 88, margin: "26px 0 40px" }}>
            Quattro <span style={{ color: C.gold }}>controlli</span> essenziali
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, maxWidth: 1500 }}>
          {checks.map((t, i) => (
            <Reveal key={t} delay={18 + i * 8} y={40}>
              <div style={{ display: "flex", gap: 20, alignItems: "center", color: C.ivory, fontSize: 31 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    border: `2px solid ${C.gold}`,
                    color: C.gold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <span>{t}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={70} y={50}>
          <div
            style={{
              marginTop: 62,
              display: "flex",
              alignItems: "center",
              gap: 30,
              border: `1px solid rgba(192,57,43,0.6)`,
              background: "rgba(192,57,43,0.12)",
              borderRadius: 22,
              padding: "28px 34px",
              maxWidth: 1500,
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                background: C.red,
                color: "#fff",
                fontWeight: 800,
                fontSize: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transform: `scale(${pulse})`,
              }}
            >
              18+
            </div>
            <div style={{ color: C.ivory, fontSize: 28, lineHeight: 1.4 }}>
              Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica.
              Contenuto informativo, non promozionale. Numero verde <strong>800 558822</strong>.
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div style={{ color: C.gold, fontFamily: display, fontSize: 44, marginTop: 44, letterSpacing: 1 }}>
            guidacasino-italia.it
          </div>
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
