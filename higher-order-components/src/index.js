import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/higher-order/require_auth'; // our custom HOC function
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Provider is a Higher Order Component - adds additional functionality/data to our normal components
// Has direct access to the Redux store.
// Watches the Redux state (store) for changes and updates
// any connected child component with new state
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* pass our standard Resources component into our HOC function */}
        <Route path="resources" component={requireAuth(Resources)}></Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
