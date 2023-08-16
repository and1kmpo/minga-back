import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    // devuelve el objeto eliminado
    console.log("=> DEL")
    console.log(req.params)
    let destroyed = await Chapter.findByIdAndDelete(req.params.id)
    console.log(destroyed.length)
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
