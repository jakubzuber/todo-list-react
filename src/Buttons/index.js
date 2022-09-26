
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <span className="section__headerButtons">
            <button
                onClick={toggleHideDone}
                className={`section__headerHideButton`}>
                {hideDone ? "Pokaż " : "Ukryj "}
                ukończone
            </button>
            <button
                onClick={setAllDone}
                className={`section__headerDoneButton`}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>

        </span>
    )
);

export default Buttons;