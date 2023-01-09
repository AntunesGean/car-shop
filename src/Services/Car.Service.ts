import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.Model';

export default class CarService {
  private createCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this.createCar(newCar);
  }

  public async findAll() {
    const carModel = new CarModel();
    const cars = await carModel.findAll();
    const carsArray = cars.map((car: ICar) => this.createCar(car));
    return carsArray;
  }

  public async findById(id: string) {
    const carModel = new CarModel();
    const cars = await carModel.findById(id);
    return cars;
  }
}