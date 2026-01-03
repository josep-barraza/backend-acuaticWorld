import { Router } from "express";
import {productosController} from "../controllers/productos.controller.js";

const router = Router();


router.get('/productos',productosController.verProductos)

router.post('/productos',productosController.nuevoProducto)

router.patch('/productos/:id',productosController.modificarProductos)

router.delete('/productos/:id',productosController.eliminarProductos) 


export default router;