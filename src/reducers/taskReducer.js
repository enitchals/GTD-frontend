import { NEW_TASK, GET_TASK, GET_TASKS, DELETE_TASK } from '../actions/taskActions';

const initialState = { tasks: [] };

const taskReducer = (tasks, action) => {
    switch (action.type) {
        case NEW_TASK:
            tasks = tasks.concat(action.payload);
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