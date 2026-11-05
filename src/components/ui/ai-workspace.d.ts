import * as React from "react";

export type Conversation = Record<string, any>;
export type Project = Record<string, any>;

export interface AiWorkspaceProps {
  /** Your model call – the answer streams in word by word. Demo answers without it */
  respond?: (message: any, history: any) => Promise<string>;
  /** Shown in the greeting and the sidebar (default: "Lena") */
  userName?: string;
  /** Image for the sidebar footer */
  userAvatar?: string;
  /** Initial or logo in the top-left tile (default: "N") */
  workspace?: ReactNode;
  /** Pinned assistants in the sidebar – pinned projects are added automatically */
  pinned?: string[];
  /** Recent chats with their messages */
  conversations?: Conversation[];
  /** Projects with name, description, days since update and pinned */
  projects?: Project[];
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * AI Workspace — Complete assistant app – sidebar, welcome, streaming chat and projects, built on the Chat Composer
 */
export declare const AiWorkspace: React.FC<AiWorkspaceProps>;
export declare const AiWorkspaceRaw: React.FC<AiWorkspaceProps>;
export declare const AiWorkspaceDemo: React.FC<AiWorkspaceProps>;
export declare const AIWorkspace: React.FC<AiWorkspaceProps>;
export default AiWorkspace;
