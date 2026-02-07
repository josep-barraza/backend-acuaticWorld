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
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_URLVERCEL,
  "http://localhost:5173"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/public",
  express.static(path.join(__dirname, "../public"))
);



// rutas
app.use('/aquaticWorld/usuarios', userRoutes);

app.use('/aquaticWorld/categoria',categoriaRoutes);

app.use('/aquaticWorld',productosRoutes)

app.use('/aquaticWorld', cursosRouters);



export default app;
