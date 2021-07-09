import React from 'react';
import KegDetail from './KegDetail';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { v4 } from 'uuid'
import PropTypes from 'prop-types';
import * as a from './../actions';

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

  constructor(props) {
    super(props);
    this.state = {
      // masterKegList: [
      //   {
      //     name: "PBR",
      //     brand: "Pabst",
      //     price: "3.00",
      //     abv: "4.2",
      //     pintsRemaining: "124",
      //     id: v4()
      //   },
      //   {
      //     name: "Rainier",
      //     brand: "Pabst",
      //     price: "3.00",
      //     abv: "4.2",
      //     pintsRemaining: "15",
      //     id: v4()
      //   }
      // ],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
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
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id)
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
      editing: false
    });
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleSellPint = (id) => {
    const currentKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newPintsRemaining = currentKeg.pintsRemaining - 1;
    currentKeg.pintsRemaining = newPintsRemaining;
    this.setState({ selectedKeg: currentKeg })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg !== null) {
      currentlyVisibleState =
        <KegDetail
          keg={this.state.selectedKeg}
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
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;
