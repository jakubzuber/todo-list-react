import Form from "../TasksPage/Form";
import Tasks from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../styled";
import Search from "../Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
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

export default TasksPage;