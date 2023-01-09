import express from 'express';
import carRoutes from './Routes/Car.Routes';
import motoRoutes from './Routes/Motorcycle.Routes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motoRoutes);

export default app;
