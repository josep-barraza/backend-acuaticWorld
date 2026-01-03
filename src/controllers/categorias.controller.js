import { categoriaModel } from "../models/categoria.model.js";

// Crear categoría
const nuevaCategoria = async (req, res) => {
    try {
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({
                ok: false,
                msg: 'El nombre es obligatorio'
            });
        }

        const nueva = await categoriaModel.crearCategorias(nombre);

        if (!nueva) {
            return res.status(400).json({
                ok: false,
                msg: 'La categoría ya existe'
            });
        }

        res.status(201).json({
            ok: true,
            categoria: nueva
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
};

// Ver todas las categorías
const verCategoria = async (req, res) => {
    try {
        const categorias = await categoriaModel.getAllCategorias();

        if (categorias.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'No existen categorías'
            });
        }

        res.status(200).json({
            ok: true,
            categorias
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
};

// Actualizar categoría
const actualizarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({
                ok: false,
                msg: 'El nombre es obligatorio'
            });
        }

        const categoriaActualizada = await categoriaModel.modificarCategorias(id, nombre);

        if (!categoriaActualizada) {
            return res.status(404).json({
                ok: false,
                msg: 'La categoría no existe'
            });
        }

        res.status(200).json({
            ok: true,
            msg:'categoria actualizada',
            categoria: categoriaActualizada
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
};

// Eliminar categoría
const eliminarCategoria = async (req, res) => {
    try {
        const { id } = req.params;

        const categoriaEliminada = await categoriaModel.eliminarCategorias(id);

        if (!categoriaEliminada) {
            return res.status(404).json({
                ok: false,
                msg: 'La categoría no existe'
            });
        }

        res.status(200).json({
            ok: true,
            msg:'categoria eliminada',
            categoria: categoriaEliminada
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
};

export const categoriaController = {
    nuevaCategoria,
    verCategoria,
    actualizarCategoria,
    eliminarCategoria
};
