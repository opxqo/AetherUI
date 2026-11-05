import type { GalleryItem } from "./shared.js";
export type { GalleryItem } from "./shared.js";
import * as React from "react";
export interface AgentGalleryProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "subtitle" | "items" | "defaultIndex" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Heading above the panels */
  "title"?: string;
  /** Line under the heading */
  "subtitle"?: string;
  /** Each { id, name, description, colors: [strong, soft], trigger, steps, skills, guardrail } – drives the panel colors, the label and the screen */
  "items"?: GalleryItem[];
  /** Panel that starts open */
  "defaultIndex"?: number;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentGallery: React.FC<AgentGalleryProps | (Partial<AgentGalleryProps> & { demo: true })>;
export declare const AgentGalleryRaw: React.FC<AgentGalleryProps>;
export declare const AgentGalleryDemo: React.FC<Partial<AgentGalleryProps>>;
export default AgentGallery;
