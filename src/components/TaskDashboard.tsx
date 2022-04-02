import React from 'react';
import Task from './Task';

type TaskListItem = {
  task: string;
  completed: boolean;
  id: string;
};
interface TaskListItemMap {
  [value: string | number]: TaskListItem;
}
interface TaskDashboardProps {
  taskList: TaskListItemMap;
}

function TaskDashboard({ taskList }: TaskDashboardProps) {
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">Complete</button>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">Tasks remaining</h2>
      {Object.keys(taskList).map((element) => {
        return <Task id={element} taskList={taskList} />;
      })}
    </>
  );
}
export default TaskDashboard;
