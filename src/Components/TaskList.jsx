import { useContext } from "react";
import TodoContext from "../Store/TodoContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const { state, dispatch } = useContext(TodoContext)
    return (
        <div>
            <ul>
                {state.tasks.map((task) => (
                    <TaskItem key={task.id} task={task} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    )
}
export default TaskList;