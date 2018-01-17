import axios from 'axios';
export const NEW_NOTE = 'NEW_NOTE';
export const GET_NOTE = 'GET_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';

export const newNote = (note) => {
    const promise = axios.post('http://localhost:9001/note', note);
    return {
        type: NEW_NOTE,
        payload: promise
    };
};

export const getNote = (noteID) => {
    const promise = axios.get(`http://localhost:9001/note/${noteID}`);
    return {
        type: GET_NOTE,
        payload: promise
    };
};

export const getNotes = (userID) => {
    const promise = axios.get(`http://localhost:9001/notes/${userID}`);
    return {
        type: GET_NOTES,
        payload: promise
    }
}

export const deleteNote = (noteID) => {
    const promise = axios.delete(`http://localhost:9001/note/${noteID}`)
    return {
        type: DELETE_NOTE,
        payload: promise
    };
};