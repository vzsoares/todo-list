import React from 'react';

export interface TaskListMap {
  task: string;
  completed: boolean;
  id: string;
}
interface AddItemFormProps {
  userInput: string;
  setUserInput: (value: string) => void;
  taskList: TaskListMap[];
  setTaskList: (value: TaskListMap[]) => void;
}

export function AddItemForm({
  userInput,
  setUserInput,
  taskList,
  setTaskList,
}: AddItemFormProps) {
  const domInputId = 'new-todo-input';
  function addNewTask() {
    const myNewTask = {
      task: userInput,
      completed: false,
      id: String(new Date().valueOf()),
    };
    setTaskList([...taskList, myNewTask]);
  }
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userInput) {
      addNewTask();
      setUserInput('');
    }
  }
  return (
    <form onSubmit={(e) => handleAddTask(e)}>
      <h2 className="label-wrapper">
        <label htmlFor={domInputId} className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        id={domInputId}
        className="input input__lg"
        value={userInput}
        name={domInputId}
        autoComplete="off"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Task
      </button>
    </form>
  );
}
