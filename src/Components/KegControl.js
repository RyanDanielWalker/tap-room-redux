import React from 'react';
import KegDetail from './KegDetail';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Button from 'react-bootstrap/Button';
import { v4 } from 'uuid'

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "PBR",
          brand: "Pabst",
          price: 3.00,
          abv: 4.2,
          pintsRemaining: 124,
          id: v4()
        },
        {
          name: "Rainier",
          brand: "Pabst",
          price: 3.00,
          abv: 4.2,
          pintsRemaining: 15,
          id: v4()
        }
      ],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddNewKeg = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

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
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingSellPint={this.handleSellPint} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddNewKeg} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add New Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="outline-primary" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    )
  }
}

export default KegControl;
