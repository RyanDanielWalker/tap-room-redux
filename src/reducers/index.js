import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';
import selectedKegReducer from './selected-keg-reducer';
import editingReducer from './editing-reducer';

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  formVisibleOnPage: formVisibleReducer,
  selectedKeg: selectedKegReducer,
  editing: editingReducer
});

export default rootReducer;