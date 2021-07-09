import kegListReducer from "../../reducers/keg-list-reducer";
import * as c from './../../actions/ActionTypes';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'Rainier',
    brand: 'Pabst',
    price: '3',
    abv: '4.2',
    pintsRemaining: '124',
    id: 1
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, abv, pintsRemaining, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pintsRemaining: pintsRemaining,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pintsRemaining: pintsRemaining,
        id: id
      }
    });
  });
})