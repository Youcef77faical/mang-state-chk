import React from 'react';

const TaskItem = ({ task, dispatch }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch({ type: 'DELETE_TASK', payload: task.id });
    }
  };

  const handleToggleCompletion = () => {
    dispatch({ type: 'TOGGLE_COMPLETION', payload: task.id });
  };

  const handleEdit = () => {
    dispatch({ type: 'SET_EDITING_TASK', payload: task });
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-sm mb-4">
      <div>
        <h3 className="text-xl font-semibold">{task.name}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={handleToggleCompletion}
          className={`px-4 py-2 rounded-md text-white ${task.completed ? 'bg-yellow-500' : 'bg-green-500'} hover:${task.completed ? 'bg-yellow-400' : 'bg-green-400'}`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>

        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
