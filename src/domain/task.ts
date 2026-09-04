export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum TaskStatus {
  BACKLOG = 'backlog',
  IN_PROGRESS = 'in_progress',
  REVIEW = 'review',
  DONE = 'done',
  ARCHIVED = 'archived',
}