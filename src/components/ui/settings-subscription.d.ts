import * as React from "react";

export interface SettingsSubscriptionScreenProps {
  /** Called with a settings page – "Members" from Manage members and the seats' +, or "Back to app" */
  onNavigate?: (label: string) => void;
  /** Workspace name, used by the shell (default: "Acme") */
  workspace?: string;
  /** Account at the bottom of the sidebar */
  user?: { name: string; avatar?: string };
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Settings / Billing — Billing in the settings: the plan with the upcoming bill and usage, plans with monthly or yearly pricing and an add-on, billing address and card, invoices and cancel
 */
export declare const SettingsSubscriptionScreen: React.FC<SettingsSubscriptionScreenProps>;
export declare const SettingsSubscriptionScreenRaw: React.FC<SettingsSubscriptionScreenProps>;
export declare const SettingsSubscriptionScreenDemo: React.FC<SettingsSubscriptionScreenProps>;
export declare const SettingsSubscription: React.FC<SettingsSubscriptionScreenProps>;
export default SettingsSubscriptionScreen;
