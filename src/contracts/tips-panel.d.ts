import * as React from "react";
export type Tip = {
  id: string;
  title: string;
  /** Short explanation – may contain a <Kbd> */
  description: React.ReactNode;
  /** Button text */
  action: string;
  /** Text after the action was taken, e.g. "Enabled" */
  doneLabel?: string;
  /** Shows the action as the dark button – use once for the most important tip */
  primary?: boolean;
  onAction?: () => void;
};


export interface KbdProps extends Omit<React.HTMLAttributes<HTMLElement>, "tips" | "title" | "onClose" | "closeLabel" | "demo" | "className" | "style" | "children"> {
  /** id, title, description, action, doneLabel, primary and onAction */
  tips?: Tip[];
  /** Heading in the gray tray (default: "Tips") */
  title?: string;
  /** Shows a Close button in the footer */
  onClose?: () => void;
  /** Text of the Close button (default: "Close") */
  closeLabel?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Tips Panel — Grid of short tips with one action each – taken tips turn into a done state
 */
export declare const Kbd: React.FC<KbdProps | (Partial<KbdProps> & { demo: true })>;
export declare const KbdRaw: React.FC<KbdProps>;
export declare const KbdDemo: React.FC<Partial<KbdProps>>;
export declare const TipsPanel: React.FC<KbdProps | (Partial<KbdProps> & { demo: true })>;
export default Kbd;
