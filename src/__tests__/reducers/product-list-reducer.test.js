import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {
  let action;
  const productData = {
    name: 'test product',
    quantity: 3,
    description: 'test description',
    id: 1,
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
});
