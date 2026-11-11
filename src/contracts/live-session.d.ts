import * as React from "react";
export interface LiveSessionProps extends Omit<React.HTMLAttributes<HTMLElement>, "demo" | "className" | "style" | "children" | "ref"> {
  agent?: { name: string; avatar?: string; status?: string };
  status?: "connecting" | "active" | "paused" | "ended";
  audio?: boolean;
  video?: boolean;
  onEnd?: () => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const LiveSession: React.FC<LiveSessionProps | (Partial<LiveSessionProps> & { demo: true })>;
export declare const LiveSessionRaw: React.FC<LiveSessionProps>;
export declare const LiveSessionDemo: React.FC<Partial<LiveSessionProps>>;
export default LiveSession;
