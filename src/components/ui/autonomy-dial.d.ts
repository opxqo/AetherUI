import * as React from "react";

export type AgentAction = Record<string, any>;
export type AutonomyLevel = Record<string, any>;

export interface AutonomyDialProps {
  /** The agent's actions: { id, label, detail?, risk: "safe" | "risky" | "destructive", icon? } */
  actions?: AgentAction[];
  /** Controlled level: 0 Always ask, 1 If risky (safe actions run), 2 Full auto */
  level?: 0 | 1 | 2;
  /** Starting level when uncontrolled (default: 1) */
  defaultLevel?: 0 | 1 | 2;
  /** Another level was picked */
  onLevelChange?: (level: AutonomyLevel) => void;
  /** Controlled ids of actions that always ask, whatever the level */
  pinned?: string[];
  /** Starting locks when uncontrolled (default: []) */
  defaultPinned?: string[];
  /** A lock was set or removed */
  onPinnedChange?: (pinned: string[]) => void;
  /** Heading, e.g. the agent's name (default: "Agent permissions") */
  title?: string;
  /** Line under the heading (default: "What it may do without asking you") */
  subtitle?: string;
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
