import "./style.css"

const Tasks = (props) => (
    <ul className="taskList">
        {props.tasks.map(task => (
            <li key={task.id} className={`taskList__task ${props.hideDone && task.done ? "taskList__task--hide" : ""}`}>
                <button className="list__buttonDone">{task.done ? "✔" : ""}</button>
                <span className={task.done ? "list_taskText--done" : ""}>{task.content}</span>
                <button className="list_buttonRemove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;