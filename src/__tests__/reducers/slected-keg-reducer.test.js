import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedKegReducer', () => {

  let action;
  const kegData = {
    name: 'Rainier',
    brand: 'Pabst',
    price: '3',
    abv: '4.2',
    pintsRemaining: '124',
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  })

  test('Should add keg data to masterKegList using MAKE_SELECTED_KEG action', () => {
    const { name, brand, price, abv, pintsRemaining, id } = kegData;
    action = {
      type: c.MAKE_SELECTED_TICKET,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pintsRemaining: pintsRemaining,
      id: id
    }
    expect(selectedKegReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pintsRemaining: pintsRemaining,
        id: id
      }
    })

  })
})