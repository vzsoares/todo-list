import React from 'react';

interface TaskProps {
  id: string;
  taskList: any;
}
function Task({ id, taskList }: TaskProps) {
  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" />
          <label className="todo-label" htmlFor="todo-0">
            {taskList[id].task}
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
