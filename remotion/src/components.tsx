import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { C } from "./theme";

export const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 90) * 40;
  const drift2 = Math.cos(frame / 120) * 60;
  return (
    <AbsoluteFill style={{ backgroundColor: C.ink }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(1200px 800px at ${20 + drift / 6}% ${10}%, ${C.ink2} 0%, transparent 60%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(900px 700px at ${85}% ${80 + drift2 / 20}%, rgba(217,180,81,0.16) 0%, transparent 60%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -200 + drift,
          top: -120,
          width: 700,
          height: 700,
          border: `1px solid rgba(217,180,81,0.18)`,
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -260 - drift2,
          bottom: -260,
          width: 900,
          height: 900,
          border: `1px solid rgba(244,239,226,0.07)`,
          borderRadius: "50%",
        }}
      />
    </AbsoluteFill>
  );
};

export const Reveal: React.FC<{
  delay?: number;
  y?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ delay = 0, y = 40, children, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  const blur = interpolate(s, [0, 1], [12, 0]);
  return (
    <div
      style={{
        opacity: s,
        transform: `translateY(${interpolate(s, [0, 1], [y, 0])}px)`,
        filter: `blur(${blur}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      display: "inline-block",
      border: `1px solid ${C.gold}`,
      color: C.gold,
      padding: "10px 22px",
      borderRadius: 999,
      letterSpacing: 6,
      fontSize: 20,
      textTransform: "uppercase",
      fontWeight: 800,
    }}
  >
    {children}
  </div>
);
