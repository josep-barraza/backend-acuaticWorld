import { cursosModel }  from "../models/curso.model.js";
import { userModel }  from "../models/user.model.js";


const verCursos = async(req,res) =>{

try {
    const cursos = await cursosModel.getAllCursos();
    if(!cursos){
        return res.status(400).json({
            ok: false,
            msg:'no se encontraron cursos'
        })
    }

   res.status(200).json({
        ok:true,
        msg:'lista de cursos',
        cursos
    })
    
} catch (error) {
    return res.status(500).json({
        ok:false,
        msg:'error en el servidor'
    })
}};


const nuevoCurso = async(req,res) => {
    const {img,nombre,descripcion,valor,duracion,materia_id} = req.body;

try {
        const newCurso = await cursosModel.crearCursos(img,nombre,descripcion,valor,duracion,materia_id);

        return res.status(200).json({
            ok:true,
            msg: 'se agrego curso correctamente',
            newCurso
        })
} catch (error) {
    return res.status(500).json({
        ok:false,
        msg:'error del servidor'
    })
    
}

};

const modificarCuersos = async(req,res) => {
    const {id} = req.params;
    const {img,nombre,descripcion,valor,duracion,materia_id} = req.body;

    try {

        const cursos = await cursosModel.getAllCursos();
        if(!cursos){
            return res.status(400).json({
                ok:false,
                msg:'no se encuentran cursos'
            });
        };

        const actualizarCursos = await cursosModel.modificarCuersos(id,{img,nombre,descripcion,valor,duracion,materia_id});

        return res.status(200).json({
            ok:true,
            msg:'curso actualizado',
            actualizarCursos

        });
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'erro en el ervidor'
        })
    }
}

const eliminarCursos = async(req,res) =>{
    const {id} = req.params;

    try {
        const cursos = await cursosModel.getAllCursos();
        if(!cursos){
            return res.status(400).json({
                ok:false,
                msg:'no se encontraron cursos'
            })
        }

        const eliminarCurso = await cursosModel.eliminarCursos(id);

        return res.status(200).json({
            ok:true,
            msg:'curso eliminado',
            eliminarCurso
        })

        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'error en el servidor'
        })      
    }
}




const mostrarCursosXUsuarios = async (req, res) => {
  try {
    const email = req.user.email;

    const usuario = await userModel.findOneByEmail(email);

    const cursos = await cursosModel.cursosPorUsuario(usuario.id);

    res.status(200).json({
      ok: true,
      cursos
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error en el servidor"
    });
  }
};

const comprarCurso = async (req, res) => {
  try {
    const email = req.user.email;
    const { cursoId } = req.body;

    if (!cursoId) {
      return res.status(400).json({
        ok: false,
        msg: "cursoId es requerido"
      });
    }

    const usuario = await userModel.findOneByEmail(email);

    const compra = await cursosModel.comprarCursoDB(usuario.id, cursoId);

    if (!compra) {
      return res.status(200).json({
        ok: false,
        msg: "El usuario ya tiene este curso"
      });
    }

    res.status(201).json({
      ok: true,
      msg: "Curso comprado correctamente"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error al registrar compra"
    });
  }
};



export const cursosController = {
    verCursos,
    nuevoCurso,
    modificarCuersos,
    eliminarCursos,
    mostrarCursosXUsuarios,
    comprarCurso
}