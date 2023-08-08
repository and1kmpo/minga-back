export default async (req, res, next) => {
  try {
    const { _id, name, last_name, city, country, photo } = req.author;
    const { id, email, role, online } = req.user;

    let profile = {
      _id,
      name,
      last_name,
      city,
      country,
      photo,
      user: { _id: id, email, role, online },

    };
    return res.status(200).json({
      success: true,
      response: { profile },
      message: "Author Found! ",
    });
  } catch (error) {
    next(error);
  }
};
