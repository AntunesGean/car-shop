import Car from '../../../src/Domains/Car';

export const carOne = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carById = {
  id: '6352f8ea74092b2e6a784c51',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carsAll = [
  {
    id: '6352f8ea74092b2e6a784c51',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const carDomain = new Car(carsAll[0]);

export const otherCarDomain = new Car(carsAll[1]);

export const carList = [carDomain, otherCarDomain];