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
  const currentState = {
    1: {
      name: 'Rainier',
      brand: 'Pabst',
      price: '3',
      abv: '4.2',
      pintsRemaining: '124',
      id: 1
    },
    2: {
      name: 'PBR',
      brand: 'Pabst',
      price: '3',
      abv: '4.2',
      pintsRemaining: '124',
      id: 2
    }
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

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'PBR',
        brand: 'Pabst',
        price: '3',
        abv: '4.2',
        pintsRemaining: '124',
        id: 2
      }
    });
  });

  test('Should update keg data in masterKegList', () => {
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

    const newState = kegListReducer({}, action);

    action = {
      type: c.ADD_KEG,
      name: "Doug's Ale",
      brand: "Steve's Brewery",
      price: '14',
      abv: '45',
      pintsRemaining: '12',
      id: 1
    };

    const newState2 = kegListReducer(newState, action);

    expect(newState2).toEqual({
      [id]: {
        name: "Doug's Ale",
        brand: "Steve's Brewery",
        price: '14',
        abv: '45',
        pintsRemaining: '12',
        id: 1
      }
    });
  });
});