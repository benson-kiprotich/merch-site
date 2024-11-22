import React from 'react';
import PropTypes from 'prop-types';

function ProductRow({ name, quantity, description }) {
  return (
    <tr>
      {/* <td>{product.id}</td> */}
      <td>{name}</td>
      <td>${quantity}</td>
      <td>{description}</td>
    </tr>
  );
}

ProductRow.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desciption: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default ProductRow;
