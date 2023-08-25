import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  try {

    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let one = await Manga.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    if (one) {
      return res.status(200).json({
        success: true,
        response: one,
        message: "Manga updated successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        response: null,
        message: "Manga not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
