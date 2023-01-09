import { Router } from 'express';
import CarController from '../Controllers/Car.Controller';
import idValidation from '../Middlewares/idValidation';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

carRoutes.get(
  '/cars/:id',
  idValidation,
  (req, res, next) => new CarController(req, res, next).findById(),
);

export default carRoutes;