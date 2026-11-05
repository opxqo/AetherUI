import * as React from "react";
export type WheelModel = { name: string; viewBox: string; color: string; d: string };

export type ModelWheelProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Models on the wheel – brand marks as a single SVG path; at least 7 keep the drum full */
  models?: WheelModel[];
  /** Milliseconds a model stays selected before the wheel turns on */
  hold?: number;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Model Wheel — AI model names on a turning drum – the rows bend away at the edges and each model lands on a soft gray fill
 */
export declare const ModelWheel: React.FC<ModelWheelProps | (Partial<ModelWheelProps> & { demo: true })>;
export declare const ModelWheelRaw: React.FC<ModelWheelProps>;
export declare const ModelWheelDemo: React.FC<Partial<ModelWheelProps>>;

export default ModelWheel;
