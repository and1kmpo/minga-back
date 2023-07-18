export default async (req, res, next) => {
  try {
    let profile = {
      user: req.user,
      author: req.author,
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
