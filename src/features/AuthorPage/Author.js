import Header from "../../common/Header";
import Section from "../../common/Section";
import { Main, InputAndTasks } from "../TasksPage/styled";

const AuthorPage = () => (
    <Main>
        <Header titleHeader="O autorze" />
        <Section title="Cześć! Dzięki że zajrzałeś na moją stronę"
            body={
                <InputAndTasks>
                    <p>
                        Nazwywam się Kuba i mam 24 lata. Z wykształcenia logistyk i pracuje w zadwodzie od prawie 3 lat.
                        Poza moimi standardowymi obowiązkami zamuje się równięż testowaniem nowych rozwiązań w systemie transportowym,
                        tworzeniem raportów oraz wdrażaniem procedur i funkcji składowanych w bazie za pomoca T-SQL.
                        Hobbistycznie interesuje się jazdą na rolkach i łyżwach, filmami, kawą oraz nowinkami technologicznymi.
                        Strona na która wszedłeś jest efektem kursu YouCode do którego przystąpiłem kilka miesięcy temu.
                    </p>
                </InputAndTasks>
            }
        />
    </Main>
);

export default AuthorPage;