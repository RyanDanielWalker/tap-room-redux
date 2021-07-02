import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function KegDetail(props) {
  const { keg, onClickingSellPint } = props;

  return (
    <React.Fragment>
      <h3>{keg.name}</h3>
      <h5>{keg.brand}</h5>
      <hr width="65%" />
      <h6>{keg.price} :: {keg.abv}</h6>
      <h6>{keg.pintsRemaining} pints remaining in keg.</h6>
      <Button variant="outline-secondary" onClick={onClickingSellPint}>Sell Pint</Button>
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func
}

export default KegDetail