import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import productosRoutes from './routes/producto.routes.js'
import cursosRouters from './routes/curso.routes.js'
import bitacoraRouters from './routes/bitacora.routes.js'


dotenv.config();
const app = express();

// middlewares globales
app.use(cors({
   origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));


// rutas
app.use('/aquaticWorld/usuarios', userRoutes);

app.use('/aquaticWorld/categoria',categoriaRoutes);

app.use('/aquaticWorld',productosRoutes)

app.use('/aquaticWorld', cursosRouters);


// en index.js o donde tengas las rutas
import poolPostgres from './config/dB.postgres.js';

app.get('/aquaticWorld/productos-test', async (req, res) => {
  try {
    const { rows } = await poolPostgres.query(
      'SELECT * FROM productos ORDER BY id LIMIT 10'
    );
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: error.message });
  }
});




export default app;
