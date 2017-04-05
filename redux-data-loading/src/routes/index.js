import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from '../components/app';
import Photos from '../components/photos';
import store from '../store';

import { onPhotosEnter } from './route_callbacks';

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        {/* use onEnter provided by react router with a custom callback function to fetch data */}
        {/* called when a route is about to be entered */}
        <Route path="photos" component={Photos} onEnter={onPhotosEnter} />
        
      </Route>
    </Router>
  </Provider>
);
