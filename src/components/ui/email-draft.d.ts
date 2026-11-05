import * as React from "react";

export type DraftContact = Record<string, any>;
export type DraftTone = Record<string, any>;

export interface EmailDraftProps {
  /** Reference of the record the email is about (default: "SUB-1182") */
  reference?: string;
  /** Account or company under the reference (default: "Northwind Logistics") */
  account?: string;
  /** Amount on the right (default: "$8,900") */
  amount?: string;
  /** Status chip next to the reference (default: "Renews in 5 days") */
  status?: string;
  /** Who wrote the draft, shown in the footer (default: "Renewal agent") */
  agent?: string;
  /** People the email can go to – the first is preselected */
  contacts?: DraftContact[];
  /** File name of the attachment; it can be removed and added back */
  attachment?: string | null;
  /** Text variants { id, label, body(contact) } – Friendly, Short and Formal by default */
  tones?: DraftTone[];
  /** Link appended to the email text */
  link?: Record<string, any>;
  /** Called after Send with the final email */
  onSend?: (data: Record<string, any>) => void;
  /** Called when the draft is discarded */
  onDiscard?: () => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Email Draft — Agent-written email for review – switch recipient and tone, edit inline, remove the attachment, send or discard with undo
 */
export declare const EmailDraft: React.FC<EmailDraftProps>;
export declare const EmailDraftRaw: React.FC<EmailDraftProps>;
export declare const EmailDraftDemo: React.FC<EmailDraftProps>;

export default EmailDraft;
