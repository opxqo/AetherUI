import * as React from "react";

export interface DelegateBoardProps {
  /** { id, name, model?, avatar?, current?, rate? } – current: minutes left on the task it runs now, for the Busy until time; rate: cost per minute of work, shown after the model, as the price of a hand-off and as the total in the queues */
  agents?: any;
  /** Formats every cost – swap in your currency or credits (default: dollars, e.g. "$0.60") */
  formatCost?: any;
  /** { id, title, estimate (minutes), tools?, agentId? }. In each queue the first task is the running one; past three, a +N chip lists the rest in a tooltip on hover or focus */
  tasks?: any;
  /** A drop, a keyboard pick or Auto. null means back to Unassigned. Without it the board moves tasks itself */
  onAssign?: any;
  /** Auto hands every unassigned task to the least busy agent, about one a second; Manual waits for a drag. The Auto switch sits in the bar (default: "manual") */
  "mode / defaultMode"?: any;
  /** The Auto switch was turned on or off */
  onModeChange?: any;
  /** A proposed hand-off: the agent lights up and previews its new time, the task is marked */
  suggestion?: any;
  /** The clock for the Busy until times (default: Date.now()) */
  now?: any;
  /** Heading in the bar (default: "Delegate") */
  title?: any;
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
 * Delegate Board — Hand work to your agents by dragging it onto them – each agent previews its new “busy until” time, or switch to Auto and every new task goes to whoever is free first
 */
export declare const DelegateBoard: React.FC<DelegateBoardProps>;
export declare const DelegateBoardRaw: React.FC<DelegateBoardProps>;
export declare const DelegateBoardDemo: React.FC<DelegateBoardProps>;

export default DelegateBoard;
