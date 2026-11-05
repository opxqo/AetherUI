import * as React from "react";
export type TeamInviteAvatar = {
  /** Image URL – a square portrait, shown in a circle */
  src: string;
  /** Name for the accessible description */
  name?: string;
};

export type TeamInviteProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** The two teammates that are already connected, then the one being invited */
  avatars: [TeamInviteAvatar, TeamInviteAvatar, TeamInviteAvatar];
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Team Invite — Connected teammates – a cursor drags a new one into the empty slot, the line turns solid and they go online
 */
export declare const TeamInvite: React.FC<TeamInviteProps | (Partial<TeamInviteProps> & { demo: true })>;
export declare const TeamInviteRaw: React.FC<TeamInviteProps>;
export declare const TeamInviteDemo: React.FC<Partial<TeamInviteProps>>;

export default TeamInvite;
