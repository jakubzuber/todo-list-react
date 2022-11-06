import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice"
import { Main, MainLayout } from "../styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, Number(id)))

  return (
    <Main>

      <Header titleHeader="Szczegóły zadania" />
      <MainLayout>
        <Section title={task ? task.content : "Nie znaleziono zadania 😫"}
          body={
            <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
          }
        />
      </MainLayout>
    </Main>
  );
}

export default TaskPage;