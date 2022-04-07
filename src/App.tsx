import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import ITask from './components/Types/ITask';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  function addTask(taskContent: string) {
    const newTask = {
      task: taskContent,
      completed: false,
      id: String(new Date().valueOf()),
    };
    setTaskList([...taskList, newTask]);
  }

  function removeTask(taskID: string) {
    setTaskList([...taskList].filter((task) => task.id !== taskID));
  }

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm addTask={(taskContent: string) => addTask(taskContent)} />
      <TaskDashboard
        taskList={taskList}
        removeTask={(taskID: string) => removeTask(taskID)}
      />
    </div>
  );
}

export default App;
