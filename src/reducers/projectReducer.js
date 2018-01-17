import { NEW_PROJECT, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT } from '../actions/projectActions';

const initialState = { projects: [] };

const projectReducer = (projects = initialState, action) => {
    switch (action.type) {
        case NEW_PROJECT:
            return projects.concat(action.payload);
        case GET_PROJECT:
            return action.payload;
        case GET_PROJECTS:
            return action.payload;
        case DELETE_PROJECT:
            return action.payload;
        default:
            return projects;
    }
};

export default projectReducer;