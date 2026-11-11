import * as React from "react";
export type GateKind = "tool" | "file" | "agent" | "message";
export type GateStatus = "open" | "approved" | "edited" | "rejected";
export interface ApprovalGate { id: string; agent: string; avatar?: string; kind?: GateKind; action: string; reason?: string; status: GateStatus; at?: string; input?: string; diff?: { before: string; after: string }; files?: string[]; context?: string; holds?: string[]; note?: string }
export interface ApprovalGatesProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "demo" | "className" | "style" | "children" | "ref"> {
  gates?: ApprovalGate[];
  task?: string;
  live?: boolean;
  onDecide?: (id: string, decision: "approved" | "edited" | "rejected", value?: string) => void;
  title?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ApprovalGates: React.FC<ApprovalGatesProps | (Partial<ApprovalGatesProps> & { demo: true })>;
export declare const ApprovalGatesRaw: React.FC<ApprovalGatesProps>;
export declare const ApprovalGatesDemo: React.FC<Partial<ApprovalGatesProps>>;
export default ApprovalGates;
