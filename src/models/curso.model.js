import poolPostgres from "../config/dB.postgres.js";


const getAllCursos = async() =>{

    const query = {
            text: `SELECT * FROM cursos `,
    }
    const {rows} = await poolPostgres.query(query);
    return rows;
};

const crearCursos = async(img,nombre,descripcion,valor,duracion,materia_id) => {
 
    const query= {
        text: `INSERT INTO cursos 
        (img, nombre, descripcion, valor, duracion, materia_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        values : [img,nombre,descripcion,valor,duracion,materia_id]
    };
    const {rows} = await poolPostgres.query(query);
    return rows[0];
};

const modificarCuersos = async(id,{img,nombre,descripcion,valor,duracion,materia_id}) =>{

const query = {
  text: `
    UPDATE cursos
    SET img = $2,
        nombre = $3,
        descripcion = $4,
        valor = $5,
        duracion = $6,
        materia_id = $7
    WHERE id = $1
    RETURNING *
  `,
  values: [id, img, nombre, descripcion, valor, duracion, materia_id]
};
    const {rows} = await poolPostgres.query(query);
    return rows[0];

}

const eliminarCursos = async(id) =>{

    const query= {
        text:`DELETE FROM cursos 
              WHERE id = $1
              RETURNIN *`,
        values:[id]      
    }
    const {rows} = await poolPostgres.query(query);
    return rows[0];
};


const cursosPorUsuario = async (usuarioId) => {
  const query = {
    text: `
      SELECT c.*
      FROM cursos c
      JOIN usuarios_cursos uc 
        ON uc.curso_id = c.id
      WHERE uc.usuario_id = $1;
    `,
    values: [usuarioId]
  };

  const { rows } = await poolPostgres.query(query);
  return rows;
};

const comprarCursoDB = async (usuarioId, cursoId) => {
  const query = {
    text: `
      INSERT INTO usuarios_cursos (usuario_id, curso_id)
      VALUES ($1, $2)
      ON CONFLICT (usuario_id, curso_id) DO NOTHING
      RETURNING *;
    `,
    values: [usuarioId, cursoId]
  };

  const { rows } = await poolPostgres.query(query);
  return rows[0];
};


export const cursosModel= {
  getAllCursos,
  modificarCuersos,
  crearCursos,
  eliminarCursos,
  cursosPorUsuario,
  comprarCursoDB      
  
};


