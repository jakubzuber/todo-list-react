import Header from "../../common/Header";
import Section from "../../common/Section";
import { Main, MainLayout } from "../TasksPage/styled";

const AuthorPage = () => (
    <Main>
        <Header titleHeader="O autorze" />
        <Section title="Jakub Zuber"
            body={
                <MainLayout>
                    <p>Cześć! Dzięki że zajrzałeś na moją stronę</p>
                </MainLayout>
            }
        />
    </Main>
);

export default AuthorPage;