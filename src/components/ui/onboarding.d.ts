import * as React from "react";

export interface OnboardingScreenProps {
  /** Step shown first; the steps before it count as done (default: 2) */
  defaultStep?: any;
  /** Addresses already in the invite field, e.g. from the sign-up form (default: ["jamie@acme.com"]) */
  defaultInvites?: any;
  /** Called after Create agent (or skipping the last step) with workspace, slug, team size, tools, invites, role and template */
  onComplete?: any;
  /** Called with the label of a sidebar item or a next step (Chat, Integrations, Analytics) */
  onNavigate?: any;
  /** Workspace name in the sidebar, the greeting and the first field (default: "Acme") */
  workspace?: any;
  /** Account at the bottom of the sidebar; the first name is used in the greeting (default: { name: "Alex Morgan" }) */
  user?: any;
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
 * Onboarding — First-run flow of an AI workspace: workspace setup, tool connections, team invites and a first agent, with a getting-started checklist
 */
export declare const OnboardingScreen: React.FC<OnboardingScreenProps>;
export declare const OnboardingScreenRaw: React.FC<OnboardingScreenProps>;
export declare const OnboardingScreenDemo: React.FC<OnboardingScreenProps>;
export declare const Onboarding: React.FC<OnboardingScreenProps>;
export default OnboardingScreen;
