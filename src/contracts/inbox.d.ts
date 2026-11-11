import * as React from "react";
export interface InboxScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const InboxScreen: React.FC<InboxScreenProps | (Partial<InboxScreenProps> & { demo: true })>;
export declare const InboxScreenRaw: React.FC<InboxScreenProps>;
export declare const InboxScreenDemo: React.FC<Partial<InboxScreenProps>>;
export declare const Inbox: React.FC<InboxScreenProps | (Partial<InboxScreenProps> & { demo: true })>;
export default InboxScreen;
