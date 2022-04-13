import React from 'react';
import './App.css';
import Title from './components/Title';
import TaskDashboard from './components/TaskDashboard';
import AddItemForm from './components/AddItemForm';
import { AppContextProvider } from './AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="todoapp stack-large">
        <Title />
        <AddItemForm />
        <TaskDashboard />
      </div>
    </AppContextProvider>
  );
}

export default App;
