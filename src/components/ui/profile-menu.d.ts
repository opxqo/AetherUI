import * as React from "react";

export interface ProfileMenuProps {
  /** Name of the signed-in user */
  name?: any;
  /** Email under the name, cut off with an ellipsis when long */
  email?: any;
  /** Replaces the default avatar, e.g. an <img> */
  avatar?: any;
  /** Actions with label, icon, optional badge and onSelect */
  items?: any;
  /** Profile setup progress: done, total, the next step and onContinue – leave empty to hide */
  setup?: any;
  /** Extra class on the card */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Profile Menu — Account card with the signed-in user, menu actions and profile setup progress
 */
export declare const ProfileMenu: React.FC<ProfileMenuProps>;
export declare const ProfileMenuRaw: React.FC<ProfileMenuProps>;
export declare const ProfileMenuDemo: React.FC<ProfileMenuProps>;
export declare const SettingsIcon: React.FC<ProfileMenuProps>;
export declare const LogoutIcon: React.FC<ProfileMenuProps>;
export default ProfileMenu;
