import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { ITaskItem, FilterKind } from './types';

interface TaskDashboardProps {
  taskList: ITaskItem[];
  editingIndex: string;
  removeTask: (taskID: string) => void;
  checkTaskBox: (taskID: string) => void;
  startEditing: (taskID: string) => void;
  editTask: (taskID: string) => void;
}

export default function TaskDashboard({
  taskList,
  editingIndex,
  removeTask,
  checkTaskBox,
  startEditing,
  editTask,
}: TaskDashboardProps) {
  const [filter, setFilter] = useState<FilterKind>('All');
  const [displayedTasks, setDisplayedTasks] = useState<ITaskItem[]>(taskList);

  function filterDisplayedTasks() {
    if (filter === 'All') {
      setDisplayedTasks(taskList);
    }
    if (filter === 'Active') {
      setDisplayedTasks(taskList.filter((task) => !task.completed));
    }
    if (filter === 'Complete') {
      setDisplayedTasks(taskList.filter((task) => task.completed));
    }
  }

  useEffect(() => {
    filterDisplayedTasks();
  }, [filter, taskList]);
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button
          onClick={() => setFilter('All')}
          type="button"
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          onClick={() => setFilter('Active')}
          type="button"
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          onClick={() => setFilter('Complete')}
          type="button"
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">Complete</button>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">Tasks remaining</h2>
      {displayedTasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            editingIndex={editingIndex}
            taskData={task}
            checkTaskBox={(taskID: string) => checkTaskBox(taskID)}
            removeTask={(taskID: string) => removeTask(taskID)}
            startEditing={(taskID: string) => startEditing(taskID)}
            editTask={(taskID: string) => editTask(taskID)}
          />
        );
      })}
    </>
  );
}
