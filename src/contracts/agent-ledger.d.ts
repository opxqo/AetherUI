import type { LedgerEntry } from "./shared.js";
export type { LedgerEntry } from "./shared.js";
import * as React from "react";
export interface AgentLedgerProps extends Omit<React.HTMLAttributes<HTMLElement>, "entries" | "change" | "dependsOn" | "reversible" | "agent" | "now" | "undone" | "defaultUndone" | "onUndo" | "onRedo" | "pointAt" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, action, target?, system, icon?, at, change?, detail?, reversible?, dependsOn? } – every change, any order; newest shows first */
  "entries": LedgerEntry[];
  /** Per entry – shown as before (struck) → after; or pass detail for a single line */
  "change"?: [before: React.ReactNode, after: React.ReactNode];
  /** Per entry – the changes it builds on; undoing one of those undoes this one too, if it can be */
  "dependsOn"?: string[];
  /** Per entry – false for things that can't be taken back (a sent email, a payout): no Undo, and "Can't undo" when something it builds on is undone */
  "reversible"?: boolean;
  /** Who made the changes, next to the title */
  "agent"?: string;
  /** The clock for "2m ago" (epoch ms) – defaults to now, kept fresh */
  "now"?: number;
  /** Ids of undone changes, controlled or not */
  "undone"?: string[];
  /** Ids of undone changes, controlled or not */
  "defaultUndone"?: string[];
  /** The change and its reversible dependents – revert or reapply them */
  "onUndo"?: (ids: string[]) => void;
  /** The change and its reversible dependents – revert or reapply them */
  "onRedo"?: (ids: string[]) => void;
  /** Lights up a change and what builds on it, as if its Undo were pointed at – for a walkthrough */
  "pointAt"?: string | null;
  /** Heading of the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentLedger: React.FC<AgentLedgerProps | (Partial<AgentLedgerProps> & { demo: true })>;
export declare const AgentLedgerRaw: React.FC<AgentLedgerProps>;
export declare const AgentLedgerDemo: React.FC<Partial<AgentLedgerProps>>;
export default AgentLedger;
