import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { name, quantity, description, id } = action;
  switch (action.type) {
    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          quantity: quantity,
          description: description,
          id: id,
        },
      });

    case c.BUY_PRODUCT:
      const buyProduct = { ...state[id] };
      buyProduct.quantity -= 1;
      return Object.assign({}, state, {
        [id]: buyProduct,
      });

    case c.RESTOCK_PRODUCT:
      const restockProduct = { ...state[id] };
      restockProduct.quantity = Number(restockProduct.quantity) + 10;
      return Object.assign({}, state, {
        [id]: restockProduct,
      });

    case c.DELETE_PRODUCT:
      let newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;
  }
};

export default reducer;
