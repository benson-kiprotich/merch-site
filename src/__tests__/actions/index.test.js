import * as actions from './../../actions';

describe('Merch Site actions', () => {
  it('deleteProduct should create DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: 'DELETE_PRODUCT',
      id: 1,
    });
  });

  it('addProduct should create ADD_PRODUCT action', () => {
    expect(
      actions.addProduct({
        name: 'test product',
        quantity: 3,
        description: 'test description',
        id: 1,
      })
    ).toEqual({
      type: 'ADD_PRODUCT',
      name: 'test product',
      quantity: 3,
      description: 'test description',
      id: 1,
    });
  });
});
