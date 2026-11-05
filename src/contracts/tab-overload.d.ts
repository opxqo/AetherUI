import * as React from "react";
export type TabOverloadProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Tab Overload — Overlapping browser windows where the highlight follows the hovered tab
 */
export declare const TabOverload: React.FC<TabOverloadProps | (Partial<TabOverloadProps> & { demo: true })>;
export declare const TabOverloadRaw: React.FC<TabOverloadProps>;
export declare const TabOverloadDemo: React.FC<Partial<TabOverloadProps>>;

export default TabOverload;
