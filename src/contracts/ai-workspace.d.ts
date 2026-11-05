import type { ChatMessage, Conversation, Project } from "./shared.js";
export type { ChatMessage, Conversation, Project } from "./shared.js";
import * as React from "react";
export interface AiWorkspaceProps extends Omit<React.HTMLAttributes<HTMLElement>, "respond" | "userName" | "userAvatar" | "workspace" | "pinned" | "conversations" | "projects" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Your model call – the answer streams in word by word. Demo answers without it */
  "respond"?: (message: string, history: ChatMessage[]) => Promise<string>;
  /** Shown in the greeting and the sidebar */
  "userName"?: string;
  /** Image for the sidebar footer */
  "userAvatar"?: string;
  /** Initial or logo in the top-left tile */
  "workspace"?: React.ReactNode;
  /** Pinned assistants in the sidebar – pinned projects are added automatically */
  "pinned"?: string[];
  /** Recent chats with their messages */
  "conversations"?: Conversation[];
  /** Projects with name, description, days since update and pinned */
  "projects"?: Project[];
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AiWorkspace: React.FC<AiWorkspaceProps | (Partial<AiWorkspaceProps> & { demo: true })>;
export declare const AiWorkspaceRaw: React.FC<AiWorkspaceProps>;
export declare const AiWorkspaceDemo: React.FC<Partial<AiWorkspaceProps>>;
export declare const AIWorkspace: React.FC<AiWorkspaceProps | (Partial<AiWorkspaceProps> & { demo: true })>;
export default AiWorkspace;
