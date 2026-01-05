import { bitacoraModel } from "../models/bitacora.model.js";

const guardarBitacorasUsuarios = async (req, res) => {
  try {
    const usuarioId = req.user.id;   

    const {
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
    } = req.body;

   
    const nueva = await bitacoraModel.guardarBitacoraXUsuario(
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
    );

 
    await bitacoraModel.vincularBitacoraConUsuario(usuarioId, nueva.id);

    res.status(201).json({
      ok: true,
      msg: "Bitácora guardada correctamente",
      bitacora: nueva
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error al guardar bitácora"
    });
  }
};


const obtenerBitacoras = async (req, res) => {
  try {
    const usuarioId = req.user.id;
    const { desde, hasta } = req.query;

    const bitacoras = await bitacoraModel.bitacorasXUsuario(
      usuarioId,
      desde || '0001-01-01',
      hasta || '9999-12-31'
    );

    res.status(200).json({
      ok: true,
      bitacoras
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error obteniendo bitácoras"
    });
  }
};


export const bitacoraController = {
    guardarBitacorasUsuarios,
    obtenerBitacoras
}
