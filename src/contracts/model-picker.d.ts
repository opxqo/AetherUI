import type { Id, PickerModel } from "./shared.js";
export type { Id, PickerModel } from "./shared.js";
import * as React from "react";
export interface ModelPickerProps extends Omit<React.HTMLAttributes<HTMLElement>, "models" | "value" | "defaultValue" | "onChange" | "thinking" | "defaultThinking" | "onThinkingChange" | "webSearch" | "defaultWebSearch" | "onWebSearchChange" | "effort" | "defaultEffort" | "onEffortChange" | "open" | "defaultOpen" | "onOpenChange" | "align" | "side" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, description?, icon?, speed?, quality?, cost?, latencyMs?, pricePerM? } – strengths go from 1 to 5 (cost 5 is the most expensive); leave all three out for a router like Auto and the row says "Varies" */
  "models": PickerModel[];
  /** Id of the chosen model (controlled) */
  "value"?: string;
  /** Chosen model when uncontrolled */
  "defaultValue"?: string;
  /** Called with the picked model's id */
  "onChange"?: (id: string) => void;
  /** Extended thinking switch (controlled) */
  "thinking"?: boolean;
  /** Starting state of the thinking switch */
  "defaultThinking"?: boolean;
  /** Called when the thinking switch flips */
  "onThinkingChange"?: (on: boolean) => void;
  /** Web search switch (controlled) */
  "webSearch"?: boolean;
  /** Starting state of the web search switch */
  "defaultWebSearch"?: boolean;
  /** Called when the web search switch flips */
  "onWebSearchChange"?: (on: boolean) => void;
  /** Thinking effort (controlled) – the control only shows while thinking is on */
  "effort"?: "low" | "medium" | "high";
  /** Starting effort */
  "defaultEffort"?: "low" | "medium" | "high";
  /** Called with the new effort */
  "onEffortChange"?: (effort: "low" | "medium" | "high") => void;
  /** Controlled open state of the menu */
  "open"?: boolean;
  /** Starts open when uncontrolled */
  "defaultOpen"?: boolean;
  /** Called when the menu opens or closes */
  "onOpenChange"?: (open: boolean) => void;
  /** Which edge of the trigger the menu lines up with */
  "align"?: "start" | "end";
  /** Opens below or above the trigger – use top for a composer at the bottom of the screen */
  "side"?: "bottom" | "top";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ModelPicker: React.FC<ModelPickerProps | (Partial<ModelPickerProps> & { demo: true })>;
export declare const ModelPickerRaw: React.FC<ModelPickerProps>;
export declare const ModelPickerDemo: React.FC<Partial<ModelPickerProps>>;
export default ModelPicker;
