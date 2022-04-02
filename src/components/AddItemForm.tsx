import React from 'react';

type TaskListItem = {
  task: string;
  completed: boolean;
  id: string;
};
interface TaskListItemMap {
  [value: string | number]: TaskListItem;
}
interface AddItemFormProps {
  userInput: string;
  setUserInput: (value: string) => void;
  taskList: TaskListItemMap;
  setTaskList: (value: any) => void;
}

function AddItemForm({
  userInput,
  setUserInput,
  taskList,
  setTaskList,
}: AddItemFormProps) {
  function getNewTaskList() {
    const uniqueTaskID = String(new Date().valueOf());
    const typedTask = userInput;
    const myReturn: any = { ...taskList };
    myReturn[uniqueTaskID] = {
      task: typedTask,
      completed: false,
      id: uniqueTaskID,
    };
    return myReturn;
  }
  const domInputId = 'new-todo-input';
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (userInput) {
      setTaskList(getNewTaskList());
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
export default AddItemForm;
