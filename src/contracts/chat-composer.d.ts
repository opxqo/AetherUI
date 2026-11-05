import type { ChatModel } from "./shared.js";
export type { ChatModel } from "./shared.js";
import * as React from "react";
export interface ChatComposerProps extends Omit<React.HTMLAttributes<HTMLElement>, "placeholder" | "models" | "loadMs" | "dictation" | "onSend" | "onModelChange" | "onAttach" | "onConnectApps" | "onRequestApproval" | "onSelectProject" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Placeholder of the message field */
  "placeholder"?: string;
  /** Entries of the model picker (Auto, Claude, ChatGPT); the first is selected */
  "models"?: ChatModel[];
  /** Duration of the connect and approval loading states */
  "loadMs"?: number;
  /** Demo transcript that appears word by word in gray while recording – replace with real speech-to-text */
  "dictation"?: string;
  /** Called on send or Enter */
  "onSend"?: (message: string, details: { model: string }) => void;
  /** Called when a model is picked */
  "onModelChange"?: (model: ChatModel) => void;
  /** Called when the plus button is clicked – open your own picker here */
  "onAttach"?: () => void;
  /** Called when “Connect apps” is clicked */
  "onConnectApps"?: () => void;
  /** Called when “Request approval” is clicked */
  "onRequestApproval"?: () => void;
  /** Called when “Select a project” is clicked */
  "onSelectProject"?: () => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ChatComposer: React.FC<ChatComposerProps | (Partial<ChatComposerProps> & { demo: true })>;
export declare const ChatComposerRaw: React.FC<ChatComposerProps>;
export declare const ChatComposerDemo: React.FC<Partial<ChatComposerProps>>;
export default ChatComposer;
