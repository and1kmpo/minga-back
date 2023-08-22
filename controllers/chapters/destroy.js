import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    // devuelve el objeto eliminado
    // req.user es el usuario autenticado (se trae desde passport)
    // req.params trae el id del capitulo a buscar y eliminar
    let destroyed = await Chapter.findByIdAndDelete(req.params.id)

    if (destroyed) {
      return res.status(200).json({
        success: true,
        response: null,
        message: 'Chapter deleted',
      });
    } else {
      return res.status(404).json({
        success: false,
        response: null,
        message: 'Chapter not found',
      });
    }
  } catch (error) {
    next(error)
  }
};
