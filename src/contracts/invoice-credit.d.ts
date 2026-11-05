import type { InvoiceLine } from "./shared.js";
export type { InvoiceLine } from "./shared.js";
import * as React from "react";
export interface InvoiceCreditProps extends Omit<React.HTMLAttributes<HTMLElement>, "seller" | "buyer" | "invoiceNo" | "creditNo" | "invoiceDate" | "dueDate" | "period" | "lines" | "currency" | "onIssue" | "demo" | "className" | "style" | "children" | "ref"> {
  /** From and To blocks on the invoice */
  "seller"?: {name: string; lines: string[] };
  /** From and To blocks on the invoice */
  "buyer"?: {name: string; lines: string[] };
  /** Document numbers shown under Terms */
  "invoiceNo"?: string;
  /** Document numbers shown under Terms */
  "creditNo"?: string;
  /** Dates shown on both documents; an empty one leaves its line out */
  "invoiceDate"?: string;
  /** Dates shown on both documents; an empty one leaves its line out */
  "dueDate"?: string;
  /** Dates shown on both documents; an empty one leaves its line out */
  "period"?: string;
  /** Each { id, name, qty, rate, tax, group? } – lines with a group are listed under a heading. A negative rate is a discount; a rate that is not a number shows — and counts as 0 */
  "lines"?: InvoiceLine[];
  /** A symbol shown in front of amounts ("$", "£"), or an ISO code ("EUR", "JPY") formatted with Intl – the code is also shown after the applied total */
  "currency"?: string;
  /** Called when the credit note is issued, with the credited amount per line and the total incl. tax */
  "onIssue"?: (credits: Record<string, number>, total: number) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const InvoiceCredit: React.FC<InvoiceCreditProps | (Partial<InvoiceCreditProps> & { demo: true })>;
export declare const InvoiceCreditRaw: React.FC<InvoiceCreditProps>;
export declare const InvoiceCreditDemo: React.FC<Partial<InvoiceCreditProps>>;
export default InvoiceCredit;
