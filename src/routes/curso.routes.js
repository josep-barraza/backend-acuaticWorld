import { cursosController } from "../controllers/cursos.controller.js";
import { middleware } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();


router.get('/cursos',cursosController.verCursos);

router.post('/cursos',cursosController.nuevoCurso);

router.put('/cursos/:id',cursosController.modificarCuersos);

router.delete('/cursos/:id',cursosController.eliminarCursos);



router.get('/usuarios/cursos',middleware.verificarToken,cursosController.mostrarCursosXUsuarios
);

router.post('/cursos/comprar',middleware.verificarToken,cursosController.comprarCurso
);



export default router;
