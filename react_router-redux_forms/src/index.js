import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// routing necessities
// Router - decides which react components need to render when the url changes
// browserHistory - tells Router to interpret changes on everything after the protocol (.com/posts)
// hashHistory - interpret url changes on everything after the hash (.com/#/posts)
// memoryHistory
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes'; // import route mappings file

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render Router component with history and routes configurations
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
