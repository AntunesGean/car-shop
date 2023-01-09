import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class Car {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(_id: string): Promise<ICar | null> {
    return this.model.findOne({ _id });
  }

  public async updateById(_id: string, car: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...car },
      { new: true },
    );
  }
}

export default Car;