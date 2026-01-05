import poolPostgres from "../config/dB.postgres.js";

const guardarBitacoraXUsuario = async (
  nombre,
  edad,
  fecha_buceo,
  lugar_buceo,
  exp_ultimas24hr,
  nuevo_buceo,
  deja_sup,
  llega_fondo,
  deja_fondo,
  profundidad,
  tipo_buceo,
  temperatura_agua
) => {
  const query = {
    text: `
      INSERT INTO bitacoras (
        nombre, edad, fecha_buceo, lugar_buceo,
        exp_ultimas24hr, nuevo_buceo,
        deja_sup, llega_fondo, deja_fondo,
        profundidad, tipo_buceo, temperatura_agua
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING *;
    `,
    values: [
      nombre,
      edad,
      fecha_buceo,
      lugar_buceo,
      exp_ultimas24hr,
      nuevo_buceo,
      deja_sup,
      llega_fondo,
      deja_fondo,
      profundidad,
      tipo_buceo,
      temperatura_agua
    ]
  };

  const { rows } = await poolPostgres.query(query);
  return rows[0];
};



const vincularBitacoraConUsuario = async (usuarioId, bitacoraId) => {
  const query = {
    text: `
      INSERT INTO usuario_bitacora (usuario_id, bitacora_id)
      VALUES ($1, $2)
    `,
    values: [usuarioId, bitacoraId]
  };

  await poolPostgres.query(query);
};

const bitacorasXUsuario = async (usuarioId, desde, hasta) => {
  const query = {
    text: `
      SELECT b.*
      FROM bitacoras b
      JOIN usuario_bitacora ub 
        ON ub.bitacora_id = b.id
      WHERE ub.usuario_id = $1
        AND b.fecha_buceo BETWEEN $2 AND $3
      ORDER BY b.fecha_buceo DESC;
    `,
    values: [usuarioId, desde, hasta]
  };

  const { rows } = await poolPostgres.query(query);
  return rows;
};



export const bitacoraModel = {
    guardarBitacoraXUsuario,
    vincularBitacoraConUsuario,
    bitacorasXUsuario
}