const reducer = (state = {}, action) => {
  const { name, quantity, description, id } = action;
  switch (action.type) {
    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          quantity: quantity,
          description: description,
          id: id,
        },
      });
    case 'DELETE_PRODUCT':
      let newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;
  }
};

export default reducer;
