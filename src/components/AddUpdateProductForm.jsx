import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import styled from 'styled-components';
import Label from './Label';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

// Styled Components for Form
const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #007bff;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

function AddUpdateProductForm({ addUpdateProduct, updateProduct }) {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    description: '',
  });

  useEffect(() => {
    if (updateProduct !== undefined) {
      setProduct({
        name: updateProduct.name,
        quantity: updateProduct.quantity,
        description: updateProduct.description,
      });
    }
  }, [updateProduct]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (product.name && product.quantity && product.description) {
      if (updateProduct !== undefined) {
        addUpdateProduct({
          id: updateProduct.id,
          ...product,
        });
      } else {
        addUpdateProduct({
          id: v4(),
          ...product,
        });
      }

      setProduct({ name: '', quantity: '', description: '' }); // reset form
    } else {
      alert('Please fill in all fields.');
    }
  }
  return (
    <FormContainer>
      <FormTitle>Add New Product</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Product Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            placeholder="please enter a short description of your product.."
            value={product.description}
            onChange={handleChange}
          />
        </FormField>
        <Button type="submit">Add</Button>
      </form>
    </FormContainer>
  );
}

AddUpdateProductForm.prototype = {
  onNewProductCreation: PropTypes.func,
  product: PropTypes.object,
};

export default AddUpdateProductForm;
