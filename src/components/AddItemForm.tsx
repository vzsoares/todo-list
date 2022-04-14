import React from 'react';
import { TodoContext } from '../TodoContext';

export default function AddItemForm() {
  return (
    <TodoContext.Consumer>
      {(context) => {
        function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
          e.preventDefault();

          if (context.editingIndex) {
            context.editTask(context.editingIndex);
            return;
          }

          if (context.userInput) {
            context.addTask();
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
              value={context.userInput}
              name="new-todo-input"
              autoComplete="off"
              onChange={(e) => context.setUserInput(e.target.value)}
            />
            <button type="submit" className="btn btn__primary btn__lg">
              {!context.editingIndex ? 'Add Task' : 'save'}
            </button>
          </form>
        );
      }}
    </TodoContext.Consumer>
  );
}
