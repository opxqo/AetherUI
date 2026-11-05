import * as React from "react";
export type DraftContact = { name: string; email: string };

export type DraftTone = { id: string; label: string; body: (contact: DraftContact) => string };

export type EmailDraftProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Reference of the record, e.g. a subscription or invoice number */
  reference?: string;
  /** Account or company under the reference */
  account?: string;
  /** Amount shown on the right */
  amount?: string;
  /** Status chip next to the reference */
  status?: string;
  /** Who wrote the draft */
  agent?: string;
  contacts?: DraftContact[];
  attachment?: string | null;
  /** Text variants to switch between – the first one is shown first */
  tones?: DraftTone[];
  /** Label and target of the link appended to the email */
  link?: { label: string; href: string };
  onSend?: (email: { to: DraftContact; body: string; attachment: string | null }) => void;
  onDiscard?: () => void;
  className?: string;
};

export type Phase = "draft" | "sending" | "sent" | "discarded";
/**
 * Email Draft — Agent-written email for review – switch recipient and tone, edit inline, remove the attachment, send or discard with undo
 */
export declare const EmailDraft: React.FC<EmailDraftProps | (Partial<EmailDraftProps> & { demo: true })>;
export declare const EmailDraftRaw: React.FC<EmailDraftProps>;
export declare const EmailDraftDemo: React.FC<Partial<EmailDraftProps>>;

export default EmailDraft;
