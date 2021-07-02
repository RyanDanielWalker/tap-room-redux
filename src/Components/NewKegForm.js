import React from 'react';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button';

function NewKegForm() {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
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

export default NewKegForm;