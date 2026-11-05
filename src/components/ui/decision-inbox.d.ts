import * as React from "react";

export type Decision = Record<string, any>;

export interface DecisionInboxProps {
  /** id, title, detail, primary and secondary answer, and collapsed to start folded */
  decisions?: Decision[];
  /** Called when someone picks an answer */
  onDecide?: (decision, answer: "primary" | "secondary") => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Decision Inbox — Open decisions with two quick answers each – answered ones confirm and fold away
 */
export declare const DecisionInbox: React.FC<DecisionInboxProps>;
export declare const DecisionInboxRaw: React.FC<DecisionInboxProps>;
export declare const DecisionInboxDemo: React.FC<DecisionInboxProps>;

export default DecisionInbox;
