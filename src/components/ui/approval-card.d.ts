import * as React from "react";

export interface ApprovalCardProps {
  /** The action, e.g. "Send campaign email" – also the card's accessible name */
  title?: string;
  /** One line of context below the title; truncates */
  description?: ReactNode;
  /** Tinted badge in the header (gray, amber, red); leave out to hide it */
  risk?: "low" | "medium" | "high";
  /** Icon in the 32px header tile; SVGs get a 16px stroke style (default: shield) */
  icon?: ReactNode;
  /** Key-value rows in the preview panel */
  details?: { label: string; value: ReactNode }[];
  /** Custom content above the details, e.g. recipients or a diff – children work the same */
  preview?: ReactNode;
  /** Controlled status; setting it back to "pending" starts a fresh request */
  status?: "pending" | "approved" | "denied";
  /** Starting status when uncontrolled (default: "pending") */
  defaultStatus?: "pending" | "approved" | "denied";
  /** Called on Approve or ⌘/Ctrl+Enter. Return a promise to show a spinner and lock the card; a rejection keeps it pending */
  onApprove?: (data: Record<string, any>) => void | Promise<any>;
  /** Called on Deny, Escape, or when the countdown runs out */
  onDeny?: (options: {  reason: "user" | "timeout"  }) => void;
  /** Shows an Edit button before Deny */
  onEdit?: () => void;
  /** Seconds until the request expires; shown as quiet "Expires in 0:42" text in the tray next to the buttons, amber in the last 10 seconds, paused while hovered or focused */
  expiresIn?: number;
  /** Called when the countdown runs out, right before onDeny({ reason: "timeout" }) */
  onExpire?: () => void;
  /** Show the "Always allow this action" checkbox (default: true) */
  allowAlways?: boolean;
  /** Label of the checkbox (default: "Always allow this action") */
  alwaysLabel?: string;
  /** Primary button label (default: "Approve") */
  approveLabel?: string;
  /** Quiet button label (default: "Deny") */
  denyLabel?: string;
  /** Edit button label (default: "Edit") */
  editLabel?: string;
  /** Show the ⌘↵ / Esc hints on the buttons – the shortcuts work either way (default: true) */
  shortcuts?: boolean;
  /** Small label on the gray tray above the card, e.g. "Step 4 · gmail.send" */
  label?: ReactNode;
  /** Where the buttons sit: on the gray tray below the card, or inside the white card (handy in narrow side panels next to other cards) (default: "tray") */
  actions?: "tray" | "card";
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
