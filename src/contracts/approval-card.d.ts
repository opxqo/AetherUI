import type { Step } from "./shared.js";
export type { Step } from "./shared.js";
import * as React from "react";
export interface ApprovalCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "description" | "risk" | "icon" | "details" | "preview" | "status" | "defaultStatus" | "onApprove" | "onDeny" | "onEdit" | "expiresIn" | "onExpire" | "allowAlways" | "alwaysLabel" | "approveLabel" | "denyLabel" | "editLabel" | "shortcuts" | "label" | "actions" | "demo" | "className" | "style" | "children" | "ref"> {
  /** The action, e.g. "Send campaign email" – also the card's accessible name */
  "title"?: string;
  /** One line of context below the title; truncates */
  "description"?: React.ReactNode;
  /** Tinted badge in the header (gray, amber, red); leave out to hide it */
  "risk"?: "low" | "medium" | "high";
  /** Icon in the 32px header tile; SVGs get a 16px stroke style */
  "icon"?: React.ReactNode;
  /** Key-value rows in the preview panel */
  "details"?: { label: string; value: React.ReactNode }[];
  /** Custom content above the details, e.g. recipients or a diff – children work the same */
  "preview"?: React.ReactNode;
  /** Controlled status; setting it back to "pending" starts a fresh request */
  "status"?: "pending" | "approved" | "denied";
  /** Starting status when uncontrolled */
  "defaultStatus"?: "pending" | "approved" | "denied";
  /** Called on Approve or ⌘/Ctrl+Enter. Return a promise to show a spinner and lock the card; a rejection keeps it pending */
  "onApprove"?: (options: { always: boolean }) => void | Promise<void>;
  /** Called on Deny, Escape, or when the countdown runs out */
  "onDeny"?: (options: { reason: "user" | "timeout" }) => void;
  /** Shows an Edit button before Deny */
  "onEdit"?: () => void;
  /** Seconds until the request expires; shown as quiet "Expires in 0:42" text in the tray next to the buttons, amber in the last 10 seconds, paused while hovered or focused */
  "expiresIn"?: number;
  /** Called when the countdown runs out, right before onDeny({ reason: "timeout" }) */
  "onExpire"?: () => void;
  /** Show the "Always allow this action" checkbox */
  "allowAlways"?: boolean;
  /** Label of the checkbox */
  "alwaysLabel"?: string;
  /** Primary button label */
  "approveLabel"?: string;
  /** Quiet button label */
  "denyLabel"?: string;
  /** Edit button label */
  "editLabel"?: string;
  /** Show the ⌘↵ / Esc hints on the buttons – the shortcuts work either way */
  "shortcuts"?: boolean;
  /** Small label on the gray tray above the card, e.g. "Step 4 · gmail.send" */
  "label"?: React.ReactNode;
  /** Where the buttons sit: on the gray tray below the card, or inside the white card (handy in narrow side panels next to other cards) */
  "actions"?: "tray" | "card";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ApprovalCard: React.FC<ApprovalCardProps | (Partial<ApprovalCardProps> & { demo: true })>;
export declare const ApprovalCardRaw: React.FC<ApprovalCardProps>;
export declare const ApprovalCardDemo: React.FC<Partial<ApprovalCardProps>>;
export default ApprovalCard;
