import * as React from "react";

export interface ModelPickerProps {
  /** { id, name, description?, icon?, speed?, quality?, cost?, latencyMs?, pricePerM? } – strengths go from 1 to 5 (cost 5 is the most expensive); leave all three out for a router like Auto and the row says "Varies" */
  models?: any;
  /** Id of the chosen model (controlled) */
  value?: any;
  /** Chosen model when uncontrolled (default: first model) */
  defaultValue?: any;
  /** Called with the picked model's id */
  onChange?: any;
  /** Extended thinking switch (controlled) */
  thinking?: any;
  /** Starting state of the thinking switch (default: false) */
  defaultThinking?: any;
  /** Called when the thinking switch flips */
  onThinkingChange?: any;
  /** Web search switch (controlled) */
  webSearch?: any;
  /** Starting state of the web search switch (default: false) */
  defaultWebSearch?: any;
  /** Called when the web search switch flips */
  onWebSearchChange?: any;
  /** Thinking effort (controlled) – the control only shows while thinking is on */
  effort?: any;
  /** Starting effort (default: "medium") */
  defaultEffort?: any;
  /** Called with the new effort */
  onEffortChange?: any;
  /** Controlled open state of the menu */
  open?: any;
  /** Starts open when uncontrolled (default: false) */
  defaultOpen?: any;
  /** Called when the menu opens or closes */
  onOpenChange?: any;
  /** Which edge of the trigger the menu lines up with (default: "start") */
  align?: any;
  /** Opens below or above the trigger – use top for a composer at the bottom of the screen (default: "bottom") */
  side?: any;
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
 * Model Picker — The model menu of an AI chat – point at a model and its speed, quality and cost bars fill, switch on extended thinking and its effort unfolds, while the tray rolls the first-token time and price
 */
export declare const ModelPicker: React.FC<ModelPickerProps>;
export declare const ModelPickerRaw: React.FC<ModelPickerProps>;
export declare const ModelPickerDemo: React.FC<ModelPickerProps>;

export default ModelPicker;
