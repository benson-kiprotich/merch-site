import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddUpdateProductForm from './AddUpdateProductForm';
import ProductTable from './ProductTable';
import Button from './Button';
import * as a from './../actions';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedProduct: {},
    };
  }

  handleClick = (productId = null) => {
    let selectedProduct = {};
    if (productId != null) {
      selectedProduct = this.props.mainProductList[productId];
    }

    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      selectedProduct: selectedProduct,
    }));
  };

  handleAddUpdateProduct = (newProduct) => {
    const { dispatch } = this.props;
    const action = a.addProduct(newProduct);

    dispatch(action);
    this.setState({
      formVisibleOnPage: false,
    });
  };

  handleBuyProduct = (productId) => {
    const { dispatch } = this.props;
    const action = a.buyProduct(productId);

    dispatch(action);

    this.setState({
      formVisibleOnPage: false,
    });
  };

  handleRestockProduct = (productId) => {
    const { dispatch } = this.props;
    const action = a.restockProduct(productId);
    dispatch(action);

    this.setState({
      formVisibleOnPage: false,
    });
  };

  handleDeleteProduct = (productId) => {
    const { dispatch } = this.props;
    const action = a.deleteProduct(productId);
    dispatch(action);
    this.setState({
      formVisibleOnPage: false,
    });
  };

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleState = (
        <AddUpdateProductForm
          addUpdateProduct={this.handleAddUpdateProduct}
          updateProduct={this.state.selectedProduct}
        />
      );
      buttonText = 'Return to Product List';
    } else {
      currentVisibleState = (
        <ProductTable
          products={this.props.mainProductList}
          toggleFormVisibility={this.handleClick}
          buyProduct={this.handleBuyProduct}
          restockProduct={this.handleRestockProduct}
          deleteProduct={this.handleDeleteProduct}
        />
      );
      buttonText = 'Add Product';
    }

    return (
      <>
        {currentVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </>
    );
  }
}

ProductControl.propTypes = {
  mainProductList: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    mainProductList: state,
  };
};

ProductControl = connect(mapStateToProps)(ProductControl);
export default ProductControl;
