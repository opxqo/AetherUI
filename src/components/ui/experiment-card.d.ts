import * as React from "react";

export type ExperimentVariant = Record<string, any>;
export type ExperimentMetric = Record<string, any>;
export type ExperimentTone = Record<string, any>;

export interface ExperimentCardProps {
  /** Name of the experiment */
  title?: string;
  /** { id, key, name, values, control?, visitors?, confidence?, color? } – values and confidence hold one number per metric id; key is the short letter in the badge */
  variants?: ExperimentVariant[];
  /** { id, label, format?, lowerIsBetter? } – the switch above the rows; no switch with a single metric */
  metrics?: ExperimentMetric[];
  /** Controlled metric id */
  metric?: string;
  /** Starting metric when uncontrolled (default: first metric) */
  defaultMetric?: string;
  /** Called with the new metric */
  onMetricChange?: (id: string) => void;
  /** Controlled id of the picked variant */
  winner?: string | null;
  /** Picked variant when uncontrolled (default: null) */
  defaultWinner?: string | null;
  /** Called when a variant is picked, or null when the pick is taken back */
  onWinnerChange?: (id: string | null) => void;
  /** The tag under the title – tone is red, amber, green, blue, violet or gray */
  status?: { label: string; tone?: ExperimentTone };
  /** Short text next to the status, e.g. "Day 9 of 14" */
  note?: string;
  /** The button that appears on the tray once a winner is picked */
  action?: { label: string | ((variant: any) => string); onClick: (variant: any) => void };
  /** The line on the tray while nothing is hovered or picked (default: "Pick a winner") */
  hint?: ReactNode;
  /** Hover opens under the mouse; taps and the keyboard always toggle (default: "hover") */
  trigger?: "hover" | "click";
  /** Controlled open state */
  open?: boolean;
  /** Starts open when uncontrolled (default: false) */
  defaultOpen?: boolean;
  /** Called when the card opens or closes */
  onOpenChange?: (open: boolean) => void;
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
