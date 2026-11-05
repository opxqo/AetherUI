import type { Plan } from "./shared.js";
export type { Plan } from "./shared.js";
import * as React from "react";
export interface PricingPlansProps extends Omit<React.HTMLAttributes<HTMLElement>, "plans" | "title" | "subtitle" | "defaultBilling" | "currency" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Name, monthly and yearly price, limits, sync chip, features and an onSelect callback. One to three plans sit side by side, four two by two; a price that is not a number reads “Custom”; none shows a short empty note */
  "plans"?: Plan[];
  /** Section heading */
  "title"?: string;
  /** Line under the heading */
  "subtitle"?: string;
  /** Billing period shown first */
  "defaultBilling"?: "monthly" | "yearly";
  /** Symbol in front of the prices, or a three-letter code like "EUR" to format them as that currency (cents only when a price has them) */
  "currency"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const PricingPlans: React.FC<PricingPlansProps | (Partial<PricingPlansProps> & { demo: true })>;
export declare const PricingPlansRaw: React.FC<PricingPlansProps>;
export declare const PricingPlansDemo: React.FC<Partial<PricingPlansProps>>;
export default PricingPlans;
