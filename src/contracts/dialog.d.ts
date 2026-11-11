import * as React from "react";
export interface DialogProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "children" | "demo" | "className" | "style" | "ref"> {
  /** Whether the dialog is shown (controlled) – pair it with onOpenChange */
  open?: boolean;
  /** Starts open when uncontrolled */
  defaultOpen?: boolean;
  /** Called with false on Esc, a backdrop click or the close button, so the parent can close it */
  onOpenChange?: (open: boolean) => void;
  /** Heading in the tray above the card – also names the dialog for screen readers */
  title?: React.ReactNode;
  /** Quiet line under the title */
  description?: React.ReactNode;
  /** Body on the white card; it scrolls when it is taller than the screen */
  children?: React.ReactNode;
  /** Actions on the right of the tray below the card, usually Buttons */
  footer?: React.ReactNode;
  /** Muted text on the left of the footer, e.g. a count */
  footerLead?: React.ReactNode;
  /** 400, 520 or 680px wide */
  size?: "sm" | "md" | "lg";
  /** A click on the dimmed backdrop closes it (default true) */
  closeOnBackdrop?: boolean;
  /** Esc closes it (default true) */
  closeOnEscape?: boolean;
  /** The × in the corner (default true) */
  showClose?: boolean;
  /** Accessible name of the × button */
  closeLabel?: string;
  /** Element focused on open: a selector inside the dialog or a ref – otherwise [data-autofocus], the first control in the body, or the panel */
  initialFocus?: string | React.RefObject<HTMLElement | null>;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}
/**
 * Dialog — Modal on a dimmed backdrop: double tray with title, scrolling body card and actions; Esc, backdrop and × close it, focus stays inside
 */
export declare const Dialog: React.FC<DialogProps | (Partial<DialogProps> & { demo: true })>;
export declare const DialogRaw: React.FC<DialogProps>;
export declare const DialogDemo: React.FC<Partial<DialogProps>>;
export default Dialog;
