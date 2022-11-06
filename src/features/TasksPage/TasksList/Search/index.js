import { useHistory, useLocation } from "react-router-dom";
import { Input, MainLayout } from "../../styled";
import { Form } from "./styled"
import lookFor from "./searchQueryParamName";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(lookFor);


    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search)

        if (target.value.trim() === "") {
            searchParams.delete(lookFor);
        } else {
            searchParams.set(lookFor, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <MainLayout>
            <Form>
                <Input
                    placeholder="Wpisz zadanie"
                    value={query || ""}
                    onChange={onInputChange}
                />
            </Form>
        </MainLayout>
    )
}

export default Search;