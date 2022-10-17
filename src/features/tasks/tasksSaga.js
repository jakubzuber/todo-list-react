import { takeLatest, call, put } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExapleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch(error) {
        yield call(alert, "coś poszło nie tak :(")
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExapleTasks.type, fetchExampleTasksHandler);        
};