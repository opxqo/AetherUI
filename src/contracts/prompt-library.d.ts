import type { Id, PromptTemplate } from "./shared.js";
export type { Id, PromptTemplate } from "./shared.js";
import * as React from "react";
export interface PromptLibraryProps extends Omit<React.HTMLAttributes<HTMLElement>, "templates" | "value" | "defaultValue" | "onSelect" | "onUse" | "onCopy" | "title" | "useLabel" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, title, category?, tone?, body, variables? } – body holds the variables in curly braces, e.g. {audience}; variables maps a name to { description?, default? } */
  "templates": PromptTemplate[];
  /** Id of the chosen template (controlled) */
  "value"?: string;
  /** Id chosen at first when uncontrolled – the first template by default */
  "defaultValue"?: string;
  /** Called when another template is chosen */
  "onSelect"?: (id: string) => void;
  /** Called with the finished prompt when Use is pressed – only possible once every variable is filled */
  "onUse"?: (prompt: string, template: PromptTemplate, values: Record<string, string>) => void;
  /** Called after the prompt was copied to the clipboard */
  "onCopy"?: (prompt: string) => void;
  /** Heading above the list */
  "title"?: string;
  /** Label of the use button */
  "useLabel"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const PromptLibrary: React.FC<PromptLibraryProps | (Partial<PromptLibraryProps> & { demo: true })>;
export declare const PromptLibraryRaw: React.FC<PromptLibraryProps>;
export declare const PromptLibraryDemo: React.FC<Partial<PromptLibraryProps>>;
export default PromptLibrary;
