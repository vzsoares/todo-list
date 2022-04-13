import React from 'react';
import { ITaskItem } from './types';
import { AppContext } from '../AppContext';

function TaskItem({ taskData }: { taskData: ITaskItem }) {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <ul
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
          >
            <li className="todo stack-small">
              <div className="c-cb">
                <input
                  id={taskData.id}
                  type="checkbox"
                  checked={taskData.completed}
                  onChange={() => context.checkTaskBox(taskData.id)}
                />
                <label className="todo-label" htmlFor={taskData.id}>
                  {taskData.task}
                </label>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    context.editingIndex === taskData.id
                      ? context.editTask(context.editingIndex)
                      : context.startEditing(taskData.id)
                  }
                >
                  {context.editingIndex === taskData.id ? 'Save' : 'Edit'}
                  <span className="visually-hidden" />
                </button>
                <button
                  onClick={() => context.removeTask(taskData.id)}
                  type="button"
                  className="btn btn__danger"
                >
                  Delete <span className="visually-hidden" />
                </button>
              </div>
            </li>
          </ul>
        );
      }}
    </AppContext.Consumer>
  );
}
export default TaskItem;
