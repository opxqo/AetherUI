import * as React from "react";

export interface ProgressTrackerProps {
  /** Each step has an id, a label, an optional done flag and icon */
  steps?: any;
  /** Heading above the bar (default: "Getting started") */
  title?: any;
  /** Ticks the open steps one by one and starts over – stops when someone clicks or types (default: false) */
  autoPlay?: any;
  /** Pause between two automatic steps, in ms (default: 2200) */
  interval?: any;
  /** Called with every step and its state */
  onChange?: any;
  /** Extra class on the card */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Progress Tracker — Onboarding checklist with an animated progress bar, ticks that draw themselves and auto play
 */
export declare const ProgressTracker: React.FC<ProgressTrackerProps>;
export declare const ProgressTrackerRaw: React.FC<ProgressTrackerProps>;
export declare const ProgressTrackerDemo: React.FC<ProgressTrackerProps>;

export default ProgressTracker;
