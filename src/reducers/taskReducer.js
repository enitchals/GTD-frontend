import { NEW_TASK, GET_TASK, GET_TASKS, DELETE_TASK } from '../actions/taskActions';

const initialState = { tasks: [] };

const taskReducer = (tasks = initialState, action) => {
    switch (action.type) {
        case NEW_TASK:
            console.log(action.payload);
            console.log(tasks.concat(action.payload));
            return tasks.concat(action.payload);
        case GET_TASK:
            return action.payload;
        case GET_TASKS:
            return action.payload;
        case DELETE_TASK:
            const index = tasks.findIndex((element) => {
                element._id = action.payload;
            });
            return tasks.splice(index, 1);
        default:
            return tasks;
    }
};

export default taskReducer;