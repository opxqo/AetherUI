import * as React from "react";
export interface WritingAssistantProps extends Omit<React.HTMLAttributes<HTMLElement>, "name" | "tagline" | "greeting" | "suggestions" | "placeholder" | "respond" | "speech" | "dictation" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Assistant name on top */
  "name"?: string;
  /** Line under the name */
  "tagline"?: string;
  /** Big line on the welcome screen */
  "greeting"?: string;
  /** Chips that send themselves as a message */
  "suggestions"?: string[];
  /** Placeholder of the prompt field */
  "placeholder"?: string;
  /** Your answer for a message; a sample writer is used by default */
  "respond"?: (message: string) => string | Promise<string>;
  /** auto uses the browser's speech recognition when available, simulate always plays a sample take */
  "speech"?: "auto" | "simulate";
  /** Sentence used for simulated dictation */
  "dictation"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const WritingAssistant: React.FC<WritingAssistantProps | (Partial<WritingAssistantProps> & { demo: true })>;
export declare const WritingAssistantRaw: React.FC<WritingAssistantProps>;
export declare const WritingAssistantDemo: React.FC<Partial<WritingAssistantProps>>;
export default WritingAssistant;
