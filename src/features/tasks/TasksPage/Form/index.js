import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTasks } from "../../tasksSlice";
import { FormTable, Button } from "./styled";
import { Input } from "../../styled"

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const tasks = useSelector(selectTasks);
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
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
        }))

        setNewTaskContent("");
    };

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
            <FormTable onSubmit={onFormSubmit}>
                <Input
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
            </FormTable>
    );
};

export default Form;