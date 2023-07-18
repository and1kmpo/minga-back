import Author from "../../models/Author.js";

export default async (req, res, next) => {
  try {
    let consultas = {};
    let ordenamiento = { name: 1 };
    if (req.query.city) {
      consultas.city = new RegExp(req.query.city, "i");
    }

    if (req.query.name) {
      consultas.name = new RegExp(req.query.name, "i");
    }

    if (req.query.sort) {
      ordenamiento.name = req.query.sort;
    }
    let one = await Author.find(consultas, "name _id city")
      .populate("user_id", "email -_id photo role")
      .sort(ordenamiento);

    if (one.length > 0) {
      return res.status(200).json({
        response: one,
        message: "Authors found!",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Authors not found!",
      });
    }
  } catch (error) {
    next(error);
  }
};
