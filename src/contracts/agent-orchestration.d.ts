import * as React from "react";
export interface AgentOrchestrationScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentOrchestrationScreen: React.FC<AgentOrchestrationScreenProps | (Partial<AgentOrchestrationScreenProps> & { demo: true })>;
export declare const AgentOrchestrationScreenRaw: React.FC<AgentOrchestrationScreenProps>;
export declare const AgentOrchestrationScreenDemo: React.FC<Partial<AgentOrchestrationScreenProps>>;
export declare const AgentOrchestration: React.FC<AgentOrchestrationScreenProps | (Partial<AgentOrchestrationScreenProps> & { demo: true })>;
export default AgentOrchestrationScreen;
