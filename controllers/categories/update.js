import Category from "../../models/Category.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await Category.findOneAndUpdate({ _id: data.id }, data);

    if (result.nModified > 0) {
      let updatedCategory = await Category.findById(data.id);
      return res.status(200).json({
        response: updatedCategory,
        message: 'Category updated',
      });
    } else {
      return res.status(400).json({
        response: null,
        message: 'Category not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: 'Category error',
    });
  }
};
