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
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
      </tr>
    </TableHeader>
  );
}

export default ProductTableHeader;
