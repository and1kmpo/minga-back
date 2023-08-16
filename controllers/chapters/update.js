import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    // el cliente envía un objeto en la propiedad body del objeto req
    // este objeto solo tiene la propiedad a modificar

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
