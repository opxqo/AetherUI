import * as React from "react";

export interface VoiceOrbProps {
  /** What the assistant is doing – the orb melts from one state into the next (default: "idle") */
  state?: any;
  /** Loudness from 0 to 1 while listening or speaking. Without it the orb makes up a natural-looking level */
  level?: any;
  /** Edge length in px (default: 220) */
  size?: any;
  /** Number of dots – raise it for large sizes (default: 520) */
  dots?: any;
  /** Color the moving dots take on; resting dots use the text color (default: blue) */
  accent?: any;
  /** The line under the orb – false hides it, an object replaces single texts (default: true) */
  label?: any;
  /** Dots give way to the mouse pointer (default: true) */
  interactive?: any;
  /** Makes the orb a button, e.g. to start and stop listening */
  onPress?: any;
  /** Extra class on the root */
  className?: any;
  /** Inline styles on the root – set color here to change the resting dots */
  style?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Voice Orb — The face of a voice assistant – a sphere of dots that breathes, catches sound, collapses into a spinning ring while thinking and ripples when it speaks
 */
export declare const VoiceOrb: React.FC<VoiceOrbProps>;
export declare const VoiceOrbRaw: React.FC<VoiceOrbProps>;
export declare const VoiceOrbDemo: React.FC<VoiceOrbProps>;

export default VoiceOrb;
