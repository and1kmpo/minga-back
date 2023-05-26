import Chapter from "../../models/Chapter.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await Chapter.findOneAndDelete({ _id: data.id });

    if (result.deletedCount > 0) {
      return res.status(200).json({
        response: null,
        message: 'Chapter deleted',
      });
    } else {
      return res.status(400).json({
        response: null,
        message: 'Chapter not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: 'Error deleting Chapter',
    });
  }
};
