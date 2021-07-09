import rootReducer from './../../reducers/index';
import kegListReducer from './../../reducers/keg-list-reducer';
import formVisibleReducer from './../../reducers/form-visible-reducer';
import { createStore } from 'redux';
import * as c from './../../actions/ActionTypes';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import { makeSelectedKeg } from '../../actions';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: {}
    });
  });

  test('Check that the initial state of kegListReducer matches rootReducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that the initial state of formVisibleReducer matches rootReducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  })

  test('Check that ADD_KEG action works for kegListReducer and rootReducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'Rainier',
      brand: 'Pabst',
      price: '3',
      abv: '4.2',
      pintsRemaining: '124',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that MAKE_SELECTED_KEG action works for selectedKegReducer and rootReducer', () => {
    const action = {
      type: c.MAKE_SELECTED_KEG
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer({}, action));
  });

})