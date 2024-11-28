import React from 'react';
import AddUpdateProductForm from './AddUpdateProductForm';
import ProductTable from './ProductTable';
import Button from './Button';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      product: {},
      mainProductList: [],
    };
  }

  handleClick = (productId = null) => {
    let updateProduct = {};
    if (productId != null) {
      updateProduct = this.state.mainProductList.find(
        (product) => product.id === productId
      );
    }

    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      product: updateProduct,
    }));
  };

  handleAddUpdateProduct = (newProduct) => {
    let newMainProductList;
    let updateProductIndex = this.state.mainProductList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (updateProductIndex > -1) {
      newMainProductList = this.state.mainProductList;
      newMainProductList[updateProductIndex] = newProduct;
    } else {
      newMainProductList = this.state.mainProductList.concat(newProduct);
    }
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false,
    });
  };

  handleBuyProduct = (productId) => {
    let updatedProductList;
    let updateProductIndex = this.state.mainProductList.findIndex(
      (product) => product.id === productId
    );

    if (updateProductIndex > -1) {
      updatedProductList = this.state.mainProductList;
      let updateProduct = updatedProductList[updateProductIndex];
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
    let updatedProductList;
    let updateProductIndex = this.state.mainProductList.findIndex(
      (product) => product.id === productId
    );

    if (updateProductIndex > -1) {
      updatedProductList = this.state.mainProductList;
      let updateProduct = updatedProductList[updateProductIndex];
      updateProduct.quantity += 10;
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
    let removeProductIndex = this.state.mainProductList.findIndex(
      (product) => product.id === productId
    );

    if (removeProductIndex > -1) {
      newMainProductList.splice(removeProductIndex, 1);
    }
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

export default ProductControl;
