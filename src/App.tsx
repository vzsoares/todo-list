import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { ITaskItem } from './components/types';

function App() {
  const [taskList, setTaskList] = useState<ITaskItem[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<string>('');

  function addTask() {
    const newTask = {
      task: userInput,
      completed: false,
      id: String(new Date().valueOf()),
    };
    setTaskList([...taskList, newTask]);
    setUserInput('');
  }

  function removeTask(taskID: string) {
    setTaskList(taskList.filter((task) => task.id !== taskID));
  }

  function startEditing(taskID: string) {
    setUserInput(taskList.find((task) => task.id === taskID)?.task ?? '');
    setEditingIndex(taskID);
  }

  function editTask(taskID: string) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskID) {
          return { ...task, task: userInput };
        }
        return task;
      }),
    );
    setEditingIndex('');
    setUserInput('');
  }

  function checkTaskBox(taskID: string) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskID) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  }

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        userInput={userInput}
        editingIndex={editingIndex}
        setUserInput={setUserInput}
        addTask={() => addTask()}
        editTask={(taskID: string) => editTask(taskID)}
      />
      <TaskDashboard
        editingIndex={editingIndex}
        taskList={taskList}
        checkTaskBox={(taskID: string) => checkTaskBox(taskID)}
        removeTask={(taskID: string) => removeTask(taskID)}
        editTask={(taskID: string) => editTask(taskID)}
        startEditing={(taskID: string) => startEditing(taskID)}
      />
    </div>
  );
}

export default App;
