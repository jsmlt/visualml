export default (state = {
  kernel: 'linear'
}, action) => {
  switch (action.type) {
    case 'UPDATE_SVM_KERNEL':
      return {
        ...state,
        kernel: action.kernel,
      };

    default:
      return state;
  }
};
