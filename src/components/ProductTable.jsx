import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductRow from './ProductRow';

const TableContainer = styled.div`
  margin: 20px 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #007bff;
  color: white;

  th {
    padding: 10px;
    text-align: left;
  }
`;

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

const EmptyMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #555;
`;

// ProductTable Component
const ProductTable = ({ products }) => {
  return (
    <TableContainer>
      {products.length > 0 ? (
        <StyledTable>
          <TableHeader>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                id={product.id}
                name={product.name}
                quantity={product.quantity}
                description={product.description}
              />
            ))}
          </TableBody>
        </StyledTable>
      ) : (
        <EmptyMessage>No products available</EmptyMessage>
      )}
    </TableContainer>
  );
};

ProductTable.prototype = {
  products: PropTypes.array,
};

export default ProductTable;
