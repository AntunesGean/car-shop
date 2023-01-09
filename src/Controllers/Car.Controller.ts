import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.Service';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const newCar = await this.service.findAll();
      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const newCar = await this.service.findById(id);
      if (!newCar) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  // public async updateById() {
  //   const { id } = this.req.params;
  //   const car = this.req.body;
  //   try {
  //     const cars = await this.service.updateById(id, car);
  //     if (!cars) {
  //       return this.res.status(404).json({ message: 'Car not found' });
  //     }
  //     if (!isValidObjectId(id)) {
  //       return this.res.status(422).json({ message: 'Invalid mongo id' });
  //     }
  //     return this.res.status(200).json(cars);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }
}

export default CarController;