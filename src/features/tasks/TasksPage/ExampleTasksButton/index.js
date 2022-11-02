import { useDispatch } from "react-redux";
import { Button } from "../../styled";
import { fetchExapleTasks } from "../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    return (
            <Button onClick={() => dispatch(fetchExapleTasks())}>
                Pobierz przykładowe zadania
            </Button>  
    )
}

export default ExampleTasksButton;  