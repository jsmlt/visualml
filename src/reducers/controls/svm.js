export default (state = {
  kernel: 'linear',
  C: 0,
  gamma: 1.0,
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

    default:
      return state;
  }
};
