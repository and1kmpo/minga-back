import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let data = req.body; // el cliente envía un objeto en la propiedad body del objeto req (requerimientos)
    let result = await User.findOneAndDelete({ _id: data.id });

    if (result.deletedCount > 0) {
      return res.status(200).json({
        response: null,
        message: 'User deleted',
      });
    } else {
      return res.status(400).json({
        response: null,
        message: 'User not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: 'Error deleting User',
    });
  }
};
