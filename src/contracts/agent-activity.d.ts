import * as React from "react";
export interface AgentActivityScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentActivityScreen: React.FC<AgentActivityScreenProps | (Partial<AgentActivityScreenProps> & { demo: true })>;
export declare const AgentActivityScreenRaw: React.FC<AgentActivityScreenProps>;
export declare const AgentActivityScreenDemo: React.FC<Partial<AgentActivityScreenProps>>;
export declare const AgentActivity: React.FC<AgentActivityScreenProps | (Partial<AgentActivityScreenProps> & { demo: true })>;
export default AgentActivityScreen;
