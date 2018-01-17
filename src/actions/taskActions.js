import axios from 'axios';
export const NEW_TASK = 'NEW_TASK';
export const GET_TASK = 'GET_TASK';
export const GET_TASKS = 'GET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';

export const newTask = (task) => {
    const promise = axios.post('http://localhost:9001/task', task);
    return {
        type: NEW_TASK,
        payload: promise
    };
};

export const getTask = (taskID) => {
    const promise = axios.get(`http://localhost:9001/task/${taskID}`);
    return {
        type: GET_TASK,
        payload: promise
    };
};

export const getTasks = (userID) => {
    const promise = axios.get(`http://localhost:9001/tasks/${userID}`);
    return {
        type: GET_TASKS,
        payload: promise
    }
}

export const deleteTask = (taskID) => {
    const promise = axios.delete(`http://localhost:9001/task/${taskID}`)
    return {
        type: DELETE_TASK,
        payload: promise
    };
};