import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export class Home extends Component {
  static displayName = 'Home';

  // static propTypes = {};

  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <div>
        <NavLink exact to="/home">
          Profile
        </NavLink>
        <NavLink exact to="/none">
          None
        </NavLink>
      </div>
    );
  }
}


export default Home;