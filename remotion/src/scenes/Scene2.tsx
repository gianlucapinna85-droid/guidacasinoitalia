import { AbsoluteFill } from "remotion";
import { Backdrop, Reveal, Eyebrow } from "../components";
import { C, display, body } from "../theme";

export const Scene2: React.FC = () => (
  <AbsoluteFill style={{ fontFamily: body }}>
    <Backdrop />
    <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
      <Reveal>
        <Eyebrow>01 · Definizione</Eyebrow>
      </Reveal>
      <Reveal delay={8} y={50}>
        <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 92, margin: "30px 0 0", maxWidth: 1200 }}>
          Un credito di gioco <span style={{ color: C.gold }}>senza versamento</span>
        </h2>
      </Reveal>
      <div style={{ display: "flex", gap: 30, marginTop: 56 }}>
        {[
          ["Registrazione", "Apertura del conto di gioco presso un operatore con concessione ADM."],
          ["Verifica identità", "Invio del documento: obbligo di legge, tutela dei minori e antiriciclaggio."],
          ["Accredito", "Credito o free spin riconosciuti senza alcun deposito di denaro."],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={20 + i * 9} y={60} style={{ flex: 1 }}>
            <div
              style={{
                border: "1px solid rgba(244,239,226,0.14)",
                background: "rgba(244,239,226,0.04)",
                borderRadius: 20,
                padding: "34px 32px",
                height: 300,
              }}
            >
              <div style={{ color: C.gold, fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ color: C.ivory, fontSize: 40, fontWeight: 800, marginTop: 14 }}>{t}</div>
              <div style={{ color: C.muted, fontSize: 27, marginTop: 16, lineHeight: 1.4 }}>{d}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);
