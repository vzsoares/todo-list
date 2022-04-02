import React from 'react';
import Task from './Task';
import { TaskListMap } from './AddItemForm';

interface TaskDashboardProps {
  taskList: TaskListMap[];
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
      {taskList.map((element) => {
        return <Task taskData={element} />;
      })}
    </>
  );
}
export default TaskDashboard;
