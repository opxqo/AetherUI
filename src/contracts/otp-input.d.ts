import * as React from "react";
export type OtpStatus = "idle" | "verifying" | "error" | "success";

export type OtpInputProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Number of boxes */
  length?: number;
  /** A small dash between the boxes – `true` puts it in the middle, a number after that many boxes */
  separator?: boolean | number;
  /** Digits only (numeric keyboard on phones); `false` allows letters too, shown in capitals */
  numeric?: boolean;
  /** The code – makes it controlled */
  value?: string;
  /** Starting code when uncontrolled */
  defaultValue?: string;
  onChange?: (code: string) => void;
  /** Called once the last box is filled – typed, pasted or autofilled */
  onComplete?: (code: string) => void;
  status?: OtpStatus;
  /** Shown below the boxes while `status` is "error" */
  errorMessage?: React.ReactNode;
  /** Clears the boxes shortly after an error, ready for the next try */
  clearOnError?: boolean;
  /** Text in the pill after a successful check */
  successLabel?: string;
  /** Shows "Resend code" below the boxes once the countdown is over */
  onResend?: () => void;
  /** Seconds until the code can be resent */
  resendIn?: number;
  /** Center the boxes and the lines below them */
  align?: "start" | "center";
  disabled?: boolean;
  autoFocus?: boolean;
  /** Accessible name of the field */
  label?: string;
  className?: string;
};
/**
 * OTP Input — The verification code field done right – a gliding focus ring, paste and SMS autofill, a calm shake on errors and a morph into Verified
 */
export declare const OtpInput: React.FC<OtpInputProps | (Partial<OtpInputProps> & { demo: true })>;
export declare const OtpInputRaw: React.FC<OtpInputProps>;
export declare const OtpInputDemo: React.FC<Partial<OtpInputProps>>;
export declare const OTPInput: React.FC<OtpInputProps | (Partial<OtpInputProps> & { demo: true })>;
export default OtpInput;
