import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();

// middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use('/aquaticWorld/v1/usuarios', userRoutes);

export default app;
