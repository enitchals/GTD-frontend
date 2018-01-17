import axios from 'axios';
export const NEW_EVENT = 'NEW_EVENT';
export const GET_EVENT = 'GET_EVENT';
export const GET_EVENTS = 'GET_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';

export const newEvent = (event) => {
    const promise = axios.post('http://localhost:9001/event', event);
    return {
        type: NEW_EVENT,
        payload: promise
    };
};

export const getEvent = (eventID) => {
    const promise = axios.get(`http://localhost:9001/event/${eventID}`);
    return {
        type: GET_EVENT,
        payload: promise
    };
};

export const getEvents = (userID) => {
    const promise = axios.get(`http://localhost:9001/events/${userID}`);
    return {
        type: GET_EVENTS,
        payload: promise
    }
}

export const deleteEvent = (eventID) => {
    const promise = axios.delete(`http://localhost:9001/event/${eventID}`)
    return {
        type: DELETE_EVENT,
        payload: promise
    };
};