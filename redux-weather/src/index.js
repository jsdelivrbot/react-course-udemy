import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // redux promise middleware library

import App from './components/app';
import reducers from './reducers';

// intercept actions before they hit reducers
// ReduxPromise will stop an action if it's a promise
// and dispatch the same action with the revoled/rejected promise as payload.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
