import { NEW_EVENT, GET_EVENT, GET_EVENTS, DELETE_EVENT } from '../actions/eventActions';

const initialState = { events: [] };

const eventReducer = (events, action) => {
    switch (action.type) {
        case NEW_EVENT:
            return events.concat(action.payload);
        case GET_EVENT:
            return action.payload;
        case GET_EVENTS:
            return action.payload;
        case DELETE_EVENT:
            return action.payload;
        default:
            return events;
    }
};

export default eventReducer;