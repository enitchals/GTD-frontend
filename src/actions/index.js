import noteReducer from './noteReducer.js';
import taskReducer from './taskReducer.js';
import eventReducer from './eventReducer.js';
import projectReducer from './projectReducer.js';

const rootReducer = combineReducers({
    notes: noteReducer,
    tasks: taskReducer,
    events: eventReducer,
    projects: projectReducer
})

export default rootReducer;