import Form from "../TasksList/Form";
import Tasks from "../TasksList/TaskList";
import Buttons from "../TasksList/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../styled";
import Search from "../TasksList/Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksList() {
  return (
    <Main>
      <Header titleHeader="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form />}
        headerButton={<ExampleTasksButton />}
      />
      <Section title="Wyszukiwarka"
        body={<Search />}
      />
      <Section title="Lista zadań"
        headerButton={<Buttons />}
        body={<Tasks />}
      />
    </Main>
  );
}

export default TasksList;