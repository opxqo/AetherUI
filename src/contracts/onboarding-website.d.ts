import * as React from "react";
export interface OnboardingWebsiteScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const OnboardingWebsiteScreen: React.FC<OnboardingWebsiteScreenProps | (Partial<OnboardingWebsiteScreenProps> & { demo: true })>;
export declare const OnboardingWebsiteScreenRaw: React.FC<OnboardingWebsiteScreenProps>;
export declare const OnboardingWebsiteScreenDemo: React.FC<Partial<OnboardingWebsiteScreenProps>>;
export declare const OnboardingWebsite: React.FC<OnboardingWebsiteScreenProps | (Partial<OnboardingWebsiteScreenProps> & { demo: true })>;
export default OnboardingWebsiteScreen;
