import { Router } from "express";
import {productosController} from "../controllers/productos.controller.js";
import { middleware } from "../middlewares/auth.middleware.js";

const router = Router();


router.get('/productos',productosController.verProductos)

router.post('/productos',productosController.nuevoProducto)

router.patch('/productos/:id',productosController.modificarProductos)

router.delete('/productos/:id',productosController.eliminarProductos) 

router.post("/carrito/agregar",middleware.verificarToken,productosController.agregarAlCarrito
);

router.get("/carrito",middleware.verificarToken,productosController.verProductosCarro
);

router.delete("/carrito/:id", productosController.eliminarProductoCarro);
router.delete("/delete/carrito", productosController.eliminarAllCarro);





export default router;  