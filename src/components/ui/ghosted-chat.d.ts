import * as React from "react";

export interface GhostedChatProps {
  /** Accessible description of the illustration (default: "A chat with three unanswered messages…") */
  label?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Ghosted Chat — Unanswered chat messages marked as read, with a thumbs-down reply on hover
 */
export declare const GhostedChat: React.FC<GhostedChatProps>;
export declare const GhostedChatRaw: React.FC<GhostedChatProps>;
export declare const GhostedChatDemo: React.FC<GhostedChatProps>;

export default GhostedChat;
