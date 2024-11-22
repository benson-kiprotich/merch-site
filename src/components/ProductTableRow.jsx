import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableBody = styled.tbody`
  tr {
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
`;

function ProductTableRow({ id, name, quantity, description }) {
  return (
    <TableBody>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>${quantity}</td>
        <td>{description}</td>
      </tr>
    </TableBody>
  );
}

ProductTableRow.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desciption: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default ProductTableRow;
