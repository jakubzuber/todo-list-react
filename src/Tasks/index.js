
import { List, Task, ButtonDone, ButtonRemove, TaskText } from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Task key={task.id}
                hide={hideDone && task.done}>
                <ButtonDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </ButtonDone>
                <TaskText done={task.done}>{task.content}</TaskText>
                <ButtonRemove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </ButtonRemove>
            </Task>
        ))}
    </List>
);

export default Tasks;