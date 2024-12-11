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

    default:
      return state;
  }
};

export default reducer;
