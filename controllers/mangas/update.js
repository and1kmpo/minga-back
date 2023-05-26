import Manga from "../../models/Manga.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await Manga.findOneAndUpdate({ _id: data.id }, data);

    if (result.nModified > 0) {
      let updatedManga = await Manga.findById(data.id);
      return res.status(200).json({
        response: updatedManga,
        message: 'Manga updated',
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
      message: 'Manga error',
    });
  }
};
