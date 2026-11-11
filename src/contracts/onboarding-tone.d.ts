import * as React from "react";
export interface OnboardingToneScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const OnboardingToneScreen: React.FC<OnboardingToneScreenProps | (Partial<OnboardingToneScreenProps> & { demo: true })>;
export declare const OnboardingToneScreenRaw: React.FC<OnboardingToneScreenProps>;
export declare const OnboardingToneScreenDemo: React.FC<Partial<OnboardingToneScreenProps>>;
export declare const OnboardingTone: React.FC<OnboardingToneScreenProps | (Partial<OnboardingToneScreenProps> & { demo: true })>;
export default OnboardingToneScreen;
