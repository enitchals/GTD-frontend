import { NEW_NOTE, GET_NOTE, GET_NOTES, DELETE_NOTE } from '../actions/noteActions';

const initialState = { notes: [] };

const noteReducer = (notes = initialState, action) => {
    switch (action.type) {
        case NEW_NOTE:
            return notes.concat(action.payload);
        case GET_NOTE:
            return action.payload;
        case GET_NOTES:
            return action.payload;
        case DELETE_NOTE:
            return action.payload;
        default:
            return notes;
    }
};

export default noteReducer;