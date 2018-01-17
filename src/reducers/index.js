import { combineReducers } from 'redux';
import eventReducer from './eventReducer.js';
import noteReducer from './noteReducer.js';
import taskReducer from './taskReducer.js';
import projectReducer from './projectReducer.js';

const rootReducer = combineReducers({
    events: eventReducer,
    notes: noteReducer,
    tasks: taskReducer,
    projects: projectReducer
});

export default rootReducer;