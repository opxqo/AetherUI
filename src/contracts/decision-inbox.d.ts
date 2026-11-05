import * as React from "react";
export type Decision = {
  id: string;
  title: string;
  /** Short context under the title */
  detail?: string;
  /** Main answer, shown as the dark button */
  primary: string;
  /** Other answer, shown as the light button */
  secondary: string;
  /** Starts folded to one muted line – click to open */
  collapsed?: boolean;
};

export type DecisionInboxProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  decisions: Decision[];
  /** Called with the decision and the chosen answer */
  onDecide?: (decision: Decision, answer: "primary" | "secondary") => void;
  className?: string;
};

export type State = { open: boolean; answered?: string; gone?: boolean };
/**
 * Decision Inbox — Open decisions with two quick answers each – answered ones confirm and fold away
 */
export declare const DecisionInbox: React.FC<DecisionInboxProps | (Partial<DecisionInboxProps> & { demo: true })>;
export declare const DecisionInboxRaw: React.FC<DecisionInboxProps>;
export declare const DecisionInboxDemo: React.FC<Partial<DecisionInboxProps>>;

export default DecisionInbox;
