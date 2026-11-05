import * as React from "react";

export interface ExperimentCardProps {
  /** Name of the experiment */
  title?: any;
  /** { id, key, name, values, control?, visitors?, confidence?, color? } – values and confidence hold one number per metric id; key is the short letter in the badge */
  variants?: any;
  /** { id, label, format?, lowerIsBetter? } – the switch above the rows; no switch with a single metric */
  metrics?: any;
  /** Controlled metric id */
  metric?: any;
  /** Starting metric when uncontrolled (default: first metric) */
  defaultMetric?: any;
  /** Called with the new metric */
  onMetricChange?: any;
  /** Controlled id of the picked variant */
  winner?: any;
  /** Picked variant when uncontrolled (default: null) */
  defaultWinner?: any;
  /** Called when a variant is picked, or null when the pick is taken back */
  onWinnerChange?: any;
  /** The tag under the title – tone is red, amber, green, blue, violet or gray */
  status?: any;
  /** Short text next to the status, e.g. "Day 9 of 14" */
  note?: any;
  /** The button that appears on the tray once a winner is picked */
  action?: any;
  /** The line on the tray while nothing is hovered or picked (default: "Pick a winner") */
  hint?: any;
  /** Hover opens under the mouse; taps and the keyboard always toggle (default: "hover") */
  trigger?: any;
  /** Controlled open state */
  open?: any;
  /** Starts open when uncontrolled (default: false) */
  defaultOpen?: any;
  /** Called when the card opens or closes */
  onOpenChange?: any;
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
 * Experiment Card — An A/B test in two lines that quietly unfolds on hover – variants linked to a tiny chart, a metric switch with rolling numbers, and a winner you pick with a click
 */
export declare const ExperimentCard: React.FC<ExperimentCardProps>;
export declare const ExperimentCardRaw: React.FC<ExperimentCardProps>;
export declare const ExperimentCardDemo: React.FC<ExperimentCardProps>;

export default ExperimentCard;
