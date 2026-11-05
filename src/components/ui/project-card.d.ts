import * as React from "react";

export interface ProjectCardProps {
  /** Name of the project */
  title?: any;
  /** { id, label, done?, assignee? } – one ring segment and one row each; assignee is a member's name */
  tasks?: any;
  /** Called with the full list after a tick. With it the card shows exactly what you pass; without it the ticks live inside the card */
  onTasksChange?: any;
  /** Id of the chosen status (default: first option) */
  status?: any;
  /** { id, label, tone? } – tone is red, amber, green, blue, violet or gray and also picks the icon; icon replaces it (default: To do, In progress, In review, Done) */
  statuses?: any;
  /** Called with the picked status */
  onStatusChange?: any;
  /** Ready-to-show due date, e.g. "Oct 24" – shown as "Due Oct 24" */
  due?: any;
  /** { name, avatar? } – the avatars in the head; hovering one shows only that person's subtasks. Initials on a soft color without an image */
  members?: any;
  /** A button on the tray of the open card, e.g. Open */
  action?: any;
  /** The line on the tray while nothing is hovered (default: "2 left" / "All done") */
  hint?: any;
  /** Hover opens under the mouse; taps and the keyboard always toggle (default: "hover") */
  trigger?: any;
  /** Controlled open state */
  open?: any;
  /** Starts open when uncontrolled (default: false) */
  defaultOpen?: any;
  /** Called when the card opens or closes */
  onOpenChange?: any;
  /** Extra class on the root */
  className?: any;
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
