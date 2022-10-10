import { MainButtons, Button } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <MainButtons>
            <Button
                onClick={toggleHideDone}
                >
                {hideDone ? "Pokaż " : "Ukryj "}
                ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </MainButtons>
    )
);

export default Buttons;