import * as React from "react";
export type AgentTool = "linkedin" | "hubspot" | "slack" | "gmail" | "salesforce";

export type AgentTeamMember = {
  /** Role shown in the pill */
  role: string;
  /** Square portrait, shown in a circle */
  avatar: string;
  /** One or two tools, drawn as overlapping logo circles */
  tools?: AgentTool[];
};

export type AgentTeamProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Text that types itself into the prompt */
  prompt?: string;
  /** Exactly three agents, left to right */
  members: [AgentTeamMember, AgentTeamMember, AgentTeamMember];
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};

export type Phase = "typing" | "sent" | "team" | "reset";
/**
 * Agent Team — A prompt types itself and branches out into three agents, each with a role and overlapping tool logos
 */
export declare const AgentTeam: React.FC<AgentTeamProps | (Partial<AgentTeamProps> & { demo: true })>;
export declare const AgentTeamRaw: React.FC<AgentTeamProps>;
export declare const AgentTeamDemo: React.FC<Partial<AgentTeamProps>>;

export default AgentTeam;
