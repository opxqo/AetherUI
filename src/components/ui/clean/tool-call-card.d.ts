import * as React from "react";

export interface ToolCallCardProps {
  /** Tool name as the agent calls it, shown in mono – e.g. "search_web" */
  name?: string;
  /** Spinner with a live timer, check with the duration, or a red "Failed" */
  status?: "running" | "success" | "error";
  /** Short human summary next to the name; truncates with an ellipsis */
  summary?: ReactNode;
  /** Icon in the tile on the left – a 16px stroke SVG fits best (default: wrench icon) */
  icon?: ReactNode;
  /** Arguments – objects are pretty-printed and highlighted, JSON strings are parsed; the section is hidden when undefined */
  args?: unknown;
  /** What the tool returned – like args; other strings are shown as plain text. While running without a result, "Waiting for result…" is shown */
  result?: unknown;
  /** Error message, shown in the body when status is "error" */
  error?: string;
  /** Start time in ms since epoch – the live timer counts from here instead of from when the card turned running */
  startedAt?: number;
  /** Final duration in ms – otherwise the time measured while the card was running */
  duration?: number;
  /** Start expanded (uncontrolled) (default: false) */
  defaultOpen?: boolean;
  /** Expanded state (controlled) */
  open?: boolean;
  /** Called when the header is toggled */
  onOpenChange?: (open: boolean) => void;
  /** Opens the card when the call fails and closes it on the next run, unless someone toggled it by hand (uncontrolled only) (default: true) */
  openOnError?: boolean;
  /** Shows a Retry button next to the error message */
  onRetry?: () => void;
  /** Height in px after which arguments and result are capped with a fade and a "Show all" toggle (default: 220) */
  maxCodeHeight?: number;
  /** The cards – the group reads their icon, status and duration props for its header, so pass them as direct children */
  "ToolCallGroup · children"?: React.ReactNode;
  /** Header label once nothing is running (default: "Used N tools") */
  "ToolCallGroup · label"?: string;
  /** Shimmering header label while any card is running (default: "Using tools…") */
  "ToolCallGroup · runningLabel"?: string;
  /** Total in ms – otherwise the sum of the cards' duration props, or the time measured while any card was running */
  "ToolCallGroup · duration"?: number;
  /** Expanded state, uncontrolled or controlled (default: false) */
  "ToolCallGroup · defaultOpen / open / onOpenChange"?: boolean | boolean | ((open: any) => void);
  /** Extra class on the root */
  "ToolCallGroup · className"?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Tool Call Card — An agent's tool call in one line – live timer, status and summary, folds open to highlighted arguments and result with copy, retry on errors and a group that sums them up
 */
export declare const ToolCallCard: React.FC<ToolCallCardProps>;
export declare const ToolCallCardRaw: React.FC<ToolCallCardProps>;
export declare const ToolCallCardDemo: React.FC<ToolCallCardProps>;
export declare const ToolCallGroup: React.FC<ToolCallCardProps>;
export default ToolCallCard;
