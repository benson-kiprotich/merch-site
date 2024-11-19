import React from 'react';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
    };
  }

  render() {
    return <div>Product Control</div>;
  }
}

export default ProductControl;
