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
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));


// rutas
app.use('/aquaticWorld/usuarios', userRoutes);

app.use('/aquaticWorld/categoria',categoriaRoutes);

app.use('/aquaticWorld',productosRoutes)

app.use('/aquaticWorld', cursosRouters);


app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});


export default app;
