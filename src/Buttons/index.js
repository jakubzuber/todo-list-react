import "./style.css"

const Buttons = ({ tasks, hideTasksDone }) => (
    tasks.length > 0 && (
        <span className="section__headerButtons">
            <button className={`section__headerHideButton ${tasks.content ? "taskList__task--hide" : ""}`}>{hideTasksDone ? "Pokaż" : "Ukryj"} ukończone</button>

            <button className={`section__headerDoneButton ${tasks.content ? "taskList__task--hide" : ""}`}
                disabled={tasks.every(({ done }) => done)}> Ukończ wszystkie</button>

        </span>
    )
);

export default Buttons;