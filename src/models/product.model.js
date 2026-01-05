import { poolPostgres } from '../config/dB.postgres.js'

const crearProducto = async(nombre,descripcion,precio,img,stock,categoria_id) =>{

    const query ={
        text:`INSERT INTO productos 
        (nombre,descripcion,precio,img,stock,categoria_id)
        VALUES  ($1,$2,$3,$3,$4,$5,$6)
        RETURNING *`,
        values :[nombre,descripcion,precio,img,stock,categoria_id]
    }
    const {rows} = await poolPostgres.query(query);
    return rows[0];
};

const obtenerProductos = async() => {
    const query = {
        text :`SELECT * FROM productos   `
     }
    const {rows} = await poolPostgres.query(query)
    return rows[0];
    }

const modificarProductos = async(id,{nombre,descripcion,precio,img,stock,categoria_id}) => {
    const  query = {
        text: `UPDATE productos 
        SET nombre = $2
            descripcion = $3
            precio = $4
            img = $5
            stock = $6
            categori_id =7 
            WHERE id = $1
            RETURNING *`,
            values :[id,nombre,descripcion,precio,img,stock,categoria_id]
    }
    const {rows} = await poolPostgres.query(query);
    return rows[0]
;
} 

const eliminarProductos = async(id) => {
  const query = {
    text : `DELETE * FROM producto 
            WHERE id = $1
            RETURNING *`,
            values :[id]
  }
   const {rows} = await poolPostgres.query(query);
   return rows[0];


}



const agregarProductoAlCarrito = async (usuarioId, productoId) => {

  
  await poolPostgres.query(
    `INSERT INTO carritos (usuario_id)
     VALUES ($1)
     ON CONFLICT (usuario_id) DO NOTHING`,
    [usuarioId]
  );

 
  const { rows: carritoRows } = await poolPostgres.query(
    `SELECT id FROM carritos WHERE usuario_id = $1 AND activo = TRUE`,
    [usuarioId]
  );

  const carritoId = carritoRows[0].id;

  
  const { rows } = await poolPostgres.query(
    `INSERT INTO carrito_productos (carrito_id, producto_id, cantidad)
     VALUES ($1, $2, 1)
     ON CONFLICT (carrito_id, producto_id)
     DO UPDATE SET cantidad = carrito_productos.cantidad + 1
     RETURNING *`,
    [carritoId, productoId]
  );

  return rows[0];
};

export const productosModel ={
    
    crearProducto,
    obtenerProductos,
    modificarProductos,
    eliminarProductos,
    agregarProductoAlCarrito

}