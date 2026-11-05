import type { CommentAuthor, PanelComment } from "./shared.js";
export type { CommentAuthor, PanelComment } from "./shared.js";
import * as React from "react";
export interface CommentsPanelProps extends Omit<React.HTMLAttributes<HTMLElement>, "comments" | "currentUser" | "onRunEdit" | "onAdd" | "onClose" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** id, author ({ name, avatar }), createdAt and text – text starting with /edit becomes a runnable edit */
  "comments": PanelComment[];
  /** Author of new comments */
  "currentUser": CommentAuthor;
  /** Runs an edit; the button shows Running… until the promise settles */
  "onRunEdit"?: (comment: PanelComment) => Promise<void> | void;
  /** Called with every new comment */
  "onAdd"?: (comment: PanelComment) => void;
  /** Shows a close button */
  "onClose"?: () => void;
  /** Heading in the gray tray */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const CommentsPanel: React.FC<CommentsPanelProps | (Partial<CommentsPanelProps> & { demo: true })>;
export declare const CommentsPanelRaw: React.FC<CommentsPanelProps>;
export declare const CommentsPanelDemo: React.FC<Partial<CommentsPanelProps>>;
export default CommentsPanel;
