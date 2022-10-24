import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../../../styled";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice"

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, Number(id)))

  return (
    <Main>
      <Header titleHeader="Szczegóły zadania" />
      <Section title={task ? task.content : "Nie znaleziono zadania 😫"}
        body={
          <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
        }
      />
    </Main>
  );
}

export default TaskPage;