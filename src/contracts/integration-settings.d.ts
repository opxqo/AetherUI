import type { IntegrationValues } from "./shared.js";
export type { IntegrationValues } from "./shared.js";
import * as React from "react";
export interface IntegrationSettingsProps extends Omit<React.HTMLAttributes<HTMLElement>, "name" | "logo" | "count" | "meta" | "defaultValues" | "siteHint" | "timeZones" | "onGenerateKey" | "onSave" | "onToggle" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Name of the service */
  "name": string;
  /** Logo in the white tile */
  "logo"?: React.ReactNode;
  /** Small number next to the name */
  "count"?: number;
  /** Line under the name; switching off shows a paused note instead */
  "meta"?: string;
  /** enabled, siteUrl, timeZone and apiKey to start with */
  "defaultValues"?: Partial<IntegrationValues>;
  /** Helper text under the address field */
  "siteHint"?: string;
  /** Choices in the time zone picker */
  "timeZones"?: string[];
  /** Creates a key – a random demo key without it */
  "onGenerateKey"?: () => string | Promise<string>;
  /** Called with all values from the save bar */
  "onSave"?: (values: IntegrationValues) => void | Promise<void>;
  /** Called when the switch changes */
  "onToggle"?: (enabled: boolean) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const IntegrationSettings: React.FC<IntegrationSettingsProps | (Partial<IntegrationSettingsProps> & { demo: true })>;
export declare const IntegrationSettingsRaw: React.FC<IntegrationSettingsProps>;
export declare const IntegrationSettingsDemo: React.FC<Partial<IntegrationSettingsProps>>;
export default IntegrationSettings;
