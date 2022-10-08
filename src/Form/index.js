import { useState, useRef } from "react";
import { MainForm, FormButton, FormInput } from "./styled"

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
        <MainForm onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus={true}  
            />
            <FormButton
            onClick={focusInput}
            >
                Dodaj zadanie</FormButton>
        </MainForm>
    );
};

export default Form;