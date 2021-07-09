import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedKegReducer', () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  })

  test('Should add keg data to masterKegList using MAKE_SELECTED_KEG action', () => {
    action = {
      type: c.MAKE_SELECTED_KEG,
      name: 'Rainier',
      brand: 'Pabst',
      price: '3',
      abv: '4.2',
      pintsRemaining: '124',
      id: 1
    }
    expect(selectedKegReducer({}, action)).toEqual({
      name: 'Rainier',
      brand: 'Pabst',
      price: '3',
      abv: '4.2',
      pintsRemaining: '124',
      id: 1
    })
  })


  test('Should return status of selected ticket to null', () => {
    action = {
      type: c.NULL_SELECTED_KEG
    }
    expect(selectedKegReducer({}, action)).toEqual({});
  });
})

