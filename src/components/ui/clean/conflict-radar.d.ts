import * as React from "react";

export interface ConflictRadarProps {
  /** One column each: name, model or branch, a mark, and whether it's still working */
  agents?: any;
  /** One row each, with every agent's edit – the lines it changes, whether it's still writing, and for conflicts its way in one sentence */
  files?: any;
  /** Heading in the bar (default: "Parallel work") */
  title?: any;
  /** The agent picked per conflicting file – leave it out and the component keeps the picks itself */
  resolved?: any;
  /** A way was picked for a conflict */
  onResolve?: any;
  /** Merge was clicked – it's only enabled once every conflict is settled and every agent is done */
  onMerge?: any;
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
 * Conflict Radar — Agents working on their own branches at once, and where they get in each other's way – a row per file and a column per agent, a line between the agents that changed the same lines, each agent's way in one sentence to pick from, and Merge once all are settled
 */
export declare const ConflictRadar: React.FC<ConflictRadarProps>;
export declare const ConflictRadarRaw: React.FC<ConflictRadarProps>;
export declare const ConflictRadarDemo: React.FC<ConflictRadarProps>;

export default ConflictRadar;
