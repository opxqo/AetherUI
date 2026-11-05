import * as React from "react";

export interface ApprovalCardProps {
  /** The action, e.g. "Send campaign email" – also the card's accessible name */
  title?: any;
  /** One line of context below the title; truncates */
  description?: any;
  /** Tinted badge in the header (gray, amber, red); leave out to hide it */
  risk?: any;
  /** Icon in the 32px header tile; SVGs get a 16px stroke style (default: shield) */
  icon?: any;
  /** Key-value rows in the preview panel */
  details?: any;
  /** Custom content above the details, e.g. recipients or a diff – children work the same */
  preview?: any;
  /** Used as the preview when preview isn't set */
  children?: any;
  /** Controlled status; setting it back to "pending" starts a fresh request */
  status?: any;
  /** Starting status when uncontrolled (default: "pending") */
  defaultStatus?: any;
  /** Called on Approve or ⌘/Ctrl+Enter. Return a promise to show a spinner and lock the card; a rejection keeps it pending */
  onApprove?: any;
  /** Called on Deny, Escape, or when the countdown runs out */
  onDeny?: any;
  /** Shows an Edit button before Deny */
  onEdit?: any;
  /** Seconds until the request expires; shown as quiet "Expires in 0:42" text in the tray next to the buttons, amber in the last 10 seconds, paused while hovered or focused */
  expiresIn?: any;
  /** Called when the countdown runs out, right before onDeny({ reason: "timeout" }) */
  onExpire?: any;
  /** Show the "Always allow this action" checkbox (default: true) */
  allowAlways?: any;
  /** Label of the checkbox (default: "Always allow this action") */
  alwaysLabel?: any;
  /** Primary button label (default: "Approve") */
  approveLabel?: any;
  /** Quiet button label (default: "Deny") */
  denyLabel?: any;
  /** Edit button label (default: "Edit") */
  editLabel?: any;
  /** Show the ⌘↵ / Esc hints on the buttons – the shortcuts work either way (default: true) */
  shortcuts?: any;
  /** Small label on the gray tray above the card, e.g. "Step 4 · gmail.send" */
  label?: any;
  /** Where the buttons sit: on the gray tray below the card, or inside the white card (handy in narrow side panels next to other cards) (default: "tray") */
  actions?: any;
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
 * Approval Card — An agent asks before it acts – risk badge, preview, Approve and Deny with shortcuts, a pausing countdown, and a smooth morph into a resolved row
 */
export declare const ApprovalCard: React.FC<ApprovalCardProps>;
export declare const ApprovalCardRaw: React.FC<ApprovalCardProps>;
export declare const ApprovalCardDemo: React.FC<ApprovalCardProps>;

export default ApprovalCard;
