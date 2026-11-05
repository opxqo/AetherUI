import * as React from "react";

export interface DecisionTreeProps {
  /** { id, question, context?, agent, model?, icon?, risk?, options } – everything waiting for a call; decided ones leave, new ids join at the end */
  decisions?: any;
  /** Per decision, two to four – { label, effects?, pick? }; effects are what the branch leads to, one line each; pick marks the agent's own preference */
  options?: any;
  /** Per option – a string, or an array of strings and { text, note, source? } flags; flags are marked and explain themselves on hover, focus or F */
  effects?: any;
  /** Per decision – high and medium show as a small tag next to the agent */
  risk?: any;
  /** A branch was picked ({ index, option }) or an instruction written ({ other }) – for an instruction, return the agent's short answer */
  onChoose?: any;
  /** Shows the "Other…" branch for your own instruction (default: true) */
  allowOther?: any;
  /** hover, choose, setOther, send, next, previous, peek */
  ref?: any;
  /** Heading of the bar (default: "Decisions") */
  title?: any;
  /** Extra class on the root */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Decision Tree — An agent stuck on a decision lays out its options as a tree – the consequences of each branch, the risky ones marked, its own pick highlighted – and you choose a path or write your own
 */
export declare const DecisionTree: React.FC<DecisionTreeProps>;
export declare const DecisionTreeRaw: React.FC<DecisionTreeProps>;
export declare const DecisionTreeDemo: React.FC<DecisionTreeProps>;

export default DecisionTree;
