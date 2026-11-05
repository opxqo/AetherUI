import type { DelegateAgent, DelegateTask, DelegateMode } from "./shared.js";
export type { DelegateAgent, DelegateTask, DelegateMode } from "./shared.js";
import * as React from "react";
export interface DelegateBoardProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "formatCost" | "tasks" | "onAssign" | "mode" | "defaultMode" | "onModeChange" | "suggestion" | "now" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, model?, avatar?, current?, rate? } – current: minutes left on the task it runs now, for the Busy until time; rate: cost per minute of work, shown after the model, as the price of a hand-off and as the total in the queues */
  "agents": DelegateAgent[];
  /** Formats every cost – swap in your currency or credits */
  "formatCost"?: (amount: number) => string;
  /** { id, title, estimate (minutes), tools?, agentId? }. In each queue the first task is the running one; past three, a +N chip lists the rest in a tooltip on hover or focus */
  "tasks": DelegateTask[];
  /** A drop, a keyboard pick or Auto. null means back to Unassigned. Without it the board moves tasks itself */
  "onAssign"?: (taskId: string, agentId: string | null) => void;
  /** Auto hands every unassigned task to the least busy agent, about one a second; Manual waits for a drag. The Auto switch sits in the bar */
  "mode"?: "auto" | "manual";
  /** Auto hands every unassigned task to the least busy agent, about one a second; Manual waits for a drag. The Auto switch sits in the bar */
  "defaultMode"?: "auto" | "manual";
  /** The Auto switch was turned on or off */
  "onModeChange"?: (mode: DelegateMode) => void;
  /** A proposed hand-off: the agent lights up and previews its new time, the task is marked */
  "suggestion"?: {taskId: string;agentId: string} | null;
  /** The clock for the Busy until times */
  "now"?: number;
  /** Heading in the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const DelegateBoard: React.FC<DelegateBoardProps | (Partial<DelegateBoardProps> & { demo: true })>;
export declare const DelegateBoardRaw: React.FC<DelegateBoardProps>;
export declare const DelegateBoardDemo: React.FC<Partial<DelegateBoardProps>>;
export default DelegateBoard;
