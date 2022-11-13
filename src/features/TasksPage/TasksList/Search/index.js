import { QueryParamName, useQueryParameter, useReplaceQueryParameter } from "../searchQueryParamName";
import { Input, InputAndTasks } from "../../styled";
import { Form } from "./styled"

const Search = () => {
    const query = useQueryParameter(QueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: QueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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