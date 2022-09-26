import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li key={task.id} className={`taskList__task ${hideDone && task.done ? "taskList__task--hide" : ""}`}>
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="list__buttonDone"
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "list_taskText--done" : ""}>{task.content}</span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list_buttonRemove"
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;