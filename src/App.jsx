

import React, { useReducer, useEffect } from 'react';
import  TodoReducer  from './Store/TodoReducer';
import TodoContext from './Store/TodoContext';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

const App = () => {
  const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">To-Do List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  </TodoContext.Provider>  
  );
};

export default App;

