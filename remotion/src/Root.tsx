import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { RegVideo } from "./RegVideo";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="main"
      component={MainVideo}
      durationInFrames={2852}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="registrazione"
      component={RegVideo}
      durationInFrames={5132}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
