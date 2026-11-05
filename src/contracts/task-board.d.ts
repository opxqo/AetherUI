import type { TaskStatus, TaskLabel, TaskPerson, Task } from "./shared.js";
export type { TaskStatus, TaskLabel, TaskPerson, Task } from "./shared.js";
import * as React from "react";
export interface TaskBoardProps extends Omit<React.HTMLAttributes<HTMLElement>, "tasks" | "statuses" | "labels" | "people" | "path" | "onChange" | "demo" | "className" | "style" | "children" | "ref"> {
  /** key, title, status, priority (0–4), estimate, labels, assignee, dueIn, subtasks, pullRequest, created */
  "tasks": Task[];
  /** Columns in order: id, label and icon */
  "statuses"?: TaskStatus[];
  /** id, label and color – used on cards, in the filter and in the panel */
  "labels"?: TaskLabel[];
  /** id, name and avatar for assignees */
  "people"?: TaskPerson[];
  /** Breadcrumb above the board */
  "path"?: string[];
  /** Called with all tasks after every move, edit, add or delete */
  "onChange"?: (tasks: Task[]) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const TaskBoard: React.FC<TaskBoardProps | (Partial<TaskBoardProps> & { demo: true })>;
export declare const TaskBoardRaw: React.FC<TaskBoardProps>;
export declare const TaskBoardDemo: React.FC<Partial<TaskBoardProps>>;
export default TaskBoard;
