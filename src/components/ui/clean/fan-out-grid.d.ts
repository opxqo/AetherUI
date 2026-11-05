import * as React from "react";

export interface FanoutGridProps {
  /** { id, label, status, worker?, start?, end?, cost?, attempts?, result?, error? } – one per task, in the order the cells should show */
  tasks?: any;
  /** Per task – picks the cell's tint: gray, blue with a shine, amber, green, red */
  status?: any;
  /** Per task, in ms from the start of the job – used for its duration and the time left */
  "start / end"?: any;
  /** Per task – 2 and more show in its details */
  attempts?: any;
  /** What the whole job does, next to the title – e.g. "Enrich 240 leads" */
  job?: any;
  /** How many workers run at once – the time left is worked out from it (defaults to the tasks running now) */
  workers?: any;
  /** The clock, in ms from the start of the job (default: 0) */
  now?: any;
  /** Shows "Retry failed" while tasks have failed, and gets their ids */
  onRetry?: any;
  /** A task was picked (click or Enter) – null when it's let go */
  onSelect?: any;
  /** Formats every cost (default: dollars) */
  formatCost?: any;
  /** Heading of the bar (default: "Fan-out") */
  title?: any;
  /** A small mark before the title, e.g. the agent's logo */
  icon?: any;
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
 * Fan-out Grid — One agent hands a big job to many workers – every task a cell on a live grid that fills in as they get through it, with retries, failures, cost and the time left, and the details of any task on hover
 */
export declare const FanoutGrid: React.FC<FanoutGridProps>;
export declare const FanoutGridRaw: React.FC<FanoutGridProps>;
export declare const FanoutGridDemo: React.FC<FanoutGridProps>;
export declare const FanOutGrid: React.FC<FanoutGridProps>;
export default FanoutGrid;
