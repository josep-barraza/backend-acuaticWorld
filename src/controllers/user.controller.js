import { userModel } from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


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
  const {email, password} = req.body;

      if (!email || !password){
         return res.status(400).json({
          ok:false,
          msg:'email y password obligatorios'

         })}
      

    try {

      const usuario = await userModel.findOneByEmail(email)

      if (!usuario){
        return res.status(401).json({
          ok:false,
          msg:'usuario no existe'
        })
      }

      const isMatch = await bcrypt.compare(password,usuario.password)

      if (!isMatch) {
        return res.status(400).json({
          ok:false,
          msg: 'no coinsiden las credenciales'
        })
      }

      const token = jwt.sign({email: usuario.email},
       process.env.JWT_SECRET,{
        expiresIn: '1h'
       }
      )

    

        res.status(200).json({
          ok:true,
          msg:'correo y contraseña correcta',
          msg2: token 
        })

        
    } catch (error) {
        console.log(error,'no se encontro usuario');
    return res.status(500).json({
        ok: false,
        msg: 'error en el servidor'
    })
}};

  const cambiarContraseña = async(req, res) => {
  const {email, passwordActual, nuevaPassword} = req.body;

  try {
      const usuario = await userModel.findOneByEmail(email)

  if (!usuario){
    return res.status(400).json({
      ok:false,
      msg : 'usuario no existe'

    })
  }

  const passwordVAlida =await bcrypt.compare(
    passwordActual,
    usuario.password
  )
  if(!passwordVAlida){
    return res.status(401).json({
      ok:false,
      msg: 'contraseña actual no es valida'
    })
  }

const usuarioActualizado = await userModel.actualizarPassword(
  usuario.id,
  nuevaPassword
)

const token =  jwt.sign({email:usuarioActualizado.email},
  process.env.JWT_SECRET,{
    expiresIn:'1h'
  }
)

res.status(200).json({
  ok:true,
  msg: token
  
})


    
  } catch (error) {
    res.status(500).json({
      ok:false,
      msg:'error del servidor'
    })
  }
}


const eliminarUsuario = async(req, res) => {
try {
  const { id } = req.params

const usuarioEliminado = await userController.eliminarUsuario(id);

if(!eliminarUsuario){
  return res.status(400).json({
     ok:false,
     msg:'no existe usuario'

  })
}

res.status(200).json({
     ok:true,
     msg: 'usuario eliminado ',
     usuario: usuarioEliminado
})
  
} catch (error) {
  res.status(500).json({
    ok:false,
    msg:'error en el servidor'
  })
  
}

} 

export const userController = {
    register,
    login,
    cambiarContraseña,
    eliminarUsuario
}