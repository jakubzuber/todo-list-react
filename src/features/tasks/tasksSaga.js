import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExapleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch(error) {
        yield call(alert, "coś poszło nie tak :(")
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks)
    yield call(saveTasksInLocalStorage, tasks)
};

export function* tasksSaga() {
    yield takeLatest(fetchExapleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);        
};