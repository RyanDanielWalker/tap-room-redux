import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>${props.price}</h5>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;