import * as React from "react";
export interface MissionControlProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect" | "demo" | "className" | "style" | "children" | "ref"> {
  missions?: Array<{ id: string; name: string; status: string; progress?: number }>;
  onSelect?: (id: string) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const MissionControl: React.FC<MissionControlProps | (Partial<MissionControlProps> & { demo: true })>;
export declare const MissionControlRaw: React.FC<MissionControlProps>;
export declare const MissionControlDemo: React.FC<Partial<MissionControlProps>>;
export default MissionControl;
