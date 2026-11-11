import * as React from "react";
export interface InspectAgentCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "demo" | "className" | "style" | "children" | "ref"> {
  agent?: { name: string; role?: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const InspectAgentCard: React.FC<InspectAgentCardProps | (Partial<InspectAgentCardProps> & { demo: true })>;
export declare const InspectAgentCardRaw: React.FC<InspectAgentCardProps>;
export declare const InspectAgentCardDemo: React.FC<Partial<InspectAgentCardProps>>;
export default InspectAgentCard;
