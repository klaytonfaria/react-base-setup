import {ACTIONS} from '../constants';

const locations = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.LOCATION_FIND:
      return {
        location: state
      };
    default:
      return {
        location: state
      };
  }
};

export default locations;
