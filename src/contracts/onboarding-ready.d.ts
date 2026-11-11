import * as React from "react";
export interface OnboardingReadyScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const OnboardingReadyScreen: React.FC<OnboardingReadyScreenProps | (Partial<OnboardingReadyScreenProps> & { demo: true })>;
export declare const OnboardingReadyScreenRaw: React.FC<OnboardingReadyScreenProps>;
export declare const OnboardingReadyScreenDemo: React.FC<Partial<OnboardingReadyScreenProps>>;
export declare const OnboardingReady: React.FC<OnboardingReadyScreenProps | (Partial<OnboardingReadyScreenProps> & { demo: true })>;
export default OnboardingReadyScreen;
