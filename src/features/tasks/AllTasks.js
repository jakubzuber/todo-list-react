import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Main } from "../../styled"
import { useState } from "react";
import { useTasks } from "../../useTasks"

function AllTasks() {

  const [
    tasks,
    addNewTask,
    setAllDone,
    removeTask,
    toggleTaskDone,
   ] = useTasks();

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  return (
    <Main>
      <Header titleHeader="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={
        <Form
          addNewTask={addNewTask} />} />
      <Section title="Lista zadań"
        headerButton={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Main>
  );
}

export default AllTasks;