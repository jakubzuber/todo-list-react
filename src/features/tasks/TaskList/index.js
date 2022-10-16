
import { List, Task, ButtonDone, Button, TaskText } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
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
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </Button>
                </Task>
            ))}
        </List>
    )
};

export default TaskList;