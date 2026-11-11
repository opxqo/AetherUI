import * as React from "react";
export interface AgentSchedulesScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentSchedulesScreen: React.FC<AgentSchedulesScreenProps | (Partial<AgentSchedulesScreenProps> & { demo: true })>;
export declare const AgentSchedulesScreenRaw: React.FC<AgentSchedulesScreenProps>;
export declare const AgentSchedulesScreenDemo: React.FC<Partial<AgentSchedulesScreenProps>>;
export declare const AgentSchedules: React.FC<AgentSchedulesScreenProps | (Partial<AgentSchedulesScreenProps> & { demo: true })>;
export default AgentSchedulesScreen;
