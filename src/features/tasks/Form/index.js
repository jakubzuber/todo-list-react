import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Main, Forms, Button } from "./styled";
import { addTask, selectTasks } from "../tasksSlice";


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const { tasks } = useSelector(selectTasks)
    const inputRef = useRef(null);
    
    const dispatch = useDispatch();
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return
        }
        dispatch(addTask({
            content: newTaskContent,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id + 1
        }))

        setNewTaskContent("");
    };
     

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <Main onSubmit={onFormSubmit}>
            <Forms
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus={true}
            />
            <Button
                onClick={focusInput}
            >
                Dodaj zadanie
            </Button>
        </Main>
    );
};

export default Form;