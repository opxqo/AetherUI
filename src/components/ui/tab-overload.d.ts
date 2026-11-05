import * as React from "react";

export interface TabOverloadProps {
  /** Accessible description of the illustration (default: "Three overlapping browser windows…") */
  label?: any;
  /** Extra class on the root, e.g. for width or margins */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Tab Overload — Overlapping browser windows where the highlight follows the hovered tab
 */
export declare const TabOverload: React.FC<TabOverloadProps>;
export declare const TabOverloadRaw: React.FC<TabOverloadProps>;
export declare const TabOverloadDemo: React.FC<TabOverloadProps>;

export default TabOverload;
