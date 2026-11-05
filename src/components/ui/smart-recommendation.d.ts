import * as React from "react";

export interface SmartRecommendationProps {
  /** The first is recommended, the rest are alternatives – id, label, reason and signal (0–3) */
  options?: any;
  /** Called when an option is accepted */
  onAccept?: any;
  /** Called when an accept is undone */
  onUndo?: any;
  /** Starts with the reason visible (default: true) */
  defaultOpen?: any;
  /** Heading of the card (default: "Smart recommendation") */
  title?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Smart Recommendation — Suggestion card with a confidence signal, alternatives to switch to and accept with undo
 */
export declare const SmartRecommendation: React.FC<SmartRecommendationProps>;
export declare const SmartRecommendationRaw: React.FC<SmartRecommendationProps>;
export declare const SmartRecommendationDemo: React.FC<SmartRecommendationProps>;

export default SmartRecommendation;
