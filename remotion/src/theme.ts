import { loadFont as loadDisplay } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadBody } from "@remotion/google-fonts/Manrope";

export const display = loadDisplay("normal", { weights: ["700"], subsets: ["latin"] }).fontFamily;
export const body = loadBody("normal", { weights: ["400", "600", "800"], subsets: ["latin"] }).fontFamily;

export const C = {
  ink: "#0C1712",
  ink2: "#132A20",
  ivory: "#F4EFE2",
  gold: "#D9B451",
  goldSoft: "#8E7433",
  muted: "#9DB0A4",
  red: "#C0392B",
};
