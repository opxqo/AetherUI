import * as React from "react";

export interface GlowCloudProps {
  /** Blue-to-cyan or red-to-orange sky; the cloud's colors follow (default: "blue") */
  color?: any;
  /** Fill the whole box with the sky gradient; false leaves the cloud on a transparent background with a soft colored edge (default: true) */
  background?: any;
  /** The eyes follow the pointer while it's over the illustration (default: true) */
  followPointer?: any;
  /** Accessible description of the illustration */
  label?: any;
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
 * Glow Cloud — A glowing cloud with eyes in blue or red-orange – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export declare const GlowCloud: React.FC<GlowCloudProps>;
export declare const GlowCloudRaw: React.FC<GlowCloudProps>;
export declare const GlowCloudDemo: React.FC<GlowCloudProps>;

export default GlowCloud;
