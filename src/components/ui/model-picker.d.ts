import * as React from "react";

export type PickerModel = Record<string, any>;

export interface ModelPickerProps {
  /** { id, name, description?, icon?, speed?, quality?, cost?, latencyMs?, pricePerM? } – strengths go from 1 to 5 (cost 5 is the most expensive); leave all three out for a router like Auto and the row says "Varies" */
  models?: PickerModel[];
  /** Id of the chosen model (controlled) */
  value?: string;
  /** Chosen model when uncontrolled (default: first model) */
  defaultValue?: string;
  /** Called with the picked model's id */
  onChange?: (id: string) => void;
  /** Extended thinking switch (controlled) */
  thinking?: boolean;
  /** Starting state of the thinking switch (default: false) */
  defaultThinking?: boolean;
  /** Called when the thinking switch flips */
  onThinkingChange?: (on: boolean) => void;
  /** Web search switch (controlled) */
  webSearch?: boolean;
  /** Starting state of the web search switch (default: false) */
  defaultWebSearch?: boolean;
  /** Called when the web search switch flips */
  onWebSearchChange?: (on: boolean) => void;
  /** Thinking effort (controlled) – the control only shows while thinking is on */
  effort?: "low" | "medium" | "high";
  /** Starting effort (default: "medium") */
  defaultEffort?: "low" | "medium" | "high";
  /** Called with the new effort */
  onEffortChange?: (effort: any) => void;
  /** Controlled open state of the menu */
  open?: boolean;
  /** Starts open when uncontrolled (default: false) */
  defaultOpen?: boolean;
  /** Called when the menu opens or closes */
  onOpenChange?: (open: boolean) => void;
  /** Which edge of the trigger the menu lines up with (default: "start") */
  align?: "start" | "end";
  /** Opens below or above the trigger – use top for a composer at the bottom of the screen (default: "bottom") */
  side?: "bottom" | "top";
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Model Picker — The model menu of an AI chat – point at a model and its speed, quality and cost bars fill, switch on extended thinking and its effort unfolds, while the tray rolls the first-token time and price
 */
export declare const ModelPicker: React.FC<ModelPickerProps>;
export declare const ModelPickerRaw: React.FC<ModelPickerProps>;
export declare const ModelPickerDemo: React.FC<ModelPickerProps>;

export default ModelPicker;
