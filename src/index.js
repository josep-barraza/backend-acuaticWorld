import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import productosRoutes from './routes/producto.routes.js'
import cursosRouters from './routes/curso.routes.js'
import bitacoraRouters from './routes/bitacora.routes.js'
import path from 'path';
import { fileURLToPath } from 'url';


dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares globales
app.use(cors({
   origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/img', express.static(path.join(__dirname, 'public/img')));



// rutas
app.use('/aquaticWorld/usuarios', userRoutes);

app.use('/aquaticWorld/categoria',categoriaRoutes);

app.use('/aquaticWorld',productosRoutes)

app.use('/aquaticWorld', cursosRouters);



export default app;
