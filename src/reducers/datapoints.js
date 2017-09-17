// Standard imports
import { combineReducers } from 'redux';

// Local imports
import datapoint from './datapoint';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATAPOINT':
      return {
        ...state,
        [action.id]: datapoint(state[action.id], action),
      };

    default:
      return state;
  }
};

const idsList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DATAPOINT':
      return [
        ...state,
        action.id,
      ];

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  idsList,
});
