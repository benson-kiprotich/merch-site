import React from 'react';
import PropTypes from 'prop-types';

function ProductList({ productList }) {
  return <div>ProductList</div>;
}

ProductList.prototype = {
  productList: PropTypes.array,
};

export default ProductList;
