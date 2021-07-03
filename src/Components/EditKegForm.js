import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { formStyles } from './KegControl';
import Form from 'react-bootstrap/Form';
import { buttonStyles } from './KegControl';

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      pintsRemaining: event.target.pintsRemaining.value,
      id: keg.id
    });
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleEditKegFormSubmission}>
        <Form.Group >
          <h6>Name:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='name'
            placeholder='Name'
            defaultValue={keg.name} />
          <h6>Brand:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='brand'
            placeholder='Brand'
            defaultValue={keg.brand} />
          <h6>Price:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='price'
            placeholder='Price'
            defaultValue={keg.price} />
          <h6>Alcohol By Volume:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='abv'
            placeholder='Alcohol By Volume'
            defaultValue={keg.abv} />
          <h6>Pints Remaining in Keg:</h6>
          <Form.Control
            style={formStyles}
            type='text'
            name='pintsRemaining'
            placeholder='Pints Remaining in Keg'
            defaultValue={keg.pintsRemaining} />
        </Form.Group>
        <Button style={buttonStyles} variant="outline-secondary" type='submit' >Submit</Button>
      </Form>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;