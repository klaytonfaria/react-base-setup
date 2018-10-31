import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import routes from './routes';
// import './shared/resources/icons-font.json';
import './shared/styles/base';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
