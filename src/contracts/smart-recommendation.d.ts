import * as React from "react";
export type Recommendation = {
  id: string;
  /** Short name, used in the accept button, e.g. "Incremental sync" */
  label: string;
  /** One sentence why – shown in the card */
  reason: React.ReactNode;
  /** 0 = no signal, 1 = weak, 2 = good, 3 = strong */
  signal: 0 | 1 | 2 | 3;
};

export type SmartRecommendationProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  title?: string;
  /** First entry is the recommendation, the rest are offered as alternatives */
  options: Recommendation[];
  onAccept?: (option: Recommendation) => void;
  onUndo?: (option: Recommendation) => void;
  defaultOpen?: boolean;
  className?: string;
};
/**
 * Smart Recommendation — Suggestion card with a confidence signal, alternatives to switch to and accept with undo
 */
export declare const SmartRecommendation: React.FC<SmartRecommendationProps | (Partial<SmartRecommendationProps> & { demo: true })>;
export declare const SmartRecommendationRaw: React.FC<SmartRecommendationProps>;
export declare const SmartRecommendationDemo: React.FC<Partial<SmartRecommendationProps>>;

export default SmartRecommendation;
