import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductTableRow from './ProductTableRow';
import ProductTableHeader from './ProductTableHeader';

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

const EmptyMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #555;
`;

// ProductTable Component
const ProductTable = ({
  products,
  toggleFormVisibility,
  buyProduct,
  restockProduct,
  deleteProduct,
}) => {
  return (
    <TableContainer>
      {Object.keys(products).length > 0 ? (
        <StyledTable>
          <ProductTableHeader />
          {Object.entries(products).map(([key, product]) => (
            <ProductTableRow
              key={key}
              id={product.id}
              name={product.name}
              quantity={Number(product.quantity)}
              description={product.description}
              toggleFormVisibility={toggleFormVisibility}
              buyProduct={buyProduct}
              restockProduct={restockProduct}
              deleteProduct={deleteProduct}
            />
          ))}
        </StyledTable>
      ) : (
        <EmptyMessage>No products available</EmptyMessage>
      )}
    </TableContainer>
  );
};

ProductTable.prototype = {
  products: PropTypes.object,
  toggleFormVisibility: PropTypes.func,
  buyProduct: PropTypes.func,
  restockProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default ProductTable;
