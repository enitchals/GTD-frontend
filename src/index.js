import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route } from 'react-router-dom';
import { SignIn, App, Home, ProjectDetail } from './components';
import { createStore, applyMiddleware } from 'redux';
//import rootReducer from './reducers';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const configureStore = applyMiddleware(ReduxPromise)(createStore);

const initStore = { userID: '', tasks: [], notes: [], events: [], projects: [] }


const reducer = (state = initStore, action) => {
    switch (action.type) {
        case 'LOGIN':
            state.userID = action.payload.userID;
            state.tasks = action.payload.tasks;
            state.notes = action.payload.notes;
            state.events = action.payload.events;
            state.projects = action.payload.projects;
            break;
        case 'OTHER_CASE':
            break;
    }
    return state;
};

const store = configureStore(reducer, initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
    console.log("store updated", store.getState());
})

ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
    <div>
        <Route path exact="/" component={SignIn} />
        <Route path exact = "/Home" component={Home}/>
        <Route path="/project/:projectID" component={ProjectDetail}/>
    </div>
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
