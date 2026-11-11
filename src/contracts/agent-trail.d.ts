import * as React from "react";
export type TrailStepState = "done" | "running" | "pending" | "waiting" | "failed";
export interface TrailSubstep { id?: string; title: string; state?: TrailStepState; detail?: string }
export interface TrailStep { id: string; title: string; state: TrailStepState; duration?: number | string; status?: string; startedAt?: number; gate?: boolean; substeps?: TrailSubstep[] }
export interface AgentTrailLabels { title?: string; running?: string; approval?: string; waiting?: string; failed?: string; done?: string; pending?: string; empty?: string; untitled?: string; earlier?: string; more?: string; fewer?: string }
export interface AgentTrailProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "demo" | "className" | "style" | "children" | "ref"> {
  steps?: TrailStep[];
  title?: string;
  expanded?: string[];
  onExpandedChange?: (ids: string[]) => void;
  labels?: Partial<AgentTrailLabels>;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentTrail: React.FC<AgentTrailProps | (Partial<AgentTrailProps> & { demo: true })>;
export declare const AgentTrailRaw: React.FC<AgentTrailProps>;
export declare const AgentTrailDemo: React.FC<Partial<AgentTrailProps>>;
export default AgentTrail;
