import React from 'react';

function NewProductForm() {
  return (
    <form onSubmit={() => {}}>
      <input type="text" name="name" placeholder="Product Name" />
      <input type="text" name="description" placeholder="Description" />
      <input type="number" name="quantity" placeholder="Quantity" />
      <button type="submit">Help!</button>
    </form>
  );
}

export default NewProductForm;
