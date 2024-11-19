import React from 'react';

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
    const newMainProductList = this.state.mainTicketList.concat(newProduct);
    this.setState({
      mainTicketList: newMainProductList,
      formVisibleOnPage: false,
    });
  };

  render() {
    return <div>Product Control</div>;
  }
}

export default ProductControl;
