import React, { useState, useContext, useEffect } from 'react';
import TodoContext from '../Store/TodoContext';

const TaskForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editingTask, setEditingTask] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription) {
      alert('Both task name and description are required!');
      return;
    }

    const task = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    if (editingTask) {
      dispatch({ type: 'UPDATE_TASK', payload: task });
    } else {
      dispatch({ type: 'ADD_TASK', payload: task });
    }

    setTaskName('');
    setTaskDescription('');
    setEditingTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task Description"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
