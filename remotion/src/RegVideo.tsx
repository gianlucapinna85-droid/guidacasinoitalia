import { AbsoluteFill, useCurrentFrame, interpolate, Audio, Sequence, staticFile } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { wipe } from "@remotion/transitions/wipe";
import { fade } from "@remotion/transitions/fade";
import { Backdrop, Reveal, Eyebrow } from "./components";
import { C, display, body } from "./theme";

const Vo: React.FC<{ n: number; volume?: number }> = ({ n, volume = 1 }) => (
  <Sequence from={20}>
    <Audio src={staticFile(`audio/vo-${n}.mp3`)} volume={volume} />
  </Sequence>
);

const timing = springTiming({ config: { damping: 200 }, durationInFrames: 22 });

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 120], [1.06, 1]);
  return (
    <AbsoluteFill style={{ fontFamily: body }}>
      <Backdrop />
      <Vo n={1} />
      <AbsoluteFill style={{ transform: `scale(${scale})`, padding: "0 140px", justifyContent: "center" }}>
        <Reveal delay={0}>
          <Eyebrow>Guida informativa · Casinò ADM</Eyebrow>
        </Reveal>
        <Reveal delay={10} y={60}>
          <h1
            style={{
              fontFamily: display,
              color: C.ivory,
              fontSize: 112,
              lineHeight: 1.03,
              margin: "34px 0 0",
              maxWidth: 1400,
            }}
          >
            Come <span style={{ color: C.gold }}>registrarsi</span>
            <br />
            su un sito con concessione ADM
          </h1>
        </Reveal>
        <Reveal delay={26}>
          <p style={{ color: C.muted, fontSize: 34, marginTop: 34, maxWidth: 1050 }}>
            Documenti necessari, verifica dell'identità, SPID e limiti di gioco: la procedura spiegata passo
            per passo.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <div
            style={{
              marginTop: 46,
              height: 4,
              width: interpolate(frame, [40, 100], [0, 460], { extrapolateRight: "clamp" }),
              background: C.gold,
            }}
          />
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Requisiti: React.FC = () => {
  const items = [
    "Avere compiuto 18 anni: requisito inderogabile",
    "Documento d'identità in corso di validità",
    "Codice fiscale o tessera sanitaria",
    "In alternativa: identità digitale SPID o CIE",
  ];
  return (
    <AbsoluteFill style={{ fontFamily: body }}>
      <Backdrop />
      <Vo n={2} />
      <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 90, alignItems: "center" }}>
          <div style={{ width: 620 }}>
            <Reveal>
              <Eyebrow>01 · Prima di iniziare</Eyebrow>
            </Reveal>
            <Reveal delay={8} y={50}>
              <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 88, margin: "28px 0 0", lineHeight: 1.05 }}>
                Cosa serve <span style={{ color: C.gold }}>davvero</span>
              </h2>
            </Reveal>
            <Reveal delay={20}>
              <p style={{ color: C.muted, fontSize: 30, marginTop: 24, lineHeight: 1.45 }}>
                La registrazione su un concessionario ADM è nominativa e richiede sempre l'identificazione
                del giocatore.
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
};

const Passi: React.FC = () => {
  const steps = [
    ["01", "Verifica la concessione", "Controlla il numero ADM dell'operatore sull'elenco pubblico adm.gov.it."],
    ["02", "Compila il modulo", "Dati anagrafici, codice fiscale, email e recapito telefonico."],
    ["03", "Carica il documento", "Fronte e retro leggibili, oppure accesso immediato con SPID o CIE."],
    ["04", "Imposta i limiti", "Limiti di deposito e di sessione prima della prima giocata."],
  ];
  return (
    <AbsoluteFill style={{ fontFamily: body }}>
      <Backdrop />
      <Vo n={3} />
      <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
        <Reveal>
          <Eyebrow>02 · La procedura</Eyebrow>
        </Reveal>
        <Reveal delay={8} y={50}>
          <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 88, margin: "26px 0 44px" }}>
            Quattro <span style={{ color: C.gold }}>passaggi</span>
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, maxWidth: 1560 }}>
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={16 + i * 10} y={44}>
              <div
                style={{
                  border: "1px solid rgba(244,239,226,0.12)",
                  background: "rgba(244,239,226,0.04)",
                  borderRadius: 22,
                  padding: "30px 34px",
                }}
              >
                <div style={{ color: C.gold, fontFamily: display, fontSize: 46 }}>{n}</div>
                <div style={{ color: C.ivory, fontSize: 34, marginTop: 10, fontWeight: 600 }}>{t}</div>
                <div style={{ color: C.muted, fontSize: 26, marginTop: 10, lineHeight: 1.4 }}>{d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Verifica: React.FC = () => (
  <AbsoluteFill style={{ fontFamily: body }}>
    <Backdrop />
      <Vo n={4} />
    <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
      <Reveal>
        <Eyebrow>03 · Verifica e conto gioco</Eyebrow>
      </Reveal>
      <Reveal delay={8} y={50}>
        <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 84, margin: "26px 0 30px", maxWidth: 1400, lineHeight: 1.06 }}>
          Il conto è attivo solo dopo la <span style={{ color: C.gold }}>convalida</span> dei documenti
        </h2>
      </Reveal>
      <Reveal delay={22}>
        <p style={{ color: C.muted, fontSize: 32, lineHeight: 1.5, maxWidth: 1400 }}>
          La verifica dell'identità è imposta dalla normativa antiriciclaggio e serve a impedire l'accesso ai
          minori. Fino al completamento, il conto di gioco resta limitato e non è possibile prelevare. Anche
          l'eventuale bonus senza deposito viene accreditato solo a verifica conclusa.
        </p>
      </Reveal>
      <Reveal delay={40}>
        <div
          style={{
            marginTop: 46,
            display: "flex",
            gap: 22,
            flexWrap: "wrap",
          }}
        >
          {["Un solo conto per persona", "Nessun conto intestato a terzi", "Dati sempre veritieri"].map((t) => (
            <div
              key={t}
              style={{
                border: `1px solid ${C.goldSoft}`,
                color: C.ivory,
                borderRadius: 999,
                padding: "16px 30px",
                fontSize: 28,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </Reveal>
    </AbsoluteFill>
  </AbsoluteFill>
);

const Chiusura: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 18) * 0.015;
  const checks = [
    "Registrati solo su siti con concessione ADM",
    "Attiva subito i limiti di deposito",
    "Conserva le credenziali e non condividerle",
    "Puoi aderire in ogni momento al RUA",
  ];
  return (
    <AbsoluteFill style={{ fontFamily: body }}>
      <Backdrop />
      <Vo n={5} />
      <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
        <Reveal>
          <Eyebrow>04 · Da ricordare</Eyebrow>
        </Reveal>
        <Reveal delay={8} y={50}>
          <h2 style={{ fontFamily: display, color: C.ivory, fontSize: 88, margin: "26px 0 40px" }}>
            Quattro <span style={{ color: C.gold }}>promemoria</span>
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
              border: "1px solid rgba(192,57,43,0.6)",
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
              Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica. Contenuto
              informativo, non promozionale. Numero verde <strong>800 558822</strong>.
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

export const RegVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.ink }}>
    <Audio src={staticFile("audio/music.mp3")} volume={0.16} loop />
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={732}>
        <Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={1085}>
        <Requisiti />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={1087}>
        <Passi />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={1095}>
        <Verifica />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={1221}>
        <Chiusura />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
