import * as React from "react";
export type ProfileMenuItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  /** Small pill on the right, e.g. "New" */
  badge?: string;
  onSelect?: () => void;
};

export type ProfileSetup = {
  /** Steps finished so far */
  done: number;
  total: number;
  /** The next open step, shown as a shortcut under the bar */
  next?: string;
  onContinue?: () => void;
};

export type ProfileMenuProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  name: string;
  email: string;
  /** Replaces the default avatar */
  avatar?: React.ReactNode;
  items?: ProfileMenuItem[];
  /** Profile setup progress under the actions – leave empty to hide */
  setup?: ProfileSetup;
  className?: string;
};
/**
 * Profile Menu — Account card with the signed-in user, menu actions and profile setup progress
 */
export declare const ProfileMenu: React.FC<ProfileMenuProps | (Partial<ProfileMenuProps> & { demo: true })>;
export declare const ProfileMenuRaw: React.FC<ProfileMenuProps>;
export declare const ProfileMenuDemo: React.FC<Partial<ProfileMenuProps>>;
export declare const SettingsIcon: React.FC<ProfileMenuProps | (Partial<ProfileMenuProps> & { demo: true })>;
export declare const LogoutIcon: React.FC<ProfileMenuProps | (Partial<ProfileMenuProps> & { demo: true })>;
export default ProfileMenu;
