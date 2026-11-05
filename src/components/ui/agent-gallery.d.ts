import * as React from "react";

export type GalleryItem = Record<string, any>;

export interface AgentGalleryProps {
  /** Heading above the panels */
  title?: string;
  /** Line under the heading */
  subtitle?: string;
  /** Each { id, name, description, colors: [strong, soft], trigger, steps, skills, guardrail } – drives the panel colors, the label and the screen */
  items?: GalleryItem[];
  /** Panel that starts open (default: the middle item) */
  defaultIndex?: number;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Gallery — Slim gradient panels with one open product screen in the middle – pick a panel and it glides open
 */
export declare const AgentGallery: React.FC<AgentGalleryProps>;
export declare const AgentGalleryRaw: React.FC<AgentGalleryProps>;
export declare const AgentGalleryDemo: React.FC<AgentGalleryProps>;

export default AgentGallery;
