import * as React from "react";

export interface ModelWheelProps {
  /** Models on the wheel, each with its brand mark as one SVG path; use at least 7 to keep the drum full (default: 8 popular models) */
  models?: any;
  /** Milliseconds a model stays in the middle (default: 1500) */
  hold?: any;
  /** Accessible description of the illustration (default: "AI models on a turning wheel…") */
  label?: any;
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
 * Model Wheel — AI model names on a turning drum – the rows bend away at the edges and each model lands on a soft gray fill
 */
export declare const ModelWheel: React.FC<ModelWheelProps>;
export declare const ModelWheelRaw: React.FC<ModelWheelProps>;
export declare const ModelWheelDemo: React.FC<ModelWheelProps>;

export default ModelWheel;
