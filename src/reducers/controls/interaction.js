export default (state = {
  classIndex: '0',
  autorunEnabled: true,
  runStatus: 0,
  classifier: 'SVM',
}, action) => {
  switch (action.type) {
    case 'UPDATE_CLASSIFIER':
      return {
        ...state,
        classifier: action.classifier,
      };

    case 'UPDATE_ADD_DATAPOINT_CLASSINDEX':
      return {
        ...state,
        classIndex: action.classIndex,
      };

    case 'UPDATE_AUTORUN_ENABLED':
      return {
        ...state,
        autorunEnabled: action.enabled,
      };

    case 'UPDATE_RUNSTATUS':
      return {
        ...state,
        runStatus: action.status,
      };

    default:
      return state;
  }
};
