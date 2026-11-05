import * as React from "react";
export type ToolCallStatus = "running" | "success" | "error";

export type ToolCallCardProps = {
  demo?: boolean;
  ref?: React.Ref<HTMLElement>;
  /** Tool name as the agent calls it, shown in mono – e.g. "search_web" */
  name: string;
  /** Short human summary – e.g. "Searched the web for 'CRM pricing 2026'" */
  summary?: React.ReactNode;
  /** Icon in the tile on the left – defaults to a wrench */
  icon?: React.ReactNode;
  status: ToolCallStatus;
  /** Arguments the tool was called with – objects are pretty-printed, JSON strings parsed */
  args?: unknown;
  /** What the tool returned – objects are pretty-printed, JSON strings parsed, other text shown as is */
  result?: unknown;
  /** Error message, shown when status is "error" */
  error?: string;
  /** When the call started (ms since epoch, e.g. Date.now()) – the live timer counts from here */
  startedAt?: number;
  /** Final duration in ms – otherwise measured while the card shows "running" */
  duration?: number;
  /** Start expanded (uncontrolled) */
  defaultOpen?: boolean;
  /** Expanded state (controlled) */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Opens the card when the call fails and closes it again on the next run, unless someone toggled it */
  openOnError?: boolean;
  /** Shows a Retry button next to the error */
  onRetry?: () => void;
  /** Height in px after which arguments and result are capped with a fade and "Show all" */
  maxCodeHeight?: number;
  className?: string;
};

export type ToolCallGroupProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** ToolCallCard elements – the group reads their name, icon, status and duration */
  children: React.ReactNode;
  /** Label once all calls are done – defaults to "Used 3 tools" */
  label?: string;
  /** Label while unknown call is running */
  runningLabel?: string;
  /** Total duration in ms – otherwise the sum of the cards' durations, or the time measured while running */
  duration?: number;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};
/**
 * Tool Call Card — An agent's tool call in one line – live timer, status and summary, folds open to highlighted arguments and result with copy, retry on errors and a group that sums them up
 */
export declare const ToolCallCard: React.FC<ToolCallCardProps | (Partial<ToolCallCardProps> & { demo: true })>;
export declare const ToolCallCardRaw: React.FC<ToolCallCardProps>;
export declare const ToolCallCardDemo: React.FC<Partial<ToolCallCardProps>>;
export declare const ToolCallGroup: React.FC<ToolCallCardProps | (Partial<ToolCallCardProps> & { demo: true })>;
export default ToolCallCard;
