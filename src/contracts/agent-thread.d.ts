import * as React from "react";
export interface AgentThreadScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentThreadScreen: React.FC<AgentThreadScreenProps | (Partial<AgentThreadScreenProps> & { demo: true })>;
export declare const AgentThreadScreenRaw: React.FC<AgentThreadScreenProps>;
export declare const AgentThreadScreenDemo: React.FC<Partial<AgentThreadScreenProps>>;
export declare const AgentThread: React.FC<AgentThreadScreenProps | (Partial<AgentThreadScreenProps> & { demo: true })>;
export default AgentThreadScreen;
