import * as React from "react";
export interface SettingsSubscriptionScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with a settings page – "Members" from Manage members and the seats' +, or "Back to app" */
  "onNavigate"?: (label: string) => void;
  /** Workspace name, used by the shell */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const SettingsSubscriptionScreen: React.FC<SettingsSubscriptionScreenProps | (Partial<SettingsSubscriptionScreenProps> & { demo: true })>;
export declare const SettingsSubscriptionScreenRaw: React.FC<SettingsSubscriptionScreenProps>;
export declare const SettingsSubscriptionScreenDemo: React.FC<Partial<SettingsSubscriptionScreenProps>>;
export declare const SettingsSubscription: React.FC<SettingsSubscriptionScreenProps | (Partial<SettingsSubscriptionScreenProps> & { demo: true })>;
export default SettingsSubscriptionScreen;
