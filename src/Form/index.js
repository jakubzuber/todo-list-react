import { useState, useRef } from "react";
import { Main, Forms, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };
    const inputRef = useRef(null)

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
                Dodaj zadanie</Button>
        </Main>
    );
};

export default Form;