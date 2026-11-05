import type { PermissionScope, PermissionDecision } from "./shared.js";
export type { PermissionScope, PermissionDecision } from "./shared.js";
import * as React from "react";
export interface PermissionRequestProps extends Omit<React.HTMLAttributes<HTMLElement>, "agent" | "action" | "target" | "toolIcon" | "risk" | "reason" | "preview" | "previewTitle" | "previewLimit" | "scopes" | "scope" | "defaultScope" | "onScopeChange" | "duration" | "decision" | "defaultDecision" | "onDecisionChange" | "now" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Who asks – the avatar is a small mark, e.g. the model maker's logo; defaults to initials */
  "agent": { name: string; model?: string; avatar?: string };
  /** What it wants to do, read after "wants to", e.g. "push to main" */
  "action": string;
  /** Where, e.g. "acme/web" or "Stripe · live mode" – shown under the title with toolIcon */
  "target": string;
  /** The tool's mark next to the target */
  "toolIcon"?: React.ReactNode;
  /** Risky and destructive carry a tag; destructive also turns Allow red and leaves out Always */
  "risk"?: "safe" | "risky" | "destructive";
  /** The agent's own words on why it needs this */
  "reason"?: string;
  /** Exactly what will happen – files, recipients, amounts; meta is right-aligned, e.g. "+12 −4" */
  "preview"?: { id: string; label: string; meta?: string; icon?: React.ReactNode }[];
  /** Heading of the preview */
  "previewTitle"?: string;
  /** Rows shown before "N more" */
  "previewLimit"?: number;
  /** The choices of how long; one choice hides the switch */
  "scopes"?: ("once" | "timed" | "always")[];
  /** Controlled or uncontrolled choice of how long */
  "scope"?: PermissionScope;
  /** Controlled or uncontrolled choice of how long */
  "defaultScope"?: PermissionScope;
  /** Controlled or uncontrolled choice of how long */
  "onScopeChange"?: (scope: PermissionScope) => void;
  /** Minutes a timed grant holds */
  "duration"?: number;
  /** { allow, scope, at, until? } – null while it waits */
  "decision"?: PermissionDecision | null;
  /** { allow, scope, at, until? } – null while it waits */
  "defaultDecision"?: PermissionDecision | null;
  /** Allow, Deny – and null for Revoke, Change or Ask again */
  "onDecisionChange"?: (decision: PermissionDecision | null) => void;
  /** The clock for the time left – without it the card ticks every second while a timed grant runs */
  "now"?: number;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const PermissionRequest: React.FC<PermissionRequestProps | (Partial<PermissionRequestProps> & { demo: true })>;
export declare const PermissionRequestRaw: React.FC<PermissionRequestProps>;
export declare const PermissionRequestDemo: React.FC<Partial<PermissionRequestProps>>;
export default PermissionRequest;
