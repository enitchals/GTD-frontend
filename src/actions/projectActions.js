import axios from 'axios';
export const NEW_PROJECT = 'NEW_PROJECT';
export const GET_PROJECT = 'GET_PROJECT';
export const GET_PROJECTS = 'GET_PROJECTS';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export const newProject = (project) => {
    const promise = axios.post('http://localhost:9001/project', project);
    return {
        type: NEW_PROJECT,
        payload: promise
    };
};

export const getProject = (projectID) => {
    const promise = axios.get(`http://localhost:9001/project/${projectID}`);
    return {
        type: GET_PROJECT,
        payload: promise
    };
};

export const getProjects = (userID) => {
    const promise = axios.get(`http://localhost:9001/projects/${userID}`);
    return {
        type: GET_PROJECTS,
        payload: promise
    }
}

export const deleteProject = (projectID) => {
    const promise = axios.delete(`http://localhost:9001/project/${projectID}`)
    return {
        type: DELETE_PROJECT,
        payload: promise
    };
};