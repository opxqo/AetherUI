import * as React from "react";
export interface GlowKeyboardProps extends Omit<React.HTMLAttributes<HTMLElement>, "prompts" | "placeholder" | "onSubmit" | "label" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Prompts the demo types one after another; each one is sent with Enter */
  "prompts"?: string[];
  /** Placeholder of the chat input */
  "placeholder"?: string;
  /** Called when a prompt is sent with Enter – by the demo or the user */
  "onSubmit"?: (text: string) => void;
  /** Accessible name of the scene */
  "label"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const GlowKeyboard: React.FC<GlowKeyboardProps | (Partial<GlowKeyboardProps> & { demo: true })>;
export declare const GlowKeyboardRaw: React.FC<GlowKeyboardProps>;
export declare const GlowKeyboardDemo: React.FC<Partial<GlowKeyboardProps>>;
export default GlowKeyboard;
