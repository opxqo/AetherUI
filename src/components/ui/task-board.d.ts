import * as React from "react";

export type Task = Record<string, any>;
export type TaskStatus = Record<string, any>;
export type TaskLabel = Record<string, any>;
export type TaskPerson = Record<string, any>;

export interface TaskBoardProps {
  /** key, title, status, priority (0–4), estimate, labels, assignee, dueIn, subtasks, pullRequest, created */
  tasks?: Task[];
  /** Columns in order: id, label and icon */
  statuses?: TaskStatus[];
  /** id, label and color – used on cards, in the filter and in the panel */
  labels?: TaskLabel[];
  /** id, name and avatar for assignees */
  people?: TaskPerson[];
  /** Breadcrumb above the board */
  path?: string[];
  /** Called with all tasks after every move, edit, add or delete */
  onChange?: (tasks: Task[]) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Task Board — Kanban board with drag and drop, quick add, a detail panel, search, label filters and a compact view
 */
export declare const TaskBoard: React.FC<TaskBoardProps>;
export declare const TaskBoardRaw: React.FC<TaskBoardProps>;
export declare const TaskBoardDemo: React.FC<TaskBoardProps>;

export default TaskBoard;
