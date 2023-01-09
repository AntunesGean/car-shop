import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/Car.Service';
import { allCars, carInput, carOutput, updatedCarInput, updatedCarOutput } from '../mocks/Car.mock';

describe('Testa o CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Cria um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const carService = new CarService();
    const result = await carService.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Lista todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const carService = new CarService();
    const result = await carService.findAll();

    expect(result).to.be.deep.equal(allCars);
  });

  it('Lista carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(allCars[0]);

    const carService = new CarService();
    const result = await carService.findById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(allCars[0]);
  });

  it('Faz o update do carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCarOutput);

    const carService = new CarService();
    const result = await carService.updateById('634852326b35b59438fbea2f', updatedCarInput);

    expect(result).to.be.deep.equal(updatedCarOutput);
  });
});