export default (state = {
  kernel: 'linear',
  C: 0,
  sigmaSquared: 0,
}, action) => {
  switch (action.type) {
    case 'UPDATE_SVM_KERNEL':
      return {
        ...state,
        kernel: action.kernel,
      };

    case 'UPDATE_SVM_C':
      return {
        ...state,
        C: action.C,
      };

    case 'UPDATE_SVM_SIGMA_SQUARED':
      return {
        ...state,
        sigmaSquared: action.sigmaSquared,
      };

    default:
      return state;
  }
};
