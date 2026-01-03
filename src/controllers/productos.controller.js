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

const verProductos = async (req,res)=>{
try {
   const productos = await productosModel.obtenerProductos();
   if(!productos){
    res.status(400).json({
        ok:false,
        msg:'no se encontraron productos'
    })
   }
    
   res.status(200).json({
    ok: true,
    msg:'lista de productos',
    productos

   })

} catch (error) {
    res.status(500).json({
        ok:false,
        msg:'error en el servidor'
    })
    
}




}

const modificarProductos = async (req,res) => {
 const {id} = req.params;
 const {nombre,descripcion,precio,img,stock,categoria_id} = req.body;

 try {
        const producto = await productosModel.obtenerProductos();
        if(!producto){
            return res.status(400).json({
                ok:false,
                msg:'no se encuentran productos'
            })
        }

        const actualizarPoducto = await productosModel.modificarProductos(id,{nombre,descripcion,precio,img,stock,categoria_id});

        res.status(200).json({
            ok:true,
            msg:'se actualizo corectamente el producto',
            actualizarPoducto
        })

    
 } catch (error) {
    res.status(500).json({
        ok:false,
        msg:'error en el servidor'
    })
    
 }




}

const eliminarProductos = async (req,res) => {
 const {id} = req.params;

try {
    const productos = await productosModel.obtenerProductos()
    if (!productos){
        return res.status(400).json({
            ok:false,
            msg: 'no existen productos'
        })
    }
 
    const deleteProductos = await productosModel.eliminarProductos(id);

    res.status(200).json({
        ok:true,
        msg : 'producto eliminado correctamente',
        deleteProductos
    })

    
} catch (error) {
    res.status(500).json({
        ok:false,
        msg: 'error en el servidor'
    })
}



}


export const productosController = {
nuevoProducto,
verProductos,
modificarProductos,
eliminarProductos

}