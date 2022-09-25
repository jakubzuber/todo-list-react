import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
  { id: 1, content: "przejść na react'a", done: true },
  { id: 2, content: "zrobić placki", done: false },
];
const hideTasksDone = false;

function App() {
  return (
    <Main>
      <Header titleHeader="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań"
        headerButton={<Buttons tasks={tasks} hideTasksDone={hideTasksDone} />}
        body={<Tasks tasks={tasks} hideTasksDone={hideTasksDone} />}
      />
    </Main>
  );
}

export default App;