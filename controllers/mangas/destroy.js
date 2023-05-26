import Manga from "../../models/Manga.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await Manga.findOneAndDelete({ _id: data.id });

    if (result.deletedCount > 0) {
      return res.status(200).json({
        response: null,
        message: 'Manga deleted',
      });
    } else {
      return res.status(400).json({
        response: null,
        message: 'Manga not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: 'Error deleting Manga',
    });
  }
};
