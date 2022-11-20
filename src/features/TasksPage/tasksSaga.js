import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExapleTasks, selectTasks, setTasks, fetchExampleTasksError } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1500)
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch(error) {
        yield put(fetchExampleTasksError)
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