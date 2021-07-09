import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, price, abv, pintsRemaining, id } = action;
  switch (action.type) {
    case c.MAKE_SELECTED_KEG:
      return Object.assign({}, state, {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pintsRemaining: pintsRemaining,
        id: id
      })
    case c.NULL_SELECTED_KEG:
      return null;
    default:
      return state
  }
}
