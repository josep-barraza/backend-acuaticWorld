import { Router } from "express";
import { categoriaController } from "../controllers/categorias.controller.js"

const router = Router()

router.post('/categorias',categoriaController.nuevaCategoria);
router.get('/categorias',categoriaController.verCategoria);
router.put('/categorias/:id',categoriaController.actualizarCategoria);
router.delete('/categorias/:id',categoriaController.eliminarCategoria);




export default router;