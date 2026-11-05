import type { RadarAgent, RadarFile } from "./shared.js";
export type { RadarAgent, RadarFile } from "./shared.js";
import * as React from "react";
export interface ConflictRadarProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "files" | "title" | "resolved" | "onResolve" | "onMerge" | "demo" | "className" | "style" | "children" | "ref"> {
  /** One column each: name, model or branch, a mark, and whether it's still working */
  "agents"?: RadarAgent[];
  /** One row each, with every agent's edit – the lines it changes, whether it's still writing, and for conflicts its way in one sentence */
  "files"?: RadarFile[];
  /** Heading in the bar */
  "title"?: string;
  /** The agent picked per conflicting file – leave it out and the component keeps the picks itself */
  "resolved"?: Record<string, string>;
  /** A way was picked for a conflict */
  "onResolve"?: (path: string, agentId: string) => void;
  /** Merge was clicked – it's only enabled once every conflict is settled and every agent is done */
  "onMerge"?: () => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ConflictRadar: React.FC<ConflictRadarProps | (Partial<ConflictRadarProps> & { demo: true })>;
export declare const ConflictRadarRaw: React.FC<ConflictRadarProps>;
export declare const ConflictRadarDemo: React.FC<Partial<ConflictRadarProps>>;
export default ConflictRadar;
