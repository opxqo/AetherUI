import * as React from "react";
export interface RunInspectorProps extends Omit<React.HTMLAttributes<HTMLElement>, "demo" | "className" | "style" | "children" | "ref"> {
  runId?: string;
  logs?: Array<{ at: number; level: string; message: string }>;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const RunInspector: React.FC<RunInspectorProps | (Partial<RunInspectorProps> & { demo: true })>;
export declare const RunInspectorRaw: React.FC<RunInspectorProps>;
export declare const RunInspectorDemo: React.FC<Partial<RunInspectorProps>>;
export default RunInspector;
