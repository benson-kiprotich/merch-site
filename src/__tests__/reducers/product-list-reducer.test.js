import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {
  let action;
  const productData = {
    name: 'test product',
    quantity: 3,
    description: 'test description',
    id: 1,
  };

  const currentState = {
    1: {
      name: 'test product',
      quantity: 3,
      description: 'test description',
      id: 1,
    },
    2: {
      name: 'another product',
      quantity: 4,
      description: 'another description',
      id: 2,
    },
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new product data to mainProductList', () => {
    const { name, quantity, description, id } = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      quantity: quantity,
      description: description,
      id: id,
    };

    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        quantity: quantity,
        description: description,
        id: id,
      },
    });
  });

  test('should delete a product successfully', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1,
    };

    expect(productListReducer(currentState, action)).toEqual({
      2: {
        name: 'another product',
        quantity: 4,
        description: 'another description',
        id: 2,
      },
    });
  });

  test('should reduce product quantity by one', () => {
    action = {
      type: 'BUY_PRODUCT',
      id: 1,
    };

    expect(productListReducer(currentState, action)).toEqual({
      1: {
        name: 'test product',
        quantity: 2,
        description: 'test description',
        id: 1,
      },
      2: {
        name: 'another product',
        quantity: 4,
        description: 'another description',
        id: 2,
      },
    });
  });
});
