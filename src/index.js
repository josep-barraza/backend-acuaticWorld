import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import productosRoutes from './routes/porducto.routes.js'


dotenv.config();
const app = express();

// middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use('/aquaticWorld/v1/usuarios', userRoutes);

app.use('/aquaticWorld/v1/productos',categoriaRoutes);

app.use('/aquaticWorld/v1',productosRoutes)

export default app;
