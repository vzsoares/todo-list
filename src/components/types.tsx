export interface ITaskItem {
  task: string;
  completed: boolean;
  id: string;
}

export interface IAppContextData {
  editingIndex: string;
  userInput: string;
  taskList: ITaskItem[];
  addTask: () => void;
  setUserInput: (input: string) => void;
  editTask: (taskID: string) => void;
  removeTask: (taskID: string) => void;
  checkTaskBox: (taskID: string) => void;
  startEditing: (taskID: string) => void;
}

export type FilterKind = 'All' | 'Active' | 'Complete';
