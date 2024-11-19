import React from 'react';
import PropTypes from 'prop-types';

function Product({ name, desciption, quantity }) {
  return (
    <div>
      <h3>
        {name} - {quantity}
      </h3>
      <p>
        <em>{desciption}</em>
      </p>
      <hr />
    </div>
  );
}

Product.prototype = {
  name: PropTypes.string.isRequired,
  desciption: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};
export default Product;
