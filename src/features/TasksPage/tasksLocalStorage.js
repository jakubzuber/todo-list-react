const localStorageTasks = "tasks";

export const saveTasksInLocalStorage = tasks => 
    localStorage.setItem(localStorageTasks, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageTasks)) ||[];