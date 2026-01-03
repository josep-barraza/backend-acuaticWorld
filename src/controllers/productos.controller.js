import { productosModel } from "../models/product.model.js"

const nuevoProducto = async(req, res) =>{
    try {
        const {nombre,descripcion,precio,img,stock,categoria_id} = req.body

        if(!nombre,!descripcion,!precio,!img,!stock,!categoria_id){
            res.status(404).json({
                ok:false,
                msg: 'todos los campos obligatorios'
            })
        }

        const newProducto = await productosModel.crearProducto(nombre,descripcion,precio,img,stock,categoria_id)

        res.status(200).json({
            ok:true,
            msg:'producto creado con exito',
            newProducto
        })
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'error en el servidor'
        })
    }

}


export const productosController = {
nuevoProducto

}