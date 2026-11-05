import * as React from "react";

export interface AssistantMarkProps {
  /** id, author, createdAt, text – assistant replies can add a status line with folding details */
  messages?: any;
  /** Author of new replies */
  currentUser?: any;
  /** Shown with a thinking state while an answer is on its way */
  assistant?: any;
  /** Return a message (or a promise) for the assistant to answer, nothing to just post */
  onReply?: any;
  /** Shows a close button */
  onClose?: any;
  /** Heading in the gray tray (default: "Comment") */
  title?: any;
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
