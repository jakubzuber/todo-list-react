import { useSelector, useDispatch } from "react-redux";
import { List, Task, ButtonDone, Button, TaskText } from "./styled"
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Task key={task.id}
                    hide={hideDone && task.done}>
                    <ButtonDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ButtonDone>
                    <TaskText done={task.done}>{task.content}</TaskText>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Task>
            ))}
        </List>
    )
};

export default TaskList;