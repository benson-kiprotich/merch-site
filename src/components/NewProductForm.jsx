import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewProductForm({ onNewProductCreation }) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    onNewProductCreation({
      id: v4(),
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
    });
  }
  return (
    <form onSubmit={handleNewProductFormSubmission}>
      <input type="text" name="name" placeholder="Product Name" />
      <input type="text" name="description" placeholder="Description" />
      <input type="number" name="quantity" placeholder="Quantity" />
      <button type="submit">Create</button>
    </form>
  );
}

NewProductForm.prototype = {
  onNewProductCreation: PropTypes.func,
};

export default NewProductForm;
