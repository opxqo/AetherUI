import * as React from "react";

export type ThreadMessage = Record<string, any>;
export type ThreadAuthor = Record<string, any>;

export interface AssistantMarkProps {
  /** id, author, createdAt, text – assistant replies can add a status line with folding details */
  messages?: ThreadMessage[];
  /** Author of new replies */
  currentUser?: ThreadAuthor;
  /** Shown with a thinking state while an answer is on its way */
  assistant?: ThreadAuthor;
  /** Return a message (or a promise) for the assistant to answer, nothing to just post */
  onReply?: (text: any) => ThreadMessage | Promise<ThreadMessage | void> | void;
  /** Shows a close button */
  onClose?: () => void;
  /** Heading in the gray tray (default: "Comment") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Comment Thread — One comment with replies – an assistant reports what it did, folds open details and answers @mentions
 */
export declare const AssistantMark: React.FC<AssistantMarkProps>;
export declare const AssistantMarkRaw: React.FC<AssistantMarkProps>;
export declare const AssistantMarkDemo: React.FC<AssistantMarkProps>;
export declare const CommentThread: React.FC<AssistantMarkProps>;
export default AssistantMark;
