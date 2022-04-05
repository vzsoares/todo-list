import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import { AddItemForm, TaskType } from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([
    { task: 'Model Task Example', completed: false, id: '123456' },
  ]);
  function addNewTask(taskContent: string) {
    const myNewTask = {
      task: taskContent,
      completed: false,
      id: String(new Date().valueOf()),
    };
    setTaskList([...taskList, myNewTask]);
  }
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        addNewTask={(taskContent: string) => addNewTask(taskContent)}
      />
      <TaskDashboard taskList={taskList} />
    </div>
  );
}

export default App;
