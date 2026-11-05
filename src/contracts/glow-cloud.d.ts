import * as React from "react";
export type GlowCloudProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Fill the whole illustration with the sky gradient; false leaves the cloud on a transparent background */
  background?: boolean;
  /** "blue": a blue-to-cyan sky · "orange": a red-to-orange sky */
  color?: "blue" | "orange";
  /** The eyes follow the pointer while it's over the illustration */
  followPointer?: boolean;
  className?: string;
  /** Accessible description of the illustration */
  label?: string;
};
/**
 * Glow Cloud — A glowing cloud with eyes in blue or red-orange – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export declare const GlowCloud: React.FC<GlowCloudProps | (Partial<GlowCloudProps> & { demo: true })>;
export declare const GlowCloudRaw: React.FC<GlowCloudProps>;
export declare const GlowCloudDemo: React.FC<Partial<GlowCloudProps>>;

export default GlowCloud;
