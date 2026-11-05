import * as React from "react";

export interface KbdProps {
  /** id, title, description, action, doneLabel, primary and onAction */
  tips?: any;
  /** Heading in the gray tray (default: "Tips") */
  title?: any;
  /** Shows a Close button in the footer */
  onClose?: any;
  /** Text of the Close button (default: "Close") */
  closeLabel?: any;
  /** Extra class on the tray */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Tips Panel — Grid of short tips with one action each – taken tips turn into a done state
 */
export declare const Kbd: React.FC<KbdProps>;
export declare const KbdRaw: React.FC<KbdProps>;
export declare const KbdDemo: React.FC<KbdProps>;
export declare const TipsPanel: React.FC<KbdProps>;
export default Kbd;
