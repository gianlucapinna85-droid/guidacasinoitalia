import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { RegVideo } from "./RegVideo";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="main"
      component={MainVideo}
      durationInFrames={720}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="registrazione"
      component={RegVideo}
      durationInFrames={737}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
