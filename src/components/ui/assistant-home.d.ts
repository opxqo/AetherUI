import * as React from "react";

export interface AssistantHomeScreenProps {
  /** Called with the label of a sidebar item or project */
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
 * AI Chat / Start — AI assistant start page: greeting, prompt box with tools, connected apps and suggestions
 */
export declare const AssistantHomeScreen: React.FC<AssistantHomeScreenProps>;
export declare const AssistantHomeScreenRaw: React.FC<AssistantHomeScreenProps>;
export declare const AssistantHomeScreenDemo: React.FC<AssistantHomeScreenProps>;
export declare const AssistantHome: React.FC<AssistantHomeScreenProps>;
export default AssistantHomeScreen;
