import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>{props.brand}</h5>
        <hr />
        <h6>{props.price} :: {props.abv}</h6>
        <h6>{props.pintsRemaining} pints remaining in keg.</h6>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}