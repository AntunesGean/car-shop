import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle.Model';

class MotorcycleService {
  private createMotorcycle(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleModel();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    const createMoto = this.createMotorcycle(newMotorcycle);
    return createMoto;
  }

  public async findAll() {
    const motorcycleODM = new MotorcycleModel();
    const motorcycles = await motorcycleODM.findAll();
    const motorcyclesArray = motorcycles
      .map((motorcycle: IMotorcycle) => this.createMotorcycle(motorcycle));
    return motorcyclesArray;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleModel();
    const motorcycles = await motorcycleODM.findById(id);
    const motoOne = this.createMotorcycle(motorcycles);
    return motoOne;
  }

  public async updateById(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleModel();
    const motorcycles = await motorcycleODM.updateById(id, motorcycle);
    const motoUpdate = this.createMotorcycle(motorcycles);
    return motoUpdate;
  }
}

export default MotorcycleService;