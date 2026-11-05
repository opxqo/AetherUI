import * as React from "react";
export type ProgressStep = {
  id: string;
  label: string;
  done?: boolean;
  /** Small icon on the right, e.g. the app the step belongs to */
  icon?: React.ReactNode;
};

export type ProgressTrackerProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  title?: string;
  steps: ProgressStep[];
  /** Ticks the open steps one after another, then starts over – stops as soon as someone interacts */
  autoPlay?: boolean;
  /** Pause between two automatic steps, in ms */
  interval?: number;
  onChange?: (steps: ProgressStep[]) => void;
  className?: string;
};
/**
 * Progress Tracker — Onboarding checklist with an animated progress bar, ticks that draw themselves and auto play
 */
export declare const ProgressTracker: React.FC<ProgressTrackerProps | (Partial<ProgressTrackerProps> & { demo: true })>;
export declare const ProgressTrackerRaw: React.FC<ProgressTrackerProps>;
export declare const ProgressTrackerDemo: React.FC<Partial<ProgressTrackerProps>>;

export default ProgressTracker;
