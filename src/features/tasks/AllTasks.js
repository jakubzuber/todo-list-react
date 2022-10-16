import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Main } from "../../styled"

function AllTasks() {

  return (
    <Main>
      <Header titleHeader="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section title="Lista zadań"
        headerButton={<Buttons />}
        body={<Tasks />}
      />
    </Main>
  );
}

export default AllTasks;