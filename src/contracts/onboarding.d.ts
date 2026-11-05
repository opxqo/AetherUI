import type { Step, OnboardingValues } from "./shared.js";
export type { Step, OnboardingValues } from "./shared.js";
import * as React from "react";
export interface OnboardingScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "defaultStep" | "defaultInvites" | "onComplete" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Step shown first; the steps before it count as done */
  "defaultStep"?: 1 | 2 | 3 | 4;
  /** Addresses already in the invite field, e.g. from the sign-up form */
  "defaultInvites"?: string[];
  /** Called after Create agent (or skipping the last step) with workspace, slug, team size, tools, invites, role and template */
  "onComplete"?: (values: OnboardingValues) => void;
  /** Called with the label of a sidebar item or a next step (Chat, Integrations, Analytics) */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar, the greeting and the first field */
  "workspace"?: string;
  /** Account at the bottom of the sidebar; the first name is used in the greeting */
  "user"?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const OnboardingScreen: React.FC<OnboardingScreenProps | (Partial<OnboardingScreenProps> & { demo: true })>;
export declare const OnboardingScreenRaw: React.FC<OnboardingScreenProps>;
export declare const OnboardingScreenDemo: React.FC<Partial<OnboardingScreenProps>>;
export declare const Onboarding: React.FC<OnboardingScreenProps | (Partial<OnboardingScreenProps> & { demo: true })>;
export default OnboardingScreen;
