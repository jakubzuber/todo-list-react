import { MainButtons, HideButton, DoneButton } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <MainButtons>
            <HideButton
                onClick={toggleHideDone}
                >
                {hideDone ? "Pokaż " : "Ukryj "}
                ukończone
            </HideButton>
            <DoneButton
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </DoneButton>
        </MainButtons>
    )
);

export default Buttons;