import * as React from "react";
export interface WorkflowBuilderScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const WorkflowBuilderScreen: React.FC<WorkflowBuilderScreenProps | (Partial<WorkflowBuilderScreenProps> & { demo: true })>;
export declare const WorkflowBuilderScreenRaw: React.FC<WorkflowBuilderScreenProps>;
export declare const WorkflowBuilderScreenDemo: React.FC<Partial<WorkflowBuilderScreenProps>>;
export declare const WorkflowBuilder: React.FC<WorkflowBuilderScreenProps | (Partial<WorkflowBuilderScreenProps> & { demo: true })>;
export default WorkflowBuilderScreen;
