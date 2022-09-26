import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li key={task.id} className={`taskList__task ${hideDone && task.done ? "taskList__task--hide" : ""}`}>
                <button className="list__buttonDone">{task.done ? "✔" : ""}</button>
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