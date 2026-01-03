import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router()

router.post('/register', userController.register)

router.post('/login',userController.login)

router.patch('password',userController.cambiarContraseña)

router.delete('eliminar:id',userController.eliminarUsuario)

export default router;