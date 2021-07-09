import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;