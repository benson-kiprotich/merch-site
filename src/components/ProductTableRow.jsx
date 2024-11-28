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

const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.update {
    background-color: #ffc107;
    color: white;

    &:hover {
      background-color: #e0a800;
    }
  }

  &.buy {
    background-color: #076aff;
    color: white;

    &:hover {
      background-color: #0052e0;
    }
  }

  &.delete {
    background-color: #dc3545;
    color: white;

    &:hover {
      background-color: #c82333;
    }
  }
`;

function ProductTableRow({
  id,
  name,
  quantity,
  description,
  toggleFormVisibility,
  buyProduct,
  deleteProduct,
}) {
  return (
    <TableBody>
      <tr>
        <td>{name}</td>
        <td>{quantity > 0 ? quantity : 'Out of stock'}</td>
        <td>{description}</td>
        <td>
          <ActionButton
            className="update"
            onClick={() => toggleFormVisibility(id)}
          >
            Update
          </ActionButton>
          <ActionButton className="buy" onClick={() => buyProduct(id)}>
            Buy
          </ActionButton>
          <ActionButton className="delete" onClick={() => deleteProduct(id)}>
            Delete
          </ActionButton>
        </td>
      </tr>
    </TableBody>
  );
}

ProductTableRow.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desciption: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  toggleFormVisibility: PropTypes.func,
  buyProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default ProductTableRow;
