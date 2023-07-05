import Company from "../../models/Company.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await Company.findOneAndUpdate({ _id: data.id }, data);

    if (result.nModified > 0) {
      let updatedCompany = await Company.findById(data.id);
      return res.status(200).json({
        response: updatedCompany,
        message: 'Company updated',
      });
    } else {
      return res.status(400).json({
        response: null,
        message: 'Company not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: 'Company error',
    });
  }
};
