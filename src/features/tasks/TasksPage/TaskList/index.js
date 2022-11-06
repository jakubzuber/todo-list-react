import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { Task, ButtonDone, Button, TaskText, TaskLink } from "./styled"
import { MainLayout } from "../../styled";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));

    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <MainLayout>
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
                            <TaskLink to={`/zadania/${task.id}`}>{task.content}</TaskLink>
                        </TaskText>
                        <Button
                            onClick={() => dispatch(removeTask(task.id))}
                        >
                            🗑
                        </Button>
                    </Task>
                ))}
            </>
        </MainLayout>
    )
};

export default TaskList;