import { Router } from "express";
import {productosController} from "../controllers/productos.controller.js";

const router = Router();


/* router.get('/productos',) */

router.post('/productos',productosController.nuevoProducto)

/* router.put('/productos/:id',)

router.patch('/productos/:id',)

router.delete('/productos/:id',) */


export default router;