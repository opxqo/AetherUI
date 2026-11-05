import * as React from "react";

export type Recommendation = Record<string, any>;

export interface SmartRecommendationProps {
  /** The first is recommended, the rest are alternatives – id, label, reason and signal (0–3) */
  options?: Recommendation[];
  /** Called when an option is accepted */
  onAccept?: (option: any) => void;
  /** Called when an accept is undone */
  onUndo?: (option: any) => void;
  /** Starts with the reason visible (default: true) */
  defaultOpen?: boolean;
  /** Heading of the card (default: "Smart recommendation") */
  title?: string;
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
