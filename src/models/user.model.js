import { poolPosgres } from '../config/dB.posgres.js';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';


/* Buscar usuario por email */
const findOneByEmail = async (email) => {
  const query = {
    text: `
      SELECT id, nombre, email, password
      FROM usuarios
      WHERE email = $1
    `,
    values: [email]
  };

  const { rows } = await poolPosgres.query(query);
  return rows[0];
};

/* Crear usuario */
const crearUsuario = async ({nombre, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = uuidv4();


  const query = {
    text: `
      INSERT INTO usuarios (id, nombre, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id, nombre, email
    `,
    values: [id, nombre, email, hashedPassword]
  };
try {
     const { rows } = await poolPosgres.query(query);
  return rows[0];
    
} catch (error) {
     if (error.code === '23505') {
    throw new Error('Email duplicado');
  }
  throw error;
    
}
 
};

/* Modificar usuario */
const modificarUsuario = async (id, { nombre, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = {
    text: `
      UPDATE usuarios
      SET nombre = $1,
          password = $2
      WHERE id = $3
      RETURNING id, nombre, email
    `,
    values: [nombre, hashedPassword, id]
  };

  const { rows } = await poolPosgres.query(query);
  return rows[0];
};

/*Eliminar usuario */
const eliminarUsuario = async (id) => {
  const query = {
    text: `
      DELETE FROM usuarios
      WHERE id = $1
      RETURNING id, nombre, email
    `,
    values: [id]
  };

  const { rows } = await poolPosgres.query(query);
  return rows[0];
};

export const userModel = {
  findOneByEmail,
  crearUsuario,
  modificarUsuario,
  eliminarUsuario
};
