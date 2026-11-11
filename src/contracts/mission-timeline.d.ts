import * as React from "react";
export interface MissionTimelineProps extends Omit<React.HTMLAttributes<HTMLElement>, "demo" | "className" | "style" | "children" | "ref"> {
  events?: Array<{ id: string; time: string | number; title: string; detail?: string; status?: string }>;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const MissionTimeline: React.FC<MissionTimelineProps | (Partial<MissionTimelineProps> & { demo: true })>;
export declare const MissionTimelineRaw: React.FC<MissionTimelineProps>;
export declare const MissionTimelineDemo: React.FC<Partial<MissionTimelineProps>>;
export default MissionTimeline;
