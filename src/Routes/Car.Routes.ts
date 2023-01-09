import { Router } from 'express';
import CarController from '../Controllers/Car.Controller';

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
  (req, res, next) => new CarController(req, res, next).findById(),
);

export default carRoutes;