import * as React from "react";

export type AgentTeamMember = Record<string, any>;

export interface AgentTeamProps {
  /** Text that types itself into the prompt pill (default: "Build a team to work my inbound pipeline") */
  prompt?: string;
  /** Required. Three agents, left to right – { role, avatar, tools? } with up to two of linkedin, hubspot, slack, gmail, salesforce */
  members?: [AgentTeamMember, AgentTeamMember, AgentTeamMember];
  /** Accessible description – by default built from the prompt and the roles */
  label?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Team — A prompt types itself and branches out into three agents, each with a role and overlapping tool logos
 */
export declare const AgentTeam: React.FC<AgentTeamProps>;
export declare const AgentTeamRaw: React.FC<AgentTeamProps>;
export declare const AgentTeamDemo: React.FC<AgentTeamProps>;

export default AgentTeam;
