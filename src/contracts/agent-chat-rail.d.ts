import * as React from "react";
export interface AgentChatRailScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentChatRailScreen: React.FC<AgentChatRailScreenProps | (Partial<AgentChatRailScreenProps> & { demo: true })>;
export declare const AgentChatRailScreenRaw: React.FC<AgentChatRailScreenProps>;
export declare const AgentChatRailScreenDemo: React.FC<Partial<AgentChatRailScreenProps>>;
export declare const AgentChatRail: React.FC<AgentChatRailScreenProps | (Partial<AgentChatRailScreenProps> & { demo: true })>;
export default AgentChatRailScreen;
