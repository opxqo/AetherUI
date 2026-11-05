import * as React from "react";

export type PanelComment = Record<string, any>;
export type CommentAuthor = Record<string, any>;

export interface CommentsPanelProps {
  /** id, author ({ name, avatar }), createdAt and text – text starting with /edit becomes a runnable edit */
  comments?: PanelComment[];
  /** Author of new comments */
  currentUser?: CommentAuthor;
  /** Runs an edit; the button shows Running… until the promise settles */
  onRunEdit?: (comment: any) => Promise<void> | void;
  /** Called with every new comment */
  onAdd?: (comment: any) => void;
  /** Shows a close button */
  onClose?: () => void;
  /** Heading in the gray tray (default: "Comments") */
  title?: string;
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
