import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import { Task, ButtonDone, Button, TaskText } from "./styled"
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    
    
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <>
            {tasks.map(task => (
                <Task key={task.id}
                    hide={hideDone && task.done}>
                    <ButtonDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ButtonDone>
                    <TaskText done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </TaskText>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Task>
            ))}
        </>
    )
};

export default TaskList;