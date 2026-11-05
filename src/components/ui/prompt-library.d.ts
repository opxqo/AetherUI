import * as React from "react";

export type PromptTemplate = Record<string, any>;

export interface PromptLibraryProps {
  /** { id, title, category?, tone?, body, variables? } – body holds the variables in curly braces, e.g. {audience}; variables maps a name to { description?, default? } */
  templates?: PromptTemplate[];
  /** Id of the chosen template (controlled) */
  value?: string;
  /** Id chosen at first when uncontrolled – the first template by default */
  defaultValue?: string;
  /** Called when another template is chosen */
  onSelect?: (id: string) => void;
  /** Called with the finished prompt when Use is pressed – only possible once every variable is filled */
  onUse?: (prompt: string, template: PromptTemplate, values: Record<string, string>) => void;
  /** Called after the prompt was copied to the clipboard */
  onCopy?: (prompt: string) => void;
  /** Heading above the list (default: "Prompts") */
  title?: string;
  /** Label of the use button (default: "Use prompt") */
  useLabel?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Prompt Library — Saved prompt templates with variables – type straight into the sentence, watch the finished prompt assemble below, and use it once every variable is filled
 */
export declare const PromptLibrary: React.FC<PromptLibraryProps>;
export declare const PromptLibraryRaw: React.FC<PromptLibraryProps>;
export declare const PromptLibraryDemo: React.FC<PromptLibraryProps>;

export default PromptLibrary;
