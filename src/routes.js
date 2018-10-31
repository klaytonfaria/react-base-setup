import React from 'react';
import {Switch, Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Home from './pages/home';

const history = createHistory();

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={Home}/>
      <Route render={() => (
        <div>opsss</div>
      )} />
    </Switch>
  </ConnectedRouter>
);

export default routes;