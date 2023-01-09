import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/Motorcycle.Service';
import { allMotos, motoInput, motoOutput, updatedMoto } from '../mocks/Motorcycle.mock';

describe('Testa o CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Cria um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(motoOutput);

    const motoService = new MotorcycleService();
    const result = await motoService.create(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Lista todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(allMotos);

    const motoService = new MotorcycleService();
    const result = await motoService.findAll();

    expect(result).to.be.deep.equal(allMotos);
  });

  it('Lista carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(allMotos[0]);

    const motoService = new MotorcycleService();
    const result = await motoService.findById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(allMotos[0]);
  });

  it('Faz o update do carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMoto);

    const motoService = new MotorcycleService();
    const result = await motoService.updateById('634852326b35b59438fbea2f', allMotos[0]);

    expect(result).to.be.deep.equal(updatedMoto);
  });
});