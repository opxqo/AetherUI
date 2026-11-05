import type { Id, ProjectTask, ProjectOption, ProjectMember } from "./shared.js";
export type { Id, ProjectTask, ProjectOption, ProjectMember } from "./shared.js";
import * as React from "react";
export interface ProjectCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "tasks" | "onTasksChange" | "status" | "statuses" | "onStatusChange" | "due" | "members" | "action" | "hint" | "trigger" | "open" | "defaultOpen" | "onOpenChange" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Name of the project */
  "title"?: string;
  /** { id, label, done?, assignee? } – one ring segment and one row each; assignee is a member's name */
  "tasks": ProjectTask[];
  /** Called with the full list after a tick. With it the card shows exactly what you pass; without it the ticks live inside the card */
  "onTasksChange"?: (tasks: ProjectTask[]) => void;
  /** Id of the chosen status */
  "status"?: string;
  /** { id, label, tone? } – tone is red, amber, green, blue, violet or gray and also picks the icon; icon replaces it */
  "statuses"?: ProjectOption[];
  /** Called with the picked status */
  "onStatusChange"?: (id: string) => void;
  /** Ready-to-show due date, e.g. "Oct 24" – shown as "Due Oct 24" */
  "due"?: string;
  /** { name, avatar? } – the avatars in the head; hovering one shows only that person's subtasks. Initials on a soft color without an image */
  "members"?: ProjectMember[];
  /** A button on the tray of the open card, e.g. Open */
  "action"?: { label: string; onClick: () => void };
  /** The line on the tray while nothing is hovered */
  "hint"?: React.ReactNode;
  /** Hover opens under the mouse; taps and the keyboard always toggle */
  "trigger"?: "hover" | "click";
  /** Controlled open state */
  "open"?: boolean;
  /** Starts open when uncontrolled */
  "defaultOpen"?: boolean;
  /** Called when the card opens or closes */
  "onOpenChange"?: (open: boolean) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ProjectCard: React.FC<ProjectCardProps | (Partial<ProjectCardProps> & { demo: true })>;
export declare const ProjectCardRaw: React.FC<ProjectCardProps>;
export declare const ProjectCardDemo: React.FC<Partial<ProjectCardProps>>;
export default ProjectCard;
