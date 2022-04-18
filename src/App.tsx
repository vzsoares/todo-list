import React from 'react';
import './App.css';
import Title from './components/Title';
import TaskDashboard from './components/TaskDashboard';
import AddItemForm from './components/AddItemForm';
import { TodoContextProvider } from './TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className="todoapp stack-large">
        <Title />
        <AddItemForm />
        <TaskDashboard />
      </div>
    </TodoContextProvider>
  );
}

export default App;
