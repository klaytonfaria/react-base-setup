import {ACTIONS} from '../constants';

const locations = (state) => {
  switch (state) {
    case 'open':
      return {type: ACTIONS.LOCATION_FIND};
    default:
      return {type: ACTIONS.LOCATION_FIND};
  }
};

export {locations as default};
