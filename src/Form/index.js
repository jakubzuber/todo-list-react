import { useState } from "react";
import "./style.css"
import { MainForm, FormButton, FormInput } from "./styled"

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };


    return (
        <MainForm onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                onChange={({target}) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus={true}
            />
            <FormButton>Dodaj zadanie</FormButton>
        </MainForm>
    );
};

export default Form;