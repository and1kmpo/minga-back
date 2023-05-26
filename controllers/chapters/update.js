import Chapter from "../../models/Chapter.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await Chapter.findOneAndUpdate({ _id: data.id }, data);

    if (result.nModified > 0) {
      let updatedChapter = await Chapter.findById(data.id);
      return res.status(200).json({
        response: updatedChapter,
        message: 'Chapter updated',
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
      message: 'Chapter error',
    });
  }
};
