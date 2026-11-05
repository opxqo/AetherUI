import type { Id, CitedSegment, CitedSource } from "./shared.js";
export type { Id, CitedSegment, CitedSource } from "./shared.js";
import * as React from "react";
export interface CitedAnswerProps extends Omit<React.HTMLAttributes<HTMLElement>, "segments" | "sources" | "pagesRead" | "defaultOpen" | "onOpenSource" | "onPreviewChange" | "action" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { text, cite?, paragraph? } – the answer in order. cite lists source ids (one marker each); paragraph starts a new paragraph. Spaces at the edges of text stay outside the highlight */
  "segments": CitedSegment[];
  /** { id, title, site, url?, date?, quote?, highlight?, icon? } – numbered in this order, one chip each */
  "sources": CitedSource[];
  /** Pages read while searching – shown in the head as "3 sources · 12 pages read" */
  "pagesRead"?: number;
  /** Id of the source whose preview is open at first */
  "defaultOpen"?: string;
  /** Called by Open source. With it the link doesn't navigate on its own; without it the url opens in a new tab */
  "onOpenSource"?: (source: CitedSource) => void;
  /** Called when a preview opens, switches or closes */
  "onPreviewChange"?: (id: string | null) => void;
  /** A button on the tray, e.g. Follow up */
  "action"?: { label: string; onClick: () => void };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const CitedAnswer: React.FC<CitedAnswerProps | (Partial<CitedAnswerProps> & { demo: true })>;
export declare const CitedAnswerRaw: React.FC<CitedAnswerProps>;
export declare const CitedAnswerDemo: React.FC<Partial<CitedAnswerProps>>;
export default CitedAnswer;
