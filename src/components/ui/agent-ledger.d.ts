import * as React from "react";

export interface AgentLedgerProps {
  /** { id, action, target?, system, icon?, at, change?, detail?, reversible?, dependsOn? } – every change, any order; newest shows first */
  entries?: any;
  /** Per entry – shown as before (struck) → after; or pass detail for a single line */
  change?: any;
  /** Per entry – the changes it builds on; undoing one of those undoes this one too, if it can be */
  dependsOn?: any;
  /** Per entry – false for things that can't be taken back (a sent email, a payout): no Undo, and "Can't undo" when something it builds on is undone (default: true) */
  reversible?: any;
  /** Who made the changes, next to the title */
  agent?: any;
  /** The clock for "2m ago" (epoch ms) – defaults to now, kept fresh */
  now?: any;
  /** Ids of undone changes, controlled or not */
  "undone / defaultUndone"?: any;
  /** The change and its reversible dependents – revert or reapply them */
  "onUndo / onRedo"?: any;
  /** Lights up a change and what builds on it, as if its Undo were pointed at – for a walkthrough */
  pointAt?: any;
  /** Heading of the bar (default: "Ledger") */
  title?: any;
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
 * Agent Ledger — Everything an agent changed in your systems, each change with an undo – before and after per row, and pointing at Undo shows what builds on it: what would be undone too, and what can't be taken back
 */
export declare const AgentLedger: React.FC<AgentLedgerProps>;
export declare const AgentLedgerRaw: React.FC<AgentLedgerProps>;
export declare const AgentLedgerDemo: React.FC<AgentLedgerProps>;

export default AgentLedger;
