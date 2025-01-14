import React from 'react';
import { connect } from 'react-redux';

import AddUpdateProductForm from './AddUpdateProductForm';
import ProductTable from './ProductTable';
import Button from './Button';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      product: {},
      mainProductList: {},
    };
  }

  handleClick = (productId = null) => {
    let updateProduct = {};
    if (productId != null) {
      updateProduct = this.state.mainProductList[productId];
    }

    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      product: updateProduct,
    }));
  };

  handleAddUpdateProduct = (newProduct) => {
    let newMainProductList = this.state.mainProductList;
    newMainProductList[newProduct.id] = newProduct;

    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false,
    });
  };

  handleBuyProduct = (productId) => {
    let updatedProductList = this.state.mainProductList;
    let updateProduct = updatedProductList[productId];
    if (updateProduct) {
      if (updateProduct.quantity > 0) {
        updateProduct.quantity--;
      } else {
        alert('Out of stock');
      }
    } else {
      alert('Product does not exist');
    }

    this.setState({
      mainProductList: updatedProductList,
      formVisibleOnPage: false,
    });
  };

  handleRestockProduct = (productId) => {
    let updatedProductList = this.state.mainProductList;
    let updateProduct = updatedProductList[productId];
    if (updateProduct) {
      updateProduct.quantity = Number(updateProduct.quantity) + 10;
    } else {
      alert('Product does not exist');
    }

    this.setState({
      mainProductList: updatedProductList,
      formVisibleOnPage: false,
    });
  };

  handleDeleteProduct = (productId) => {
    let newMainProductList = this.state.mainProductList;
    delete newMainProductList[productId];

    this.setState({
      mainProductList: newMainProductList,
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
          updateProduct={this.state.product}
        />
      );
      buttonText = 'Return to Product List';
    } else {
      currentVisibleState = (
        <ProductTable
          products={this.state.mainProductList}
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

ProductControl = connect()(ProductControl);
export default ProductControl;
