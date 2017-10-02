export default (state = {
  kernel: 'linear',
  C: 0,
  sigmaSquared: 0,
  degree: 2,
  gamma: 1,
  coef0: 1,
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

    case 'UPDATE_SVM_DEGREE':
      return {
        ...state,
        degree: action.degree,
      };

    case 'UPDATE_SVM_GAMMA':
      return {
        ...state,
        gamma: action.gamma,
      };

    case 'UPDATE_SVM_COEF0':
      return {
        ...state,
        coef0: action.coef0,
      };

    default:
      return state;
  }
};
