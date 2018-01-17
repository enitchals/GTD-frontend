import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route } from 'react-router-dom';
import { App, Home, ProjectDetail } from './components';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const configureStore = applyMiddleware(ReduxPromise)(createStore);

const initStore={ userID: '5a5fcbe77aea3626c8b66169', tasks: [], notes: [], events: [], projects: [] }

const store = configureStore(rootReducer, initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
    <div>
        <Route path exact="/" component={App} />
    </div>
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
