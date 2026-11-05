import * as React from "react";

export type TeamInviteAvatar = Record<string, any>;

export interface TeamInviteProps {
  /** Required. The two connected teammates, then the one being invited – each { src, name? } with a square portrait */
  avatars?: [TeamInviteAvatar, TeamInviteAvatar, TeamInviteAvatar];
  /** Accessible description – by default built from the names */
  label?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Team Invite — Connected teammates – a cursor drags a new one into the empty slot, the line turns solid and they go online
 */
export declare const TeamInvite: React.FC<TeamInviteProps>;
export declare const TeamInviteRaw: React.FC<TeamInviteProps>;
export declare const TeamInviteDemo: React.FC<TeamInviteProps>;

export default TeamInvite;
