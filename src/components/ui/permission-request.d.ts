import * as React from "react";

export type PermissionScope = Record<string, any>;
export type PermissionDecision = Record<string, any>;

export interface PermissionRequestProps {
  /** Who asks – the avatar is a small mark, e.g. the model maker's logo; defaults to initials */
  agent?: Record<string, any>;
  /** What it wants to do, read after "wants to", e.g. "push to main" */
  action?: string;
  /** Where, e.g. "acme/web" or "Stripe · live mode" – shown under the title with toolIcon */
  target?: string;
  /** The tool's mark next to the target */
  toolIcon?: ReactNode;
  /** Risky and destructive carry a tag; destructive also turns Allow red and leaves out Always (default: "risky") */
  risk?: "safe" | "risky" | "destructive";
  /** The agent's own words on why it needs this */
  reason?: string;
  /** Exactly what will happen – files, recipients, amounts; meta is right-aligned, e.g. "+12 −4" */
  preview?: Array<Record<string, any>>;
  /** Heading of the preview (default: "What will happen") */
  previewTitle?: string;
  /** Rows shown before "N more" (default: 3) */
  previewLimit?: number;
  /** The choices of how long; one choice hides the switch (default: all three) */
  scopes?: ("once" | "timed" | "always")[];
  /** Controlled or uncontrolled choice of how long (default: "once") */
  "scope / defaultScope / onScopeChange"?: PermissionScope;
  /** Minutes a timed grant holds (default: 60) */
  duration?: number;
  /** { allow, scope, at, until? } – null while it waits */
  "decision / defaultDecision"?: PermissionDecision | null;
  /** Allow, Deny – and null for Revoke, Change or Ask again */
  onDecisionChange?: (decision: any) => void;
  /** The clock for the time left – without it the card ticks every second while a timed grant runs (default: Date.now()) */
  now?: number;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Permission Request — An agent asks for one specific right – who, why and exactly what will happen – and you allow it once, for an hour or always; then it folds into one line with the time left and Revoke
 */
export declare const PermissionRequest: React.FC<PermissionRequestProps>;
export declare const PermissionRequestRaw: React.FC<PermissionRequestProps>;
export declare const PermissionRequestDemo: React.FC<PermissionRequestProps>;

export default PermissionRequest;
