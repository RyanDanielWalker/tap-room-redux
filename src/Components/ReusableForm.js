import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='abv'
          placeholder='Alcohol By Volume' />
        <Button variant="outline-secondary" type='submit'>{props.buttonText}</Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;