import Manga from "../models/Manga.js";

export default async function (req, res, next) {
  try {
    const manga_id = req.params.id;
    const manga = await Manga.findById({
      _id: manga_id,
    });

    const manga_author_id = manga.author_id;
    const author_id = req.author._id;

    if (manga_author_id.equals(author_id)) {
      return next();
    }

    const manga_company_id = manga.company_id;
    const company_id = req.company._id;

    if (manga_company_id.equals(company_id)) {
      return next();
    }

    return res.status(400).json({
      response: null,
      message: "Not authorized",
    });
  } catch (error) {
    return next(error);
  }
}
