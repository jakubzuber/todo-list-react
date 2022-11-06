import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../styled";
import { fetchExapleTasks } from "../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    const loadingTasks = () => {
        setLoading(true)

        setTimeout(() => {
            dispatch(fetchExapleTasks());
            setLoading(false)

        }, 2000)
    };

    return (
            <Button 
            onClick={() => loadingTasks()}
            disabled={loading}
            >
               {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>  
    )
}

export default ExampleTasksButton;  