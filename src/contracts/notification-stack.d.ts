import * as React from "react";
export type NoticePattern = "orbit" | "grid" | "rays";

export type Notice = {
  id: string;
  /** Small label in the pill, e.g. "Notice" */
  badge?: string;
  title: string;
  text: string;
  action?: { label: string; href?: string; onClick?: () => void; external?: boolean };
  /** Line art in the top-right corner */
  pattern?: NoticePattern;
};

export type NotificationStackProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  notices: Notice[];
  /** Called after a notice was dismissed */
  onDismiss?: (notice: Notice) => void;
  className?: string;
};
/**
 * Notification Stack — Notice cards stacked behind each other – dismiss the front one to reveal the next
 */
export declare const NotificationStack: React.FC<NotificationStackProps | (Partial<NotificationStackProps> & { demo: true })>;
export declare const NotificationStackRaw: React.FC<NotificationStackProps>;
export declare const NotificationStackDemo: React.FC<Partial<NotificationStackProps>>;

export default NotificationStack;
