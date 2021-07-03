import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { buttonStyles } from './KegControl';
import Form from 'react-bootstrap/Form';
import { formStyles } from './KegControl';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      pintsRemaining: 124,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleNewKegFormSubmission}>
        <Form.Group >
          <h6>Name:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='name'
            placeholder='Name'
            required='required' />
          <h6>Brand:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='brand'
            placeholder='Brand'
            required='required' />
          <h6>Price:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='price'
            placeholder='Price'
            required='required' />
          <h6>Alcohol By Volume:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='abv'
            placeholder='Alcohol By Volume' />
        </Form.Group>
        <Button style={buttonStyles} variant="outline-secondary" type='submit' >Submit</Button>
      </Form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;