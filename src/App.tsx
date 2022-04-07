import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import ITask from './components/Types/ITask';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  function addNewTask(taskContent: string) {
    const newTask = {
      task: taskContent,
      completed: false,
      id: String(new Date().valueOf()),
    };
    setTaskList([...taskList, newTask]);
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
