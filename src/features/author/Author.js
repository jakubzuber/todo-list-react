import Header from "../../common/Header";
import Section from "../../common/Section";
import { Main } from "../../styled";


const Author = () => (
    <Main>
        <Header titleHeader="O autorze" />
        <Section title="Jakub Zuber"
            body={
                <> I am from Poland, living in small village near Bielsko-Biała city. I graduated
                    Economic University in Katowice with degree of engineer of Logistics in 2022. Now I am looking for a new job opportunities
                    as a Junior Forntend Developer.
                </>
            }
        />
    </Main>
);

export default Author;