import * as React from "react";

export interface PermissionRequestProps {
  /** Who asks – the avatar is a small mark, e.g. the model maker's logo; defaults to initials */
  agent?: any;
  /** What it wants to do, read after "wants to", e.g. "push to main" */
  action?: any;
  /** Where, e.g. "acme/web" or "Stripe · live mode" – shown under the title with toolIcon */
  target?: any;
  /** The tool's mark next to the target */
  toolIcon?: any;
  /** Risky and destructive carry a tag; destructive also turns Allow red and leaves out Always (default: "risky") */
  risk?: any;
  /** The agent's own words on why it needs this */
  reason?: any;
  /** Exactly what will happen – files, recipients, amounts; meta is right-aligned, e.g. "+12 −4" */
  preview?: any;
  /** Heading of the preview (default: "What will happen") */
  previewTitle?: any;
  /** Rows shown before "N more" (default: 3) */
  previewLimit?: any;
  /** The choices of how long; one choice hides the switch (default: all three) */
  scopes?: any;
  /** Controlled or uncontrolled choice of how long (default: "once") */
  "scope / defaultScope / onScopeChange"?: any;
  /** Minutes a timed grant holds (default: 60) */
  duration?: any;
  /** { allow, scope, at, until? } – null while it waits */
  "decision / defaultDecision"?: any;
  /** Allow, Deny – and null for Revoke, Change or Ask again */
  onDecisionChange?: any;
  /** The clock for the time left – without it the card ticks every second while a timed grant runs (default: Date.now()) */
  now?: any;
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
 * Permission Request — An agent asks for one specific right – who, why and exactly what will happen – and you allow it once, for an hour or always; then it folds into one line with the time left and Revoke
 */
export declare const PermissionRequest: React.FC<PermissionRequestProps>;
export declare const PermissionRequestRaw: React.FC<PermissionRequestProps>;
export declare const PermissionRequestDemo: React.FC<PermissionRequestProps>;

export default PermissionRequest;
