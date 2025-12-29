import {userModel} from '../models/user.model.js'

const register =async (req, res) =>{

try {
   
    const {nombre,email,password} = req.body; 
  
    
    return res.status(201).json({ 
        ok: true,
        mgs: 'usuario ok'
    })
} catch (error) {
    console.log(error,'no se poudo registrar usuario')
    return res.status(500).json({
        ok: false,
        msg: 'todos los campos son obligatorios'
    })
}};

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