import Author from "../../models/Author.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await Author.findOneAndUpdate({ _id: data.id }, data);

    if (result.nModified > 0) {
      let updatedAuthor = await Author.findById(data.id);
      return res.status(200).json({
        response: updatedAuthor,
        message: 'Author updated',
      });
    } else {
      return res.status(400).json({
        response: null,
        message: 'Author not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: 'Error updating Author',
    });
  }
};
