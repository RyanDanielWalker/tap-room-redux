import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function KegDetail(props) {
  const { keg, onClickingSellPint, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <div>
        <h3>{keg.name}</h3>
        <h5>{keg.brand}</h5>
        <hr width="65%" />
        <h6>Price : {keg.price}</h6>
        <h6>A.B.V. : {keg.abv}</h6>
        <h6>{keg.pintsRemaining} pints remaining in keg.</h6>
        <Button variant="outline-danger" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
        <Button variant="outline-success" onClick={() => onClickingSellPint(keg.id)}>Sell Pint</Button>
        <Button variant="outline-secondary" onClick={onClickingEdit}>Edit Keg</Button>
      </div>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;