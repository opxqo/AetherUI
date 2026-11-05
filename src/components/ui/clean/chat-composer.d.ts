import * as React from "react";

export type ChatModel = Record<string, any>;

export interface ChatComposerProps {
  /** Placeholder of the message field (default: "Start by typing...") */
  placeholder?: string;
  /** Entries of the model picker (Auto, Claude, ChatGPT); the first is selected (default: defaultModels) */
  models?: ChatModel[];
  /** Duration of the connect and approval loading states (default: 1300) */
  loadMs?: number;
  /** Demo transcript that appears word by word in gray while recording – replace with real speech-to-text (default: "Draft a short update…") */
  dictation?: string;
  /** Called on send or Enter */
  onSend?: (message: string, details: { model: string }) => void;
  /** Called when a model is picked */
  onModelChange?: (model: ChatModel) => void;
  /** Called when the plus button is clicked – open your own picker here */
  onAttach?: () => void;
  /** Called when “Connect apps” is clicked */
  onConnectApps?: () => void;
  /** Called when “Request approval” is clicked */
  onRequestApproval?: () => void;
  /** Called when “Select a project” is clicked */
  onSelectProject?: () => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Chat Composer — Prompt composer with model picker, voice input, app connections and approval request
 */
export declare const ChatComposer: React.FC<ChatComposerProps>;
export declare const ChatComposerRaw: React.FC<ChatComposerProps>;
export declare const ChatComposerDemo: React.FC<ChatComposerProps>;

export default ChatComposer;
