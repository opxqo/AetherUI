import * as React from "react";
export interface VoiceOrbProps extends Omit<React.HTMLAttributes<HTMLElement>, "state" | "level" | "size" | "dots" | "accent" | "label" | "interactive" | "onPress" | "demo" | "className" | "style" | "children" | "ref"> {
  /** What the assistant is doing – the orb melts from one state into the next */
  "state"?: "idle" | "listening" | "thinking" | "speaking";
  /** Loudness from 0 to 1 while listening or speaking. Without it the orb makes up a natural-looking level */
  "level"?: number;
  /** Edge length in px */
  "size"?: number;
  /** Number of dots – raise it for large sizes */
  "dots"?: number;
  /** Color the moving dots take on; resting dots use the text color */
  "accent"?: string;
  /** The line under the orb – false hides it, an object replaces single texts */
  "label"?: boolean | Partial<Record<"idle" | "listening" | "thinking" | "speaking", string>>;
  /** Dots give way to the mouse pointer */
  "interactive"?: boolean;
  /** Makes the orb a button, e.g. to start and stop listening */
  "onPress"?: () => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const VoiceOrb: React.FC<VoiceOrbProps | (Partial<VoiceOrbProps> & { demo: true })>;
export declare const VoiceOrbRaw: React.FC<VoiceOrbProps>;
export declare const VoiceOrbDemo: React.FC<Partial<VoiceOrbProps>>;
export default VoiceOrb;
