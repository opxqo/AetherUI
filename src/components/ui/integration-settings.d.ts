import * as React from "react";

export interface IntegrationSettingsProps {
  /** Name of the service */
  name?: any;
  /** Logo in the white tile */
  logo?: any;
  /** Small number next to the name */
  count?: any;
  /** Line under the name; switching off shows a paused note instead */
  meta?: any;
  /** enabled, siteUrl, timeZone and apiKey to start with */
  defaultValues?: any;
  /** Helper text under the address field */
  siteHint?: any;
  /** Choices in the time zone picker */
  timeZones?: any;
  /** Creates a key – a random demo key without it */
  onGenerateKey?: any;
  /** Called with all values from the save bar */
  onSave?: any;
  /** Called when the switch changes */
  onToggle?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Integration Settings — Settings card for a connected service – on/off switch, API key, validated site address, time zone and a save bar
 */
export declare const IntegrationSettings: React.FC<IntegrationSettingsProps>;
export declare const IntegrationSettingsRaw: React.FC<IntegrationSettingsProps>;
export declare const IntegrationSettingsDemo: React.FC<IntegrationSettingsProps>;

export default IntegrationSettings;
