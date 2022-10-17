import { useSelector, useDispatch } from "react-redux";
import { MainButtons, Button } from "./styled"
import { selectHideDone, selectisEveryTaskDone, selectAreTaskListEmpty, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectisEveryTaskDone);
    const areTaskListEmpty = useSelector(selectAreTaskListEmpty);
    const dispatch = useDispatch();
    return (
        !areTaskListEmpty > 0 && (
            <MainButtons>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                    >
                    {hideDone ? "Pokaż " : "Ukryj "}
                    ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}>
                    Ukończ wszystkie
                </Button>
            </MainButtons>
        )
    );
}

export default Buttons;