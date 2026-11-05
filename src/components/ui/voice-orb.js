import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DbX9tDU_.js";

/**
 * Voice Orb (Product scenes)
 * The face of a voice assistant – a sphere of dots that breathes, catches sound, collapses into a spinning ring while thinking and ripples when it speaks
 */
export function VoiceOrb(props = {}) {
  const { demo, className, style, ...rest } = props;
  const hasCustomProps = demo === false || (!demo && Object.keys(rest).some(k => !["id", "children", "key", "ref"].includes(k) && !k.startsWith("data-") && !k.startsWith("aria-")));
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, { className, style, ...rest });
  }
  const element = React.createElement(DemoComponent, { className, style, ...rest });
  if (className || style) {
    return React.createElement("div", { className, style, "data-aether-wrapper": "" }, element);
  }
  return element;
}

export const VoiceOrbRaw = __InnerComponent || DemoComponent;
export const VoiceOrbDemo = DemoComponent;

export default VoiceOrb;
