import React from 'react';
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
    <FormContainer>
      <FormTitle>Add New Product</FormTitle>
      <form onSubmit={handleNewProductFormSubmission}>
        <FormField>
          <Label htmlFor="name">Product Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormField>
        <FormField>
          <Label htmlFor="quantity">Quantity</Label>
          <Input type="number" id="quantity" name="quantity" required />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            placeholder="please enter a short description of your product.."
          />
        </FormField>
        <Button type="submit">Add</Button>
      </form>
    </FormContainer>
  );
}

NewProductForm.prototype = {
  onNewProductCreation: PropTypes.func,
};

export default NewProductForm;
