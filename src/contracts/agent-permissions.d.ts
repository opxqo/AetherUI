import * as React from "react";
export interface AgentPermissionsScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentPermissionsScreen: React.FC<AgentPermissionsScreenProps | (Partial<AgentPermissionsScreenProps> & { demo: true })>;
export declare const AgentPermissionsScreenRaw: React.FC<AgentPermissionsScreenProps>;
export declare const AgentPermissionsScreenDemo: React.FC<Partial<AgentPermissionsScreenProps>>;
export declare const AgentPermissions: React.FC<AgentPermissionsScreenProps | (Partial<AgentPermissionsScreenProps> & { demo: true })>;
export default AgentPermissionsScreen;
