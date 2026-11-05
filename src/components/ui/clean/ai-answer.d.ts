import * as React from "react";

export interface AIAnswerProps {
  /** Shown as the title above the sources */
  question?: any;
  /** Each { title, name, href?, icon?, snippet? }; name is the short label on the citation chip */
  sources?: any;
  /** Blank lines make paragraphs, lines starting with "- " a list, **bold**, [1] or [1,3] cite sources (1-based). It may grow while streaming; a different text starts over */
  answer?: any;
  /** More text is still coming from your model – keeps the cursor going once it has caught up (default: false) */
  streaming?: any;
  /** Stream the text in; false shows it at once (default: true) */
  animate?: any;
  /** Words per second while streaming in (default: 38) */
  speed?: any;
  /** Related questions shown below the finished answer */
  followUps?: any;
  /** A follow-up was clicked */
  onFollowUp?: any;
  /** Regenerate was clicked – the answer streams in again; pass a new answer to replace it */
  onRegenerate?: any;
  /** Stop was clicked while writing – cancel your request here */
  onStop?: any;
  /** Thumbs up, or thumbs down with the reason that was picked */
  onFeedback?: any;
  /** Reasons offered after a thumbs down (default: ["Not accurate", "Wrong source", "Too long", "Out of date"]) */
  feedbackReasons?: any;
  /** Called with the copied text: the answer without markup plus a numbered source list */
  onCopy?: any;
  /** Extra class on the root */
  className?: any;
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
