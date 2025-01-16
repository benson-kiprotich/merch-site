import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Merch Site actions', () => {
  it('deleteProduct should create DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: c.DELETE_PRODUCT,
      id: 1,
    });
  });

  it('buyProduct should create BUY_PRODUCT action', () => {
    expect(actions.buyProduct(1)).toEqual({
      type: c.BUY_PRODUCT,
      id: 1,
    });
  });

  it('restockProduct should create RESTOCK_PRODUCT action', () => {
    expect(actions.restockProduct(1)).toEqual({
      type: c.RESTOCK_PRODUCT,
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
      type: c.ADD_PRODUCT,
      name: 'test product',
      quantity: 3,
      description: 'test description',
      id: 1,
    });
  });
});
