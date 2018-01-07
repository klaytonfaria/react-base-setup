import React from 'react';
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Home from './screens/home';

const history = createHistory();

const routes = (
  <ConnectedRouter history={history}>
    <Route path="/" component={Home}/>
  </ConnectedRouter>
);

export default routes;
