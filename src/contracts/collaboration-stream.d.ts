import * as React from "react";
export type StreamMessageKind = "ask" | "reply" | "handoff" | "share" | "question" | "spawn";
export interface StreamAgent { id: string; name: string; model?: string; avatar?: string }
export interface StreamAttachment { label: string; kind?: string; preview?: string; meta?: string }
export interface StreamDetails { facts?: string[]; items?: string[] }
export interface StreamMessage { id: string; from: string; to: string | string[]; kind: StreamMessageKind; text: string; at?: string; replyTo?: string; typing?: boolean; attachments?: StreamAttachment[]; details?: StreamDetails }
export interface CollaborationStreamProps extends Omit<React.HTMLAttributes<HTMLElement>, "demo" | "className" | "style" | "children" | "ref"> {
  agents?: StreamAgent[];
  messages?: StreamMessage[];
  task?: string;
  live?: boolean;
  maxHeight?: number;
  onSend?: (payload: { text: string; to: string[]; replyTo?: string }) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const CollaborationStream: React.FC<CollaborationStreamProps | (Partial<CollaborationStreamProps> & { demo: true })>;
export declare const CollaborationStreamRaw: React.FC<CollaborationStreamProps>;
export declare const CollaborationStreamDemo: React.FC<Partial<CollaborationStreamProps>>;
export default CollaborationStream;
