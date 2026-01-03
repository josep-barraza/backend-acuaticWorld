import {poolPostgres} from '../config/dB.postgres.js'

const crearCategorias = async (nombre) => {
   
    const query = {
       text : `INSERT INTO categorias (nombre)
       VALUES ($1)
       RETURNING id, nombre`,
       values : [nombre]}
    const {rows} = await poolPostgres.query(query);
    return rows[0]
    };

const getAllCategorias = async () => {

    const query = {
          text:` SELECT * FROM categorias`
    };
    const {rows} = await poolPostgres.query(query);
    return rows      

}   

const modificarCategorias = async (id,nombre) => {
 
    const query ={
        text : `UPDATE categorias 
        SET nombre = $2
        WHERE  id = $1
        RETURNING id,nombre`,
        values : [id,nombre]
    }
    const {rows} = await poolPostgres.query(query)
    return rows [0]

}

const eliminarCategorias = async(id) => {

    const query = {
        text:`DELETE FROM categorias
        WHERE id = $1 
        RETURNING id, nombre`,
        values: [id]
    }
    const {rows} = await poolPostgres.query(query);
    return rows[0];

} 

export const categoriaModel = {
crearCategorias,
getAllCategorias,
modificarCategorias,
eliminarCategorias
}