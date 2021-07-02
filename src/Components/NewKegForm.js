import React from 'react';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, pintsRemaining: 124, id: v4() });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brand" />
        <input
          type="text"
          name="price"
          placeholder="Price" />
        <input
          type="text"
          name="abv"
          placeholder="Alcohol By Volume" />
        <Button variant="outline-success" type="submit">Add Keg</Button>
      </form>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;