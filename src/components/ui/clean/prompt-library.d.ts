import * as React from "react";

export interface PromptLibraryProps {
  /** { id, title, category?, tone?, body, variables? } – body holds the variables in curly braces, e.g. {audience}; variables maps a name to { description?, default? } */
  templates?: any;
  /** Id of the chosen template (controlled) */
  value?: any;
  /** Id chosen at first when uncontrolled – the first template by default */
  defaultValue?: any;
  /** Called when another template is chosen */
  onSelect?: any;
  /** Called with the finished prompt when Use is pressed – only possible once every variable is filled */
  onUse?: any;
  /** Called after the prompt was copied to the clipboard */
  onCopy?: any;
  /** Heading above the list (default: "Prompts") */
  title?: any;
  /** Label of the use button (default: "Use prompt") */
  useLabel?: any;
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
 * Prompt Library — Saved prompt templates with variables – type straight into the sentence, watch the finished prompt assemble below, and use it once every variable is filled
 */
export declare const PromptLibrary: React.FC<PromptLibraryProps>;
export declare const PromptLibraryRaw: React.FC<PromptLibraryProps>;
export declare const PromptLibraryDemo: React.FC<PromptLibraryProps>;

export default PromptLibrary;
