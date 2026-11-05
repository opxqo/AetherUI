import * as React from "react";

export interface PricingPlansProps {
  /** Name, monthly and yearly price, limits, sync chip, features and an onSelect callback. One to three plans sit side by side, four two by two; a price that is not a number reads “Custom”; none shows a short empty note */
  plans?: any;
  /** Section heading (default: "Choose your plan") */
  title?: any;
  /** Line under the heading */
  subtitle?: any;
  /** Billing period shown first (default: "yearly") */
  defaultBilling?: any;
  /** Symbol in front of the prices, or a three-letter code like "EUR" to format them as that currency (cents only when a price has them) (default: "$") */
  currency?: any;
  /** Extra class on the section */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Pricing Plans — Pricing section with a monthly / yearly switch, three plan cards and collapsible details
 */
export declare const PricingPlans: React.FC<PricingPlansProps>;
export declare const PricingPlansRaw: React.FC<PricingPlansProps>;
export declare const PricingPlansDemo: React.FC<PricingPlansProps>;

export default PricingPlans;
