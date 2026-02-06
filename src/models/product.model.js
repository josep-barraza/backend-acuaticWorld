import { poolPostgres } from '../config/dB.postgres.js'

const crearProducto = async(nombre,descripcion,precio,img,stock,categoria_id) =>{

    const query ={
        text:`INSERT INTO productos 
        (nombre,descripcion,precio,img,stock,categoria_id)
        VALUES  ($1,$2,$3,$4,$5,$6)
        RETURNING *`,
        values :[nombre,descripcion,precio,img,stock,categoria_id]
    }
    const {rows} = await poolPostgres.query(query);
    return rows;
};

const obtenerProductos = async (limit = 8, offset = 0) => {
  const query = {
    text: `
      SELECT 
        p.id,
        p.nombre,
        p.descripcion,
        p.precio,
        p.img,
        p.stock,
        p.categoria_id,
        c.nombre AS categoria
      FROM productos p
      JOIN categorias c ON p.categoria_id = c.id
      ORDER BY p.id DESC
      LIMIT $1 OFFSET $2
    `,
    values: [limit, offset],
  };

  const { rows } = await poolPostgres.query(query);
  return rows;
};



const modificarProductos = async (id, { nombre, descripcion, precio, img, stock, categoria_id }) => {
  const query = {
    text: `
      UPDATE productos
      SET nombre = $2,
          descripcion = $3,
          precio = $4,
          img = $5,
          stock = $6,
          categoria_id = $7
      WHERE id = $1
      RETURNING *
    `,
    values: [id, nombre, descripcion, precio, img, stock, categoria_id]
  };

  const { rows } = await poolPostgres.query(query);
  return rows[0];
};


const eliminarProductos = async (id) => {
  const query = {
    text: `
      DELETE FROM productos
      WHERE id = $1
      RETURNING *
    `,
    values: [id]
  };

  const { rows } = await poolPostgres.query(query);
  return rows[0];
};



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

  if (!carritoRows.length) {
    throw new Error("No se encontró carrito activo");
  }

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


   /* aqui se le agrega la categoria al producto  */

const mostrarProductoConCategoria = async () => {
  const query = {
    text: `
      SELECT
        p.id,
        p.nombre,
        p.descripcion,
        p.precio,
        p.img,
        p.stock,
        c.nombre AS categoria
      FROM productos p
      JOIN categorias c ON p.categoria_id = c.id
    `
  };

  const { rows } = await poolPostgres.query(query);
  return rows;
};

const mostrarProductosCarro = async (usuarioId) => {
  const query = {
    text: `
      SELECT 
        p.id,
        p.nombre,
        p.precio,
        p.img,
        cp.cantidad
      FROM carritos c
      JOIN carrito_productos cp ON cp.carrito_id = c.id
      JOIN productos p ON p.id = cp.producto_id
      WHERE c.usuario_id = $1
      AND c.activo = TRUE
    `,
    values: [usuarioId]
  };

  const { rows } = await poolPostgres.query(query);

  return rows;
};

const eliminarProductoCarrito = async (carrito_id, producto_id) => {
  const query = {
    text: `
      DELETE FROM carrito_productos
      WHERE carrito_id = $1
      AND producto_id = $2
      RETURNING *
    `,
    values: [carrito_id, producto_id],
  };

  const { rows } = await poolPostgres.query(query);
  return rows;
};


const eliminarAllCarrito = async (carrito_id) => {
  const query = {
    text: `
      DELETE FROM carrito_productos
      WHERE carrito_id = $1
      RETURNING *
    `,
    values: [carrito_id],
  };

  const { rows } = await poolPostgres.query(query);
  return rows;
};




export const productosModel ={
    
    crearProducto,
    obtenerProductos,
    modificarProductos,
    eliminarProductos,
    agregarProductoAlCarrito,
    mostrarProductoConCategoria,
    mostrarProductosCarro,
    eliminarProductoCarrito,
    eliminarAllCarrito

}