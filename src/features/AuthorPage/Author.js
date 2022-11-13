import Header from "../../common/Header";
import Section from "../../common/Section";
import { Main, InputAndTasks } from "../TasksPage/styled";

const AuthorPage = () => (
    <Main>
        <Header titleHeader="O autorze" />
        <Section title="Jakub Zuber"
            body={
                <InputAndTasks>
                    <p>Cześć! Dzięki że zajrzałeś na moją stronę</p>
                </InputAndTasks>
            }
        />
    </Main>
);

export default AuthorPage;