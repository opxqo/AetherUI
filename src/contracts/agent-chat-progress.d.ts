import * as React from "react";
export interface AgentChatProgressScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentChatProgressScreen: React.FC<AgentChatProgressScreenProps | (Partial<AgentChatProgressScreenProps> & { demo: true })>;
export declare const AgentChatProgressScreenRaw: React.FC<AgentChatProgressScreenProps>;
export declare const AgentChatProgressScreenDemo: React.FC<Partial<AgentChatProgressScreenProps>>;
export declare const AgentChatProgress: React.FC<AgentChatProgressScreenProps | (Partial<AgentChatProgressScreenProps> & { demo: true })>;
export default AgentChatProgressScreen;
