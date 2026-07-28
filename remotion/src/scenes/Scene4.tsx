import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { Backdrop, Reveal, Eyebrow } from "../components";
import { C, display, body } from "../theme";

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const count = spring({ frame: frame - 40, fps, config: { damping: 200 }, durationInFrames: 60 });
  const euro = Math.round(interpolate(count, [0, 1], [10, 300]));
  const barW = interpolate(count, [0, 1], [0, 100]);

  return (
    <AbsoluteFill style={{ fontFamily: body }}>
      <Backdrop />
      <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
        <Reveal>
          <Eyebrow>03 · Requisiti di puntata</Eyebrow>
        </Reveal>
        <Reveal delay={8} y={50}>
          <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 90, margin: "26px 0 0" }}>
            Come funziona il <span style={{ color: C.gold }}>wagering</span>
          </h2>
        </Reveal>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 60, marginTop: 56 }}>
          <Reveal delay={24}>
            <div style={{ color: C.muted, fontSize: 28 }}>Bonus</div>
            <div style={{ color: C.ivory, fontFamily: display, fontSize: 96 }}>10 €</div>
          </Reveal>
          <Reveal delay={30}>
            <div style={{ color: C.gold, fontFamily: display, fontSize: 72, paddingBottom: 18 }}>× 30</div>
          </Reveal>
          <Reveal delay={36}>
            <div>
              <div style={{ color: C.muted, fontSize: 28 }}>Volume di gioco richiesto</div>
              <div style={{ color: C.gold, fontFamily: display, fontSize: 128, lineHeight: 1 }}>{euro} €</div>
            </div>
          </Reveal>
        </div>

        <div style={{ marginTop: 44, height: 16, background: "rgba(244,239,226,0.10)", borderRadius: 999, overflow: "hidden", maxWidth: 1400 }}>
          <div style={{ width: `${barW}%`, height: "100%", background: `linear-gradient(90deg, ${C.goldSoft}, ${C.gold})` }} />
        </div>

        <Reveal delay={72}>
          <p style={{ color: C.muted, fontSize: 30, marginTop: 34, maxWidth: 1350, lineHeight: 1.45 }}>
            Solo dopo aver completato il volume di gioco previsto le eventuali vincite diventano prelevabili,
            nei limiti indicati dai Termini e Condizioni: giochi ammessi, scadenza, puntata massima e tetto di vincita.
          </p>
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
