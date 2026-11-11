import * as React from "react";
export interface AssistantOverviewScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AssistantOverviewScreen: React.FC<AssistantOverviewScreenProps | (Partial<AssistantOverviewScreenProps> & { demo: true })>;
export declare const AssistantOverviewScreenRaw: React.FC<AssistantOverviewScreenProps>;
export declare const AssistantOverviewScreenDemo: React.FC<Partial<AssistantOverviewScreenProps>>;
export declare const AssistantOverview: React.FC<AssistantOverviewScreenProps | (Partial<AssistantOverviewScreenProps> & { demo: true })>;
export default AssistantOverviewScreen;
