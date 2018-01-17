import { NEW_TASK, GET_TASK, GET_TASKS, DELETE_TASK } from '../actions/taskActions';

const initialState = { tasks: [] };

const taskReducer = (tasks = initialState, action) => {
    switch (action.type) {
        case NEW_TASK:
            return tasks.concat(action.payload);
        case GET_TASK:
            return action.payload;
        case GET_TASKS:
            return action.payload;
        case DELETE_TASK:
            return action.payload;
        default:
            return tasks;
    }
};

export default taskReducer;