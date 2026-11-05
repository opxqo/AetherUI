import * as React from "react";

export type AnswerSource = Record<string, any>;

export interface AIAnswerProps {
  /** Shown as the title above the sources */
  question?: string;
  /** Each { title, name, href?, icon?, snippet? }; name is the short label on the citation chip */
  sources?: AnswerSource[];
  /** Blank lines make paragraphs, lines starting with "- " a list, **bold**, [1] or [1,3] cite sources (1-based). It may grow while streaming; a different text starts over */
  answer?: string;
  /** More text is still coming from your model – keeps the cursor going once it has caught up (default: false) */
  streaming?: boolean;
  /** Stream the text in; false shows it at once (default: true) */
  animate?: boolean;
  /** Words per second while streaming in (default: 38) */
  speed?: number;
  /** Related questions shown below the finished answer */
  followUps?: string[];
  /** A follow-up was clicked */
  onFollowUp?: (question: string) => void;
  /** Regenerate was clicked – the answer streams in again; pass a new answer to replace it */
  onRegenerate?: () => void;
  /** Stop was clicked while writing – cancel your request here */
  onStop?: () => void;
  /** Thumbs up, or thumbs down with the reason that was picked */
  onFeedback?: (value: "up" | "down", reason?: string) => void;
  /** Reasons offered after a thumbs down (default: ["Not accurate", "Wrong source", "Too long", "Out of date"]) */
  feedbackReasons?: string[];
  /** Called with the copied text: the answer without markup plus a numbered source list */
  onCopy?: (text: string) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * AI Answer — Streamed answer with source cards, citation chips that preview their source, copy, regenerate, feedback and follow-ups
 */
export declare const AIAnswer: React.FC<AIAnswerProps>;
export declare const AIAnswerRaw: React.FC<AIAnswerProps>;
export declare const AIAnswerDemo: React.FC<AIAnswerProps>;

export default AIAnswer;
