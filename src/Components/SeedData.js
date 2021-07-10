import { v4 } from 'uuid';

const rainier = v4();
const pbr = v4();

const SeedData = {
  masterKegList: {
    [pbr]: {
      name: "PBR",
      brand: "Pabst",
      price: "3.00",
      abv: "4.2",
      pintsRemaining: 124,
      id: pbr
    },
    [rainier]: {
      name: "Rainier",
      brand: "Pabst",
      price: "3.00",
      abv: "4.2",
      pintsRemaining: 15,
      id: rainier
    }
  }
}

export default SeedData;
