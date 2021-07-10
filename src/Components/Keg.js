import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  const kegPicker = {
    border: '0.5px solid grey',
    margin: '5px',
    boxShadow: '2px 2px 2px #AF9E0C'
  }

  return (
    <React.Fragment>
      <div style={kegPicker} onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>${props.price}</h5>
        {props.pintsRemaining === 0 &&
          <h5>This Keg is Sold Out!</h5>
        }
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;