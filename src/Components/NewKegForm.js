import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

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
      <form onSubmit={handleNewKegFormSubmission}>
        <h6>Name:</h6>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <h6>Brand:</h6>
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <h6>Price:</h6>
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <h6>Alcohol By Volume:</h6>
        <input
          type='text'
          name='abv'
          placeholder='Alcohol By Volume' />
        <Button variant="outline-secondary" type='submit' >Submit</Button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;