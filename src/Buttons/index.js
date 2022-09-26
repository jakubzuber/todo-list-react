
const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <span className="section__headerButtons">
            <button className={`section__headerHideButton`}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</button>

            <button className={`section__headerDoneButton`}
                disabled={tasks.every(({ done }) => done)}> Ukończ wszystkie</button>

        </span>
    )
);

export default Buttons;