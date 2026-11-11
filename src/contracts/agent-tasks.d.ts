import * as React from "react";
export interface AgentTasksScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentTasksScreen: React.FC<AgentTasksScreenProps | (Partial<AgentTasksScreenProps> & { demo: true })>;
export declare const AgentTasksScreenRaw: React.FC<AgentTasksScreenProps>;
export declare const AgentTasksScreenDemo: React.FC<Partial<AgentTasksScreenProps>>;
export declare const AgentTasks: React.FC<AgentTasksScreenProps | (Partial<AgentTasksScreenProps> & { demo: true })>;
export default AgentTasksScreen;
