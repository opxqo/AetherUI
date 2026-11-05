import * as React from "react";

export interface GlowKeyboardProps {
  /** Prompts the demo types one after another; each one is sent with Enter (default: three hiking prompts) */
  prompts?: string[];
  /** Placeholder of the chat input (default: "Ask AI anything...") */
  placeholder?: string;
  /** Called when a prompt is sent with Enter – by the demo or the user */
  onSubmit?: (text: string) => void;
  /** Accessible name of the scene (default: "AI chat input above a glass keyboard…") */
  label?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Glow Keyboard — AI chat input that types itself over a glass keyboard – every key press sends a wave up the gradient floor
 */
export declare const GlowKeyboard: React.FC<GlowKeyboardProps>;
export declare const GlowKeyboardRaw: React.FC<GlowKeyboardProps>;
export declare const GlowKeyboardDemo: React.FC<GlowKeyboardProps>;

export default GlowKeyboard;
