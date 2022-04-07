import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import ITask from './components/Types/ITask';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isEditing, setIsEditing] = useState<string>('');

  function addTask() {
    const newTask = {
      task: userInput,
      completed: false,
      id: String(new Date().valueOf()),
    };
    setTaskList([...taskList, newTask]);
  }

  function removeTask(taskID: string) {
    setTaskList([...taskList].filter((task) => task.id !== taskID));
  }

  function startEditing(taskID: string) {
    setUserInput([...taskList].find((task) => task.id === taskID)?.task ?? '');
    setIsEditing(taskID);
  }

  function editTask(input: string, taskID: string) {
    setTaskList(
      [...taskList].map((task) => {
        const taskReturn = task;
        if (taskReturn.id === taskID) {
          taskReturn.task = input;
        }
        return taskReturn;
      }),
    );
    setIsEditing('');
    setUserInput('');
  }

  function checkTaskBox(taskID: string) {
    setTaskList(
      [...taskList].map((task) => {
        const taskReturn = task;
        if (taskReturn.id === taskID) {
          taskReturn.completed = !taskReturn.completed;
        }
        return taskReturn;
      }),
    );
  }

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        userInput={userInput}
        isEditing={isEditing}
        setUserInput={setUserInput}
        addTask={() => addTask()}
        editTask={(input: string, taskID: string) => editTask(input, taskID)}
      />
      <TaskDashboard
        userInput={userInput}
        isEditing={isEditing}
        taskList={taskList}
        checkTaskBox={(taskID: string) => checkTaskBox(taskID)}
        removeTask={(taskID: string) => removeTask(taskID)}
        editTask={(input: string, taskID: string) => editTask(input, taskID)}
        startEditing={(taskID: string) => startEditing(taskID)}
      />
    </div>
  );
}

export default App;
