import * as React from "react";

export interface AgentChatScreenProps {
  /** Called with the label of a sidebar item */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: string;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: { name: string; avatar?: string };
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * AI Chat / Agents — Chat with an orchestrating agent, the agents at work, and a brief to fill in beside it
 */
export declare const AgentChatScreen: React.FC<AgentChatScreenProps>;
export declare const AgentChatScreenRaw: React.FC<AgentChatScreenProps>;
export declare const AgentChatScreenDemo: React.FC<AgentChatScreenProps>;
export declare const AgentChat: React.FC<AgentChatScreenProps>;
export default AgentChatScreen;
