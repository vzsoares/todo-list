import React from 'react';
import { TaskListMap } from './AddItemForm';

interface TaskDataProps {
  taskData: TaskListMap;
}

function Task({ taskData }: TaskDataProps) {
  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" />
          <label className="todo-label" htmlFor="todo-0">
            {taskData.task}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            save
            <span className="visually-hidden" />
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden" />
          </button>
        </div>
      </li>
    </ul>
  );
}
export default Task;
