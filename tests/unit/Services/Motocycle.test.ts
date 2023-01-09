import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/Motorcycle.Service';
import { motoDomain, motoList, motoOne, motoById, motosAll } from '../mocks/Motorcycle.mock';

describe('Testando o service de motorcycle', function () {
  const service = new CarService();

  afterEach(function () {
    sinon.restore();
  });

  describe('Testando createMotorcycle', function () {
    it('Creates a new car succesfully', async function () {
      sinon.stub(Model, 'create').resolves(motoById);
      const result = await service.create(motoOne);
      expect(result).to.be.deep.equal(motoById);
    });
  });

  describe('Testando findAllMotorcycle', function () {
    it('Return all cars succesfully', async function () {
      sinon.stub(Model, 'find').resolves(motosAll);
      const result = await service.findAll();
      expect(result).to.be.deep.equal(motoList);
    });
  });

  describe('Testando findMotoById', function () {
    it('Return a car succesfully', async function () {
      sinon.stub(Model, 'findOne').resolves(motoById);
      const result = await service.findById('6348513f34c397abcad040b2');
      expect(result).to.be.deep.equal(motoDomain);
    });

    it('Fails to return a motocycle', async function () {
      sinon.stub(Model, 'findOne').resolves();
      try {
        await service.findById('6348513f34c397abcad040b2');
      } catch (error) {
        const { message } = error as Error;
        expect(message).to.be.equal('Car not found');
      }
    });
  });
});