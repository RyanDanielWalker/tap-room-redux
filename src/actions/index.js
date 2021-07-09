import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, abv, pintsRemaining, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pintsRemaining: pintsRemaining,
    id: id
  };
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});
