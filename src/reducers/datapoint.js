export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DATAPOINT':
      return {
        id: action.id,
        x: action.x,
        y: action.y,
      };

    default:
      return state;
  }
};
