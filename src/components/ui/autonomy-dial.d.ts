import * as React from "react";

export interface AutonomyDialProps {
  /** The agent's actions: { id, label, detail?, risk: "safe" | "risky" | "destructive", icon? } */
  actions?: any;
  /** Controlled level: 0 Always ask, 1 If risky (safe actions run), 2 Full auto */
  level?: any;
  /** Starting level when uncontrolled (default: 1) */
  defaultLevel?: any;
  /** Another level was picked */
  onLevelChange?: any;
  /** Controlled ids of actions that always ask, whatever the level */
  pinned?: any;
  /** Starting locks when uncontrolled (default: []) */
  defaultPinned?: any;
  /** A lock was set or removed */
  onPinnedChange?: any;
  /** Heading, e.g. the agent's name (default: "Agent permissions") */
  title?: any;
  /** Line under the heading (default: "What it may do without asking you") */
  subtitle?: any;
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
 * Autonomy Dial — How much an agent may do on its own – a three-stop dial, and its real actions gliding between “Runs on its own” and “Asks you first”, with a lock for what always asks
 */
export declare const AutonomyDial: React.FC<AutonomyDialProps>;
export declare const AutonomyDialRaw: React.FC<AutonomyDialProps>;
export declare const AutonomyDialDemo: React.FC<AutonomyDialProps>;

export default AutonomyDial;
