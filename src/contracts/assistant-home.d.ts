import * as React from "react";
export interface AssistantHomeScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with the label of a sidebar item or project */
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
export declare const AssistantHomeScreen: React.FC<AssistantHomeScreenProps | (Partial<AssistantHomeScreenProps> & { demo: true })>;
export declare const AssistantHomeScreenRaw: React.FC<AssistantHomeScreenProps>;
export declare const AssistantHomeScreenDemo: React.FC<Partial<AssistantHomeScreenProps>>;
export declare const AssistantHome: React.FC<AssistantHomeScreenProps | (Partial<AssistantHomeScreenProps> & { demo: true })>;
export default AssistantHomeScreen;
