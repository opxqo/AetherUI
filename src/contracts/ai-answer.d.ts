import type { AnswerSource } from "./shared.js";
export type { AnswerSource } from "./shared.js";
import * as React from "react";
export interface AIAnswerProps extends Omit<React.HTMLAttributes<HTMLElement>, "question" | "sources" | "answer" | "streaming" | "animate" | "speed" | "followUps" | "onFollowUp" | "onRegenerate" | "onStop" | "onFeedback" | "feedbackReasons" | "onCopy" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Shown as the title above the sources */
  "question"?: string;
  /** Each { title, name, href?, icon?, snippet? }; name is the short label on the citation chip */
  "sources": AnswerSource[];
  /** Blank lines make paragraphs, lines starting with "- " a list, **bold**, [1] or [1,3] cite sources (1-based). It may grow while streaming; a different text starts over */
  "answer"?: string;
  /** More text is still coming from your model – keeps the cursor going once it has caught up */
  "streaming"?: boolean;
  /** Stream the text in; false shows it at once */
  "animate"?: boolean;
  /** Words per second while streaming in */
  "speed"?: number;
  /** Related questions shown below the finished answer */
  "followUps"?: string[];
  /** A follow-up was clicked */
  "onFollowUp"?: (question: string) => void;
  /** Regenerate was clicked – the answer streams in again; pass a new answer to replace it */
  "onRegenerate"?: () => void;
  /** Stop was clicked while writing – cancel your request here */
  "onStop"?: () => void;
  /** Thumbs up, or thumbs down with the reason that was picked */
  "onFeedback"?: (value: "up" | "down", reason?: string) => void;
  /** Reasons offered after a thumbs down */
  "feedbackReasons"?: string[];
  /** Called with the copied text: the answer without markup plus a numbered source list */
  "onCopy"?: (text: string) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AIAnswer: React.FC<AIAnswerProps | (Partial<AIAnswerProps> & { demo: true })>;
export declare const AIAnswerRaw: React.FC<AIAnswerProps>;
export declare const AIAnswerDemo: React.FC<Partial<AIAnswerProps>>;
export default AIAnswer;
