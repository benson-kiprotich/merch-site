import React from 'react';
import styled from 'styled-components';

const TableHeader = styled.thead`
  background-color: #007bff;
  color: white;

  th {
    padding: 10px;
    text-align: left;
  }
`;

function ProductTableHeader() {
  return (
    <TableHeader>
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Description</th>
      </tr>
    </TableHeader>
  );
}

export default ProductTableHeader;
