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





export const productosModel ={
    crearProducto

}