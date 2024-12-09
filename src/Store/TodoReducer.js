const TodoReducer = (state, action) => {

    if (action.type === 'ADD_TASK') {
        return {
            ...state,
            tasks: [...state.tasks, action.payload],
        };
    }

    else if (action.type === 'UPDATE_TASK') {
        return {
            ...state,
            tasks: state.tasks.map((task) =>
                task.id === action.payload.id ? action.payload : task
            ),
        };
    }

    else if (action.type === 'DELETE_TASK') {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
    }

    else if (action.type === 'TOGGLE_COMPLETION') {
        return {
            ...state,
            tasks: state.tasks.map((task) =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            ),
        };
    }

    else {
        return state;
    }


};
export default TodoReducer;