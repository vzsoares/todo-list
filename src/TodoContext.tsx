import React, {
  useState,
  createContext,
  useMemo,
  ReactNode,
  useContext,
} from 'react';
import { ITaskItem, ITodoContextData } from './components/types';

const defaultTodoContextData: ITodoContextData = {
  userInput: '',
  editingIndex: '',
  taskList: [{ task: '', completed: false, id: '' }],
  addTask: () => {},
  setUserInput: () => {},
  editTask: () => {},
  removeTask: () => {},
  startEditing: () => {},
  checkTaskBox: () => {},
};

const TodoContext = createContext<ITodoContextData>(defaultTodoContextData);

interface TodoContextProviderProps {
  children: ReactNode;
}

function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [taskList, setTaskList] = useState<ITaskItem[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<string>('');

  function addTask() {
    const newTask = {
      task: userInput,
      completed: false,
      id: String(new Date().valueOf()),
    };
    setTaskList([...taskList, newTask]);
    setUserInput('');
  }

  function removeTask(taskID: string) {
    setTaskList(taskList.filter((task) => task.id !== taskID));
  }

  function startEditing(taskID: string) {
    setUserInput(taskList.find((task) => task.id === taskID)?.task ?? '');
    setEditingIndex(taskID);
  }

  function editTask(taskID: string) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskID) {
          return { ...task, task: userInput };
        }
        return task;
      }),
    );
    setEditingIndex('');
    setUserInput('');
  }

  function checkTaskBox(taskID: string) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskID) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  }

  const todoContextData = useMemo<ITodoContextData>(() => {
    return {
      userInput,
      editingIndex,
      taskList,
      addTask,
      setUserInput,
      editTask,
      removeTask,
      startEditing,
      checkTaskBox,
    };
  }, [userInput, editingIndex, taskList]);

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoContextProvider, useTodoContext, TodoContext };
