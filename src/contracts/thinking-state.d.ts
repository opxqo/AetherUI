import type { ThinkingStep } from "./shared.js";
export type { ThinkingStep } from "./shared.js";
import * as React from "react";
export interface ThinkingStateProps extends Omit<React.HTMLAttributes<HTMLElement>, "steps" | "doneLabel" | "stepMs" | "loop" | "onDone" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Searches and thinking steps, revealed in order. Sources can link out (href) and show a tooltip; moreSources hide behind a “+N more” chip */
  "steps"?: ThinkingStep[];
  /** Label of the final row */
  "doneLabel"?: string;
  /** Pause between two steps, in ms */
  "stepMs"?: number;
  /** Starts over a few seconds after finishing */
  "loop"?: boolean;
  /** Called once all steps are done */
  "onDone"?: (seconds: number) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ThinkingState: React.FC<ThinkingStateProps | (Partial<ThinkingStateProps> & { demo: true })>;
export declare const ThinkingStateRaw: React.FC<ThinkingStateProps>;
export declare const ThinkingStateDemo: React.FC<Partial<ThinkingStateProps>>;
export default ThinkingState;
