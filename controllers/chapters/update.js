import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    // req.user es el usuario autenticado (se trae desde passport)
    // req.body trae los datos capturados del formulario/postman (sin datos del usuario logueado)
    // console.log("(update)")
    // console.log(req.query)

    let one = await Chapter.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { select: "_id title cover_photo order pages", new: true }
    )

    if (one) {
      return res.status(200).json({
        success: true,
        response: one,
        message: 'Chapter updated',
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
