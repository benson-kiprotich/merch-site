export const deleteProduct = (id) => ({
  type: 'DELETE_PRODUCT',
  id,
});

export const buyProduct = (id) => ({
  type: 'BUY_PRODUCT',
  id,
});

export const restockProduct = (id) => ({
  type: 'RESTOCK_PRODUCT',
  id,
});

export const addProduct = (product) => {
  const { name, quantity, description, id } = product;
  return {
    type: 'ADD_PRODUCT',
    name,
    quantity,
    description,
    id,
  };
};
