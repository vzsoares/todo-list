import React, { useState } from 'react';

interface AddItemFormProps {
  addTask: (taskContent: string) => void;
}
export default function AddItemForm({ addTask }: AddItemFormProps) {
  const [userInput, setUserInput] = useState<string>('');

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userInput) {
      addTask(userInput);
      setUserInput('');
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
        Add Task
      </button>
    </form>
  );
}
