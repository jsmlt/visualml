// Standard imports
import { combineReducers } from 'redux';

// Local imports
import interaction from './controls/interaction';
import svm from './controls/svm';

export default combineReducers({
  interaction,
  svm,
});
