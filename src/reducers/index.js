import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';
import selectedKegReducer from './selected-keg-reducer';

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  formVisibleOnPage: formVisibleReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;