import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Main, Forms, Button } from "./styled";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
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
            id: nanoid(),
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