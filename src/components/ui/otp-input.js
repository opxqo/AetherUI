import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DNDBlImO.js";

/**
 * OTP Input (Inputs)
 * The verification code field done right – a gliding focus ring, paste and SMS autofill, a calm shake on errors and a morph into Verified
 */
export function OtpInput(props = {}) {
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

export const OtpInputRaw = __InnerComponent || DemoComponent;
export const OtpInputDemo = DemoComponent;
export const OTPInput = OtpInput;
export default OtpInput;
