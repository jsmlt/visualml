export default (state = {
  numNeighbours: 3,
}, action) => {
  switch (action.type) {
    case 'UPDATE_KNN_NUM_NEIGHBOURS':
      return {
        ...state,
        numNeighbours: action.numNeighbours,
      };

    default:
      return state;
  }
};
