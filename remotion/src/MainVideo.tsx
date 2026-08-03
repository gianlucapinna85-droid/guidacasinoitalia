import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { wipe } from "@remotion/transitions/wipe";
import { fade } from "@remotion/transitions/fade";
import { Scene1 } from "./scenes/Scene1";
import { Scene2 } from "./scenes/Scene2";
import { Scene3 } from "./scenes/Scene3";
import { Scene4 } from "./scenes/Scene4";
import { Scene5 } from "./scenes/Scene5";
import { C } from "./theme";

const timing = springTiming({ config: { damping: 200 }, durationInFrames: 22 });

const Vo: React.FC<{ n: number }> = ({ n }) => (
  <Sequence from={20}>
    <Audio src={staticFile(`audio/bonus-vo-${n}.mp3`)} />
  </Sequence>
);

export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.ink }}>
    <Audio src={staticFile("audio/music.mp3")} volume={0.16} loop />
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={509}>
        <Scene1 />
        <Vo n={1} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={537}>
        <Scene2 />
        <Vo n={2} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={538}>
        <Scene3 />
        <Vo n={3} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={612}>
        <Scene4 />
        <Vo n={4} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={744}>
        <Scene5 />
        <Vo n={5} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
