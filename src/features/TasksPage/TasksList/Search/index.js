import { useHistory, useLocation } from "react-router-dom";
import { Input, InputAndTasks } from "../../styled";
import { QueryParamName } from "../searchQueryParamName";
import { Form } from "./styled"


const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(QueryParamName);


    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search)

        if (target.value.trim() === "") {
            searchParams.delete(QueryParamName);
        } else {
            searchParams.set(QueryParamName, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <InputAndTasks>
            <Form>
                <Input
                    placeholder="Wpisz zadanie"
                    value={query || ""}
                    onChange={onInputChange}
                />
            </Form>
        </InputAndTasks>
    )
}

export default Search;