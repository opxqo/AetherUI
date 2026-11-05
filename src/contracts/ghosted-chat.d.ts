import * as React from "react";
export type GhostedChatProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Ghosted Chat — Unanswered chat messages marked as read, with a thumbs-down reply on hover
 */
export declare const GhostedChat: React.FC<GhostedChatProps | (Partial<GhostedChatProps> & { demo: true })>;
export declare const GhostedChatRaw: React.FC<GhostedChatProps>;
export declare const GhostedChatDemo: React.FC<Partial<GhostedChatProps>>;

export default GhostedChat;
