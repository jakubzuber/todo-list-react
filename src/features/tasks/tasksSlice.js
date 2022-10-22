import { createSlice } from "@reduxjs/toolkit"
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({tasks}, {payload: taskId}) => {
            const index = tasks.findIndex (({ id }) => id === taskId)
            tasks[index].done = !tasks[index].done
        },
        removeTask: ({tasks}, {payload: taskId}) => {
            const index = tasks.findIndex(({ id }) => id === taskId)
            tasks.splice(index, 1)
        },
        setAllDone: ({tasks}) => {
            for (const task of tasks)
                {task.done = true}
        },
        fetchExapleTasks: () => {},
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },
});

const selectTasksState = state => state.tasks;

export const { 
    addTask, 
    toggleHideDone, 
    toggleTaskDone, 
    removeTask, 
    setAllDone,
    fetchExapleTasks,
    setTasks,
} = tasksSlice.actions;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectisEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTaskListEmpty = state => selectTasks(state).length === 0;
export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);
export default tasksSlice.reducer;