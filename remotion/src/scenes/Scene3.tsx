import { AbsoluteFill } from "remotion";
import { Backdrop, Reveal, Eyebrow } from "../components";
import { C, display, body } from "../theme";

const items = [
  "Permettere di provare la piattaforma in un ambiente regolamentato",
  "Completare la verifica dell'identità prevista dalla normativa",
  "Differenziarsi rispetto agli altri concessionari ADM",
  "Costruire un rapporto di lungo periodo con l'utente",
];

export const Scene3: React.FC = () => (
  <AbsoluteFill style={{ fontFamily: body }}>
    <Backdrop />
    <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 90, alignItems: "center" }}>
        <div style={{ width: 620 }}>
          <Reveal>
            <Eyebrow>02 · Il motivo</Eyebrow>
          </Reveal>
          <Reveal delay={8} y={50}>
            <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 88, margin: "28px 0 0", lineHeight: 1.05 }}>
              Perché viene <span style={{ color: C.gold }}>offerto</span>
            </h2>
          </Reveal>
          <Reveal delay={20}>
            <p style={{ color: C.muted, fontSize: 30, marginTop: 24, lineHeight: 1.45 }}>
              Non è un regalo: è uno strumento commerciale regolato, con condizioni pubblicate dall'operatore.
            </p>
          </Reveal>
        </div>
        <div style={{ flex: 1 }}>
          {items.map((t, i) => (
            <Reveal key={t} delay={16 + i * 11} y={44}>
              <div
                style={{
                  display: "flex",
                  gap: 22,
                  alignItems: "center",
                  borderLeft: `3px solid ${C.gold}`,
                  padding: "22px 26px",
                  marginBottom: 18,
                  background: "rgba(217,180,81,0.07)",
                  borderRadius: "0 16px 16px 0",
                }}
              >
                <div style={{ color: C.gold, fontFamily: display, fontSize: 40 }}>+</div>
                <div style={{ color: C.ivory, fontSize: 32, lineHeight: 1.3 }}>{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);
