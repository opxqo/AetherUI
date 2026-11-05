import * as React from "react";

export interface CitedAnswerProps {
  /** { text, cite?, paragraph? } – the answer in order. cite lists source ids (one marker each); paragraph starts a new paragraph. Spaces at the edges of text stay outside the highlight */
  segments?: any;
  /** { id, title, site, url?, date?, quote?, highlight?, icon? } – numbered in this order, one chip each */
  sources?: any;
  /** Pages read while searching – shown in the head as "3 sources · 12 pages read" */
  pagesRead?: any;
  /** Id of the source whose preview is open at first */
  defaultOpen?: any;
  /** Called by Open source. With it the link doesn't navigate on its own; without it the url opens in a new tab */
  onOpenSource?: any;
  /** Called when a preview opens, switches or closes */
  onPreviewChange?: any;
  /** A button on the tray, e.g. Follow up */
  action?: any;
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
 * Cited Answer — An AI answer wired to its sources – point at a citation to light up its sentence and source, click to unfold the quoted passage with the matching words marked
 */
export declare const CitedAnswer: React.FC<CitedAnswerProps>;
export declare const CitedAnswerRaw: React.FC<CitedAnswerProps>;
export declare const CitedAnswerDemo: React.FC<CitedAnswerProps>;

export default CitedAnswer;
