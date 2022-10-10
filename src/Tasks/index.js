
import { List, Task, ButtonDone, Button, TaskText } from "./styled"

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
                <Button
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Task>
        ))}
    </List>
);

export default Tasks;