import * as React from "react";
export type RunningTaskState = "running" | "paused" | "needs-you" | "done";
export interface RunningTask { id: string; title: string; step?: string; done?: number; total?: number; state: RunningTaskState }
export interface RunningNowProps extends Omit<React.HTMLAttributes<HTMLElement>, "onPause" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  tasks?: RunningTask[];
  onPause?: (id: string) => void;
  onResume?: (id: string) => void;
  onOpen?: (id: string) => void;
  onOpenAll?: () => void;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "end";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const RunningNow: React.FC<RunningNowProps | (Partial<RunningNowProps> & { demo: true })>;
export declare const RunningNowRaw: React.FC<RunningNowProps>;
export declare const RunningNowDemo: React.FC<Partial<RunningNowProps>>;
export default RunningNow;
