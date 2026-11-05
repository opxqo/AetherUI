import * as React from "react";

export interface NotificationStackProps {
  /** id, badge, title, text, action ({ label, href, onClick, external }) and pattern */
  notices?: any;
  /** Called when a notice is dismissed with its close button */
  onDismiss?: any;
  /** Extra class on the stack */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Notification Stack — Notice cards stacked behind each other – dismiss the front one to reveal the next
 */
export declare const NotificationStack: React.FC<NotificationStackProps>;
export declare const NotificationStackRaw: React.FC<NotificationStackProps>;
export declare const NotificationStackDemo: React.FC<NotificationStackProps>;

export default NotificationStack;
