import React from 'react';
import { useTodoContext } from '../TodoContext';

export default function AddItemForm() {
  const { editingIndex, userInput, editTask, addTask, setUserInput } =
    useTodoContext();

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (editingIndex) {
      editTask(editingIndex);
      return;
    }

    if (userInput) {
      addTask();
    }
  }

  return (
    <form onSubmit={(e) => handleAddTask(e)}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        value={userInput}
        name="new-todo-input"
        autoComplete="off"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        {!editingIndex ? 'Add Task' : 'save'}
      </button>
    </form>
  );
}
