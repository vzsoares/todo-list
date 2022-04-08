export interface ITaskItem {
  task: string;
  completed: boolean;
  id: string;
}

export type FilterKind = 'All' | 'Active' | 'Complete';
