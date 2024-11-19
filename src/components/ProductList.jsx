import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

function ProductList({ productList }) {
  return (
    <>
      {productList.map((product) => (
        <Product
          name={product.name}
          quantity={product.quantity}
          description={product.description}
        />
      ))}
    </>
  );
}

ProductList.prototype = {
  productList: PropTypes.array,
};

export default ProductList;
