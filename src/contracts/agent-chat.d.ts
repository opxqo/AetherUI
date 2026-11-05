import * as React from "react";
export interface AgentChatScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with the label of a sidebar item */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentChatScreen: React.FC<AgentChatScreenProps | (Partial<AgentChatScreenProps> & { demo: true })>;
export declare const AgentChatScreenRaw: React.FC<AgentChatScreenProps>;
export declare const AgentChatScreenDemo: React.FC<Partial<AgentChatScreenProps>>;
export declare const AgentChat: React.FC<AgentChatScreenProps | (Partial<AgentChatScreenProps> & { demo: true })>;
export default AgentChatScreen;
