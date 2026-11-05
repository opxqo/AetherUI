import type { ExperimentVariant, ExperimentMetric, ExperimentTone } from "./shared.js";
export type { ExperimentVariant, ExperimentMetric, ExperimentTone } from "./shared.js";
import * as React from "react";
export interface ExperimentCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "variants" | "metrics" | "metric" | "defaultMetric" | "onMetricChange" | "winner" | "defaultWinner" | "onWinnerChange" | "status" | "note" | "action" | "hint" | "trigger" | "open" | "defaultOpen" | "onOpenChange" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Name of the experiment */
  "title"?: string;
  /** { id, key, name, values, control?, visitors?, confidence?, color? } – values and confidence hold one number per metric id; key is the short letter in the badge */
  "variants": ExperimentVariant[];
  /** { id, label, format?, lowerIsBetter? } – the switch above the rows; no switch with a single metric */
  "metrics": ExperimentMetric[];
  /** Controlled metric id */
  "metric"?: string;
  /** Starting metric when uncontrolled */
  "defaultMetric"?: string;
  /** Called with the new metric */
  "onMetricChange"?: (id: string) => void;
  /** Controlled id of the picked variant */
  "winner"?: string | null;
  /** Picked variant when uncontrolled */
  "defaultWinner"?: string | null;
  /** Called when a variant is picked, or null when the pick is taken back */
  "onWinnerChange"?: (id: string | null) => void;
  /** The tag under the title – tone is red, amber, green, blue, violet or gray */
  "status"?: { label: string; tone?: ExperimentTone };
  /** Short text next to the status, e.g. "Day 9 of 14" */
  "note"?: string;
  /** The button that appears on the tray once a winner is picked */
  "action"?: { label: string | ((variant: ExperimentVariant) => string); onClick: (variant: ExperimentVariant) => void };
  /** The line on the tray while nothing is hovered or picked */
  "hint"?: React.ReactNode;
  /** Hover opens under the mouse; taps and the keyboard always toggle */
  "trigger"?: "hover" | "click";
  /** Controlled open state */
  "open"?: boolean;
  /** Starts open when uncontrolled */
  "defaultOpen"?: boolean;
  /** Called when the card opens or closes */
  "onOpenChange"?: (open: boolean) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ExperimentCard: React.FC<ExperimentCardProps | (Partial<ExperimentCardProps> & { demo: true })>;
export declare const ExperimentCardRaw: React.FC<ExperimentCardProps>;
export declare const ExperimentCardDemo: React.FC<Partial<ExperimentCardProps>>;
export default ExperimentCard;
