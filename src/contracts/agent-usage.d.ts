import * as React from "react";
export interface AgentUsageScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentUsageScreen: React.FC<AgentUsageScreenProps | (Partial<AgentUsageScreenProps> & { demo: true })>;
export declare const AgentUsageScreenRaw: React.FC<AgentUsageScreenProps>;
export declare const AgentUsageScreenDemo: React.FC<Partial<AgentUsageScreenProps>>;
export declare const AgentUsage: React.FC<AgentUsageScreenProps | (Partial<AgentUsageScreenProps> & { demo: true })>;
export default AgentUsageScreen;
