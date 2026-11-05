import * as React from "react";
export type ThreadAuthor = { name: string; avatar?: React.ReactNode | string; assistant?: boolean };
export type ThreadMessage = {
  id: string;
  author: ThreadAuthor;
  createdAt: Date | number;
  text: string;
  /** Assistant replies: a short status line that folds open to show these details */
  status?: string;
  details?: string[];
};


export interface AssistantMarkProps extends Omit<React.HTMLAttributes<HTMLElement>, "messages" | "currentUser" | "assistant" | "onReply" | "onClose" | "title" | "demo" | "className" | "style" | "children"> {
  /** id, author, createdAt, text – assistant replies can add a status line with folding details */
  messages?: ThreadMessage[];
  /** Author of new replies */
  currentUser?: ThreadAuthor;
  /** Shown with a thinking state while an answer is on its way */
  assistant?: ThreadAuthor;
  /** Return a message (or a promise) for the assistant to answer, nothing to just post */
  onReply?: (text: unknown) => ThreadMessage | Promise<ThreadMessage | void> | void;
  /** Shows a close button */
  onClose?: () => void;
  /** Heading in the gray tray (default: "Comment") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Comment Thread — One comment with replies – an assistant reports what it did, folds open details and answers @mentions
 */
export declare const AssistantMark: React.FC<AssistantMarkProps | (Partial<AssistantMarkProps> & { demo: true })>;
export declare const AssistantMarkRaw: React.FC<AssistantMarkProps>;
export declare const AssistantMarkDemo: React.FC<Partial<AssistantMarkProps>>;
export declare const CommentThread: React.FC<AssistantMarkProps | (Partial<AssistantMarkProps> & { demo: true })>;
export default AssistantMark;
