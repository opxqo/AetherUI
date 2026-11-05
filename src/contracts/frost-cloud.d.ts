import * as React from "react";
export type FrostCloudProps = {
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
 * Frost Cloud — A frosted white cloud with eyes cut out of it, on a red-orange or blue sky – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export declare const FrostCloud: React.FC<FrostCloudProps | (Partial<FrostCloudProps> & { demo: true })>;
export declare const FrostCloudRaw: React.FC<FrostCloudProps>;
export declare const FrostCloudDemo: React.FC<Partial<FrostCloudProps>>;

export default FrostCloud;
