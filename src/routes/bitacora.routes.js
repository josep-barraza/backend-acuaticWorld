import { Router } from "express";
import { bitacoraController } from "../controllers/bitacora.controller.js";
import { middleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/bitacora',middleware.verificarToken,bitacoraController.obtenerBitacoras)
router.post('/bitacora',middleware.verificarToken,bitacoraController.guardarBitacorasUsuarios)

export default router;