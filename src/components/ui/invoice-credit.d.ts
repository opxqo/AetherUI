import * as React from "react";

export type InvoiceLine = Record<string, any>;

export interface InvoiceCreditProps {
  /** From and To blocks on the invoice */
  "seller / buyer"?: { name, lines: string[] };
  /** Document numbers shown under Terms */
  "invoiceNo / creditNo"?: string;
  /** Dates shown on both documents; an empty one leaves its line out */
  "invoiceDate / dueDate / period"?: string;
  /** Each { id, name, qty, rate, tax, group? } – lines with a group are listed under a heading. A negative rate is a discount; a rate that is not a number shows — and counts as 0 */
  lines?: InvoiceLine[];
  /** A symbol shown in front of amounts ("$", "£"), or an ISO code ("EUR", "JPY") formatted with Intl – the code is also shown after the applied total (default: "$") */
  currency?: string;
  /** Called when the credit note is issued, with the credited amount per line and the total incl. tax */
  onIssue?: (credits: any, total: any) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Invoice & Credit Note — An invoice and its credit note stacked like paper – switch between them, pick lines to credit, adjust amounts and issue
 */
export declare const InvoiceCredit: React.FC<InvoiceCreditProps>;
export declare const InvoiceCreditRaw: React.FC<InvoiceCreditProps>;
export declare const InvoiceCreditDemo: React.FC<InvoiceCreditProps>;

export default InvoiceCredit;
