import { userModel } from '../models/user.model.js';
import jwt from 'jsonwebtoken';


const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({
        ok: false,
        msg: "Todos los campos son obligatorios",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        ok: false,
        msg: "Email no válido",
      });
    }

    if (password.length < 6 || password.length > 15) {
      return res.status(400).json({
        ok: false,
        msg: "La contraseña debe tener entre 6 y 15 caracteres",
      });
    }

    //  crear usuario 
    const nuevoUsuario = await userModel.crearUsuario({
      nombre,
      email,
      password,
    });

    // crear token con jwt

    const token = jwt.sign({
        email: nuevoUsuario.email
    },
        process.env.JWT_SECRET,{expiresIn: '1h'}
)

    return res.status(201).json({
      ok: true,
      usuario: token,
    });

  } catch (error) {
    // Email duplicado desde PostgreSQL
    if (error.message === 'Email duplicado') {
      return res.status(409).json({
        ok: false,
        msg: "Correo ya registrado",
      });
    }

    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: "Error del servidor",
    });
  }
};

const login = async(req, res) => {

    try {

        

        
    } catch (error) {
        console.log(error,'no se encontro usuario');
    return res.status(500).json({
        ok: false,
        msg: 'error en el servidor'
    })
}};



export const userController = {
    register,
    login
}