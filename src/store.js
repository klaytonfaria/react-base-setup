import {createStore, applyMiddleware, combineReducers} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import * as reducers from './reducers';
import {createLogger} from 'redux-logger';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(historyMiddleware, loggerMiddleware)
);

export default store;
