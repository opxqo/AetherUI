import type { AutonomyLevel, AgentAction } from "./shared.js";
export type { AutonomyLevel, AgentAction } from "./shared.js";
import * as React from "react";
export interface AutonomyDialProps extends Omit<React.HTMLAttributes<HTMLElement>, "actions" | "level" | "defaultLevel" | "onLevelChange" | "pinned" | "defaultPinned" | "onPinnedChange" | "title" | "subtitle" | "demo" | "className" | "style" | "children" | "ref"> {
  /** The agent's actions: { id, label, detail?, risk: "safe" | "risky" | "destructive", icon? } */
  "actions"?: AgentAction[];
  /** Controlled level: 0 Always ask, 1 If risky (safe actions run), 2 Full auto */
  "level"?: 0 | 1 | 2;
  /** Starting level when uncontrolled */
  "defaultLevel"?: 0 | 1 | 2;
  /** Another level was picked */
  "onLevelChange"?: (level: AutonomyLevel) => void;
  /** Controlled ids of actions that always ask, whatever the level */
  "pinned"?: string[];
  /** Starting locks when uncontrolled */
  "defaultPinned"?: string[];
  /** A lock was set or removed */
  "onPinnedChange"?: (pinned: string[]) => void;
  /** Heading, e.g. the agent's name */
  "title"?: string;
  /** Line under the heading */
  "subtitle"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AutonomyDial: React.FC<AutonomyDialProps | (Partial<AutonomyDialProps> & { demo: true })>;
export declare const AutonomyDialRaw: React.FC<AutonomyDialProps>;
export declare const AutonomyDialDemo: React.FC<Partial<AutonomyDialProps>>;
export default AutonomyDial;
