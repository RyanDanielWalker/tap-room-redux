import React from 'react';
import KegDetail from './KegDetail';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { v4 } from 'uuid'
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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // masterKegList: [
  //     //   {
  //     //     name: "PBR",
  //     //     brand: "Pabst",
  //     //     price: "3.00",
  //     //     abv: "4.2",
  //     //     pintsRemaining: "124",
  //     //     id: v4()
  //     //   },
  //     //   {
  //     //     name: "Rainier",
  //     //     brand: "Pabst",
  //     //     price: "3.00",
  //     //     abv: "4.2",
  //     //     pintsRemaining: "15",
  //     //     id: v4()
  //     //   }
  //     // ],
  //     // selectedKeg: null,
  //     // editing: false
  //   };
  // }

  handleClick = () => {
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.nullSelectedKeg();
      dispatch(action);

      // this.setState({
      //   selectedKeg: null,
      //   editing: false
      // });
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
    // const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id)
    // this.setState({
    //   masterKegList: newMasterKegList,
    //   selectedKeg: null,
    //   editing: false
    // });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action1 = a.addKeg(kegToEdit);
    dispatch(action1);
    const action2 = a.isEditing();
    dispatch(action2);
    const action3 = a.nullSelectedKeg();
    dispatch(action3);
    // const editedMasterKegList = this.state.masterKegList
    //   .filter(keg => keg.id !== this.state.selectedKeg.id)
    //   .concat(kegToEdit);
    // this.setState({
    //   masterKegList: editedMasterKegList,
    //   editing: false,
    //   selectedKeg: null
    // });
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.isEditing();
    dispatch(action);
    // this.setState({
    //   editing: true
    // });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    const { dispatch } = this.props;
    const action = a.makeSelectedKeg(selectedKeg)
    dispatch(action)
    // const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    // this.setState({ selectedKeg: selectedKeg });
  }

  handleSellPint = (id) => {
    const currentKeg = this.props.masterKegList[id];
    const { dispatch } = this.props;
    // const newPintsRemaining = currentKeg.pintsRemaining - 1;
    // currentKeg.pintsRemaining = newPintsRemaining;
    // const action = a.makeSelectedKeg(currentKeg);
    // dispatch(action)
    const action2 = a.sellPint(currentKeg)
    dispatch(action2)
    // const action = a.sellPint(id)
    // const currentKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    // const newPintsRemaining = currentKeg.pintsRemaining - 1;
    // currentKeg.pintsRemaining = newPintsRemaining;
    // this.setState({ selectedKeg: currentKeg })
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
