import React from 'react';
import { ITaskItem } from './types';

interface TaskItemProps {
  taskData: ITaskItem;
  editingIndex: string;
  removeTask: (taskID: string) => void;
  checkTaskBox: (taskID: string) => void;
  startEditing: (taskID: string) => void;
  editTask: (taskID: string) => void;
}

function TaskItem({
  taskData,
  editingIndex,
  removeTask,
  checkTaskBox,
  startEditing,
  editTask,
}: TaskItemProps) {
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
            onChange={() => checkTaskBox(taskData.id)}
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
              editingIndex === taskData.id
                ? editTask(editingIndex)
                : startEditing(taskData.id)
            }
          >
            {editingIndex === taskData.id ? 'Save' : 'Edit'}
            <span className="visually-hidden" />
          </button>
          <button
            onClick={() => removeTask(taskData.id)}
            type="button"
            className="btn btn__danger"
          >
            Delete <span className="visually-hidden" />
          </button>
        </div>
      </li>
    </ul>
  );
}
export default TaskItem;
