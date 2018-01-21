import axios from 'axios';
export const NEW_NOTE = 'NEW_NOTE';
export const GET_NOTE = 'GET_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';

export const newNote = (note) => {
    const promise = axios.post('https://fast-coast-18830.herokuapp.com/note', note);
    return {
        type: NEW_NOTE,
        payload: promise
    };
};

export const getNote = (noteID) => {
    const promise = axios.get(`https://fast-coast-18830.herokuapp.com/note/${noteID}`);
    return {
        type: GET_NOTE,
        payload: promise
    };
};

export const getNotes = (userID) => {
    const promise = axios.get(`https://fast-coast-18830.herokuapp.com/notes/${userID}`);
    return {
        type: GET_NOTES,
        payload: promise
    }
}

export const deleteNote = (noteID) => {
    const promise = axios.delete(`https://fast-coast-18830.herokuapp.com/note/${noteID}`)
    return {
        type: DELETE_NOTE,
        payload: promise
    };
};