import { MainButtons, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <MainButtons>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                    >
                    {hideDone ? "Pokaż " : "Ukryj "}
                    ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </Button>
            </MainButtons>
        )
    );
}

export default Buttons;