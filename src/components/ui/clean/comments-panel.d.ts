import * as React from "react";

export interface CommentsPanelProps {
  /** id, author ({ name, avatar }), createdAt and text – text starting with /edit becomes a runnable edit */
  comments?: any;
  /** Author of new comments */
  currentUser?: any;
  /** Runs an edit; the button shows Running… until the promise settles */
  onRunEdit?: any;
  /** Called with every new comment */
  onAdd?: any;
  /** Shows a close button */
  onClose?: any;
  /** Heading in the gray tray (default: "Comments") */
  title?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Comments Panel — Comment feed with filters, runnable /edit commands, resolve and a composer
 */
export declare const CommentsPanel: React.FC<CommentsPanelProps>;
export declare const CommentsPanelRaw: React.FC<CommentsPanelProps>;
export declare const CommentsPanelDemo: React.FC<CommentsPanelProps>;

export default CommentsPanel;
