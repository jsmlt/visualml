// Standard imports
import { combineReducers } from 'redux';

// Local imports
import datapoints from './datapoints';
import controls from './controls';

const vmlApp = combineReducers({
  datapoints,
  controls,
});

export default vmlApp;
