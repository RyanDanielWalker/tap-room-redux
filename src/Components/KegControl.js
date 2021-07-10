import React from 'react';
import KegDetail from './KegDetail';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { connect } from 'react-redux';

export const cardStyles = {
  padding: '10px',
  textAlign: 'center',
  margin: 'auto',
  width: '50vw',
  boxShadow: '5px 5px 5px #AF9E0C'
}

export const buttonStyles = {
  margin: 'auto',
  width: '25%',
  marginBottom: '10px',
  display: 'block',
  boxShadow: '2px 2px 2px'
}

export const formStyles = {
  textAlign: 'center',
  margin: 'auto',
  width: '65%',
  marginBottom: '10px',
}

class KegControl extends React.Component {

  handleClick = () => {
    if (this.props.selectedKeg != null && this.props.editing === true) {
      const { dispatch } = this.props;
      const action = a.nullSelectedKeg();
      dispatch(action);
      const action2 = a.isEditing();
      dispatch(action2)
    }
    else if (this.props.selectedKeg != null && this.props.editing === false) {
      const { dispatch } = this.props;
      const action = a.nullSelectedKeg();
      dispatch(action);
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    };
  }

  handleAddNewKeg = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.nullSelectedKeg();
    dispatch(action2);
  };

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action1 = a.addKeg(kegToEdit);
    dispatch(action1);
    const action2 = a.isEditing();
    dispatch(action2);
    const action3 = a.nullSelectedKeg();
    dispatch(action3);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.isEditing();
    dispatch(action);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    const { dispatch } = this.props;
    const action = a.makeSelectedKeg(selectedKeg)
    dispatch(action)
  }

  handleSellPint = (id) => {
    const { dispatch } = this.props;
    const currentKeg = this.props.masterKegList[id];
    currentKeg.pintsRemaining -= 1
    const action = a.makeSelectedKeg(currentKeg)
    dispatch(action)
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {
      currentlyVisibleState =
        <EditKegForm
          keg={this.props.selectedKeg}
          onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg !== null) {
      currentlyVisibleState =
        <KegDetail
          keg={this.props.selectedKeg}
          onClickingSellPint={this.handleSellPint}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState =
        <NewKegForm
          onNewKegCreation={this.handleAddNewKeg} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState =
        <KegList
          kegList={this.props.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add New Keg";
    }
    return (
      <React.Fragment>
        <Card style={cardStyles}>
          {currentlyVisibleState}
          <Button
            style={buttonStyles}
            variant="outline-primary"
            onClick={this.handleClick}>{buttonText}</Button>
        </Card>
      </React.Fragment>
    )
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;
