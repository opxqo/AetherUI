import * as React from "react";

export interface WritingAssistantProps {
  /** Assistant name on top (default: "Quill") */
  name?: any;
  /** Line under the name (default: "Your writing companion.") */
  tagline?: any;
  /** Big line on the welcome screen (default: "What should we write?") */
  greeting?: any;
  /** Chips that send themselves as a message */
  suggestions?: any;
  /** Placeholder of the prompt field (default: "Ask anything…") */
  placeholder?: any;
  /** Your answer for a message; a sample writer is used by default */
  respond?: any;
  /** auto uses the browser's speech recognition when available, simulate always plays a sample take (default: "auto") */
  speech?: any;
  /** Sentence used for simulated dictation */
  dictation?: any;
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
 * Writing Assistant — AI chat card with a soft gradient glow, suggestions, streaming replies and live voice dictation
 */
export declare const WritingAssistant: React.FC<WritingAssistantProps>;
export declare const WritingAssistantRaw: React.FC<WritingAssistantProps>;
export declare const WritingAssistantDemo: React.FC<WritingAssistantProps>;

export default WritingAssistant;
