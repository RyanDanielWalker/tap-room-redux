import * as a from './../../actions';
import * as c from './../../actions/ActionTypes';

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
});

