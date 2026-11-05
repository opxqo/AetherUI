import * as React from "react";

export interface ThinkingStateProps {
  /** Searches and thinking steps, revealed in order. Sources can link out (href) and show a tooltip; moreSources hide behind a “+N more” chip */
  steps?: any;
  /** Label of the final row (default: "Finished thinking") */
  doneLabel?: any;
  /** Pause between two steps, in ms (default: 1300) */
  stepMs?: any;
  /** Starts over a few seconds after finishing (default: false) */
  loop?: any;
  /** Called once all steps are done */
  onDone?: any;
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
 * Thinking State — AI working panel with a live timer, searched sources and thinking steps that appear one by one
 */
export declare const ThinkingState: React.FC<ThinkingStateProps>;
export declare const ThinkingStateRaw: React.FC<ThinkingStateProps>;
export declare const ThinkingStateDemo: React.FC<ThinkingStateProps>;

export default ThinkingState;
