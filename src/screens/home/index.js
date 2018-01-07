import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Home extends Component {
  static displayName = 'Home';

  // static propTypes = {};

  constructor(props, context) {
    super(props, context);
  }


  render() {
    const { relay, viewer } = this.props;
    return (
      <div>
      opa
      </div>
    );
  }
}


export default Home;