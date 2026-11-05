import * as React from "react";

export type ProjectTask = Record<string, any>;
export type ProjectOption = Record<string, any>;
export type ProjectMember = Record<string, any>;

export interface ProjectCardProps {
  /** Name of the project */
  title?: string;
  /** { id, label, done?, assignee? } – one ring segment and one row each; assignee is a member's name */
  tasks?: ProjectTask[];
  /** Called with the full list after a tick. With it the card shows exactly what you pass; without it the ticks live inside the card */
  onTasksChange?: (tasks: ProjectTask[]) => void;
  /** Id of the chosen status (default: first option) */
  status?: string;
  /** { id, label, tone? } – tone is red, amber, green, blue, violet or gray and also picks the icon; icon replaces it (default: To do, In progress, In review, Done) */
  statuses?: ProjectOption[];
  /** Called with the picked status */
  onStatusChange?: (id: string) => void;
  /** Ready-to-show due date, e.g. "Oct 24" – shown as "Due Oct 24" */
  due?: string;
  /** { name, avatar? } – the avatars in the head; hovering one shows only that person's subtasks. Initials on a soft color without an image */
  members?: ProjectMember[];
  /** A button on the tray of the open card, e.g. Open */
  action?: { label: string; onClick: () => void };
  /** The line on the tray while nothing is hovered (default: "2 left" / "All done") */
  hint?: ReactNode;
  /** Hover opens under the mouse; taps and the keyboard always toggle (default: "hover") */
  trigger?: "hover" | "click";
  /** Controlled open state */
  open?: boolean;
  /** Starts open when uncontrolled (default: false) */
  defaultOpen?: boolean;
  /** Called when the card opens or closes */
  onOpenChange?: (open: boolean) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Project Card — A two-line project summary that quietly unfolds on hover – a progress ring with one segment per subtask, a people filter and a status picker, all linked by hover
 */
export declare const ProjectCard: React.FC<ProjectCardProps>;
export declare const ProjectCardRaw: React.FC<ProjectCardProps>;
export declare const ProjectCardDemo: React.FC<ProjectCardProps>;

export default ProjectCard;
