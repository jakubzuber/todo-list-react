import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { Task, ButtonDone, Button, TaskText, TaskLink, SiteLimit } from "./styled"
import { InputAndTasks } from "../../styled";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import { QueryParamName } from "../searchQueryParamName";


const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(QueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <InputAndTasks>
            <SiteLimit>
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
            </SiteLimit>
        </InputAndTasks>
    )
};

export default TaskList;