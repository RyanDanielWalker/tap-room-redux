import * as a from '../../actions';
import * as c from '../../actions/ActionTypes';

describe('tap room actions', () => {
  test('addKeg should create ADD_TICKET action', () => {
    expect(a.addKeg({ name: 'Rainier', brand: 'Pabst', price: '3', abv: '4.2', pintsRemaining: '124', id: 1 })).toEqual({
      type: c.ADD_KEG,
      name: 'Rainier',
      brand: 'Pabst',
      price: '3',
      abv: '4.2',
      pintsRemaining: '124',
      id: 1
    });
  });

  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  test('deleteKeg should create DELETE_KEG action', () => {
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  test('makeSelectedKeg should create MAKE_SELECTED_KEG action', () => {
    expect(a.makeSelectedKeg({ name: 'Rainier', brand: 'Pabst', price: '3', abv: '4.2', pintsRemaining: '124', id: 1 })).toEqual({
      type: c.MAKE_SELECTED_KEG,
      name: 'Rainier',
      brand: 'Pabst',
      price: '3',
      abv: '4.2',
      pintsRemaining: '124',
      id: 1
    });
  });

  test('nullSelectedKeg should create NULL_SELECTED_KEG action', () => {
    expect(a.nullSelectedKeg()).toEqual({
      type: c.NULL_SELECTED_KEG
    })
  })
});


