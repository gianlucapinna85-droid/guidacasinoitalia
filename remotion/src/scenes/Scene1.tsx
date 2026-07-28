import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Backdrop, Reveal, Eyebrow } from "../components";
import { C, display, body } from "../theme";

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 120], [1.06, 1]);
  return (
    <AbsoluteFill style={{ fontFamily: body }}>
      <Backdrop />
      <AbsoluteFill style={{ transform: `scale(${scale})`, padding: "0 140px", justifyContent: "center" }}>
        <Reveal delay={0}>
          <Eyebrow>Guida informativa · Casinò ADM</Eyebrow>
        </Reveal>
        <Reveal delay={10} y={60}>
          <h1
            style={{
              fontFamily: display,
              color: C.ivory,
              fontSize: 118,
              lineHeight: 1.02,
              margin: "34px 0 0",
              maxWidth: 1350,
            }}
          >
            Il bonus <span style={{ color: C.gold }}>senza deposito</span>,
            <br />
            spiegato in un minuto
          </h1>
        </Reveal>
        <Reveal delay={26}>
          <p style={{ color: C.muted, fontSize: 34, marginTop: 34, maxWidth: 1000 }}>
            Cos'è, perché i concessionari lo offrono e come funzionano davvero i requisiti di puntata.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <div style={{ marginTop: 46, height: 4, width: interpolate(frame, [40, 100], [0, 460], { extrapolateRight: "clamp" }), background: C.gold }} />
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
