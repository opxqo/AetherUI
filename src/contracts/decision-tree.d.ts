import type { DecisionText, DecisionOption, Decision, DecisionTreeHandle } from "./shared.js";
export type { DecisionText, DecisionOption, Decision, DecisionTreeHandle } from "./shared.js";
import * as React from "react";
export interface DecisionTreeProps extends Omit<React.HTMLAttributes<HTMLElement>, "decisions" | "options" | "effects" | "risk" | "onChoose" | "allowOther" | "ref" | "title" | "demo" | "className" | "style" | "children"> {
  /** { id, question, context?, agent, model?, icon?, risk?, options } – everything waiting for a call; decided ones leave, new ids join at the end */
  "decisions": Decision[];
  /** Per decision, two to four – { label, effects?, pick? }; effects are what the branch leads to, one line each; pick marks the agent's own preference */
  "options"?: DecisionOption[];
  /** Per option – a string, or an array of strings and { text, note, source? } flags; flags are marked and explain themselves on hover, focus or F */
  "effects"?: DecisionText[];
  /** Per decision – high and medium show as a small tag next to the agent */
  "risk"?: "high" | "medium" | "low";
  /** A branch was picked ({ index, option }) or an instruction written ({ other }) – for an instruction, return the agent's short answer */
  "onChoose"?: (decision: Decision, choice: DecisionOption | { text: string }) => string | void | Promise<string | void>;
  /** Shows the "Other…" branch for your own instruction */
  "allowOther"?: boolean;
  /** hover, choose, setOther, send, next, previous, peek */
  "ref"?: React.Ref<DecisionTreeHandle>;
  /** Heading of the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare const DecisionTree: React.FC<DecisionTreeProps | (Partial<DecisionTreeProps> & { demo: true })>;
export declare const DecisionTreeRaw: React.FC<DecisionTreeProps>;
export declare const DecisionTreeDemo: React.FC<Partial<DecisionTreeProps>>;
export default DecisionTree;
