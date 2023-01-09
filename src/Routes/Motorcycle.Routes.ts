import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.Controller';
import idValidation from '../Middlewares/idValidation';

const motoRoutes = Router();

motoRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

motoRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

motoRoutes.get(
  '/motorcycles/:id',
  idValidation,
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

motoRoutes.put(
  '/motorcycles/:id',
  idValidation,
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

export default motoRoutes;