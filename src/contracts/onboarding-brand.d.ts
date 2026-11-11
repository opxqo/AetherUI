import * as React from "react";
export interface OnboardingBrandScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  onNavigate?: (label: string) => void;
  workspace?: string;
  user?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const OnboardingBrandScreen: React.FC<OnboardingBrandScreenProps | (Partial<OnboardingBrandScreenProps> & { demo: true })>;
export declare const OnboardingBrandScreenRaw: React.FC<OnboardingBrandScreenProps>;
export declare const OnboardingBrandScreenDemo: React.FC<Partial<OnboardingBrandScreenProps>>;
export declare const OnboardingBrand: React.FC<OnboardingBrandScreenProps | (Partial<OnboardingBrandScreenProps> & { demo: true })>;
export default OnboardingBrandScreen;
