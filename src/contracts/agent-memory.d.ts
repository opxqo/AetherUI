import * as React from "react";
export interface AgentMemoryScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentMemoryScreen: React.FC<AgentMemoryScreenProps | (Partial<AgentMemoryScreenProps> & { demo: true })>;
export declare const AgentMemoryScreenRaw: React.FC<AgentMemoryScreenProps>;
export declare const AgentMemoryScreenDemo: React.FC<Partial<AgentMemoryScreenProps>>;
export declare const AgentMemory: React.FC<AgentMemoryScreenProps | (Partial<AgentMemoryScreenProps> & { demo: true })>;
export default AgentMemoryScreen;
