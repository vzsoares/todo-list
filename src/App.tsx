import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import { AddItemForm, TaskListMap } from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [taskList, setTaskList] = useState<TaskListMap[]>([
    { task: 'Model Task Example', completed: false, id: '123456' },
  ]);
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        userInput={userInput}
        setUserInput={setUserInput}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskDashboard taskList={taskList} />
    </div>
  );
}

export default App;
