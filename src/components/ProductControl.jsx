import React from 'react';
import NewProductForm from './NewProductForm';
import ProductTable from './ProductTable';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
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
        <NewProductForm
          onNewProductCreation={this.handleAddingNewProductToList}
        />
      );
      buttonText = 'Return to Product List';
    } else {
      currentVisibleState = (
        <ProductTable products={this.state.mainProductList} />
      );
      buttonText = 'Add Product';
    }
    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default ProductControl;
