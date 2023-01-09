import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/Car.Service';
import { carDomain, carList, carOne, carById, carsAll } from '../mocks/Car.mock';

describe('Testando o service de car', function () {
  const service = new CarService();

  afterEach(function () {
    sinon.restore();
  });

  describe('Testando createCar', function () {
    it('Creates a new car succesfully', async function () {
      sinon.stub(Model, 'create').resolves(carById);
      const result = await service.create(carOne);
      expect(result).to.be.deep.equal(carById);
    });
  });

  describe('Testando findAllCars', function () {
    it('Return all cars succesfully', async function () {
      sinon.stub(Model, 'find').resolves(carsAll);
      const result = await service.findAll();
      expect(result).to.be.deep.equal(carList);
    });
  });

  describe('Testando findCarById', function () {
    it('Return a car succesfully', async function () {
      sinon.stub(Model, 'findOne').resolves(carById);
      const result = await service.findById('6352f8ea74092b2e6a784c51');
      expect(result).to.be.deep.equal(carDomain);
    });

    it('Fails to return a car', async function () {
      sinon.stub(Model, 'findOne').resolves();
      try {
        await service.findById('6352f8ea74092b2e6a784c51');
      } catch (error) {
        const { message } = error as Error;
        expect(message).to.be.equal('Car not found');
      }
    });
  });
});