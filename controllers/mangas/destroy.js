import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  try {
    
    let id = req.params.id;
    let one = await Manga.findByIdAndDelete(id);
    let chapter = await Chapter.deleteMany({ manga_id: id });

    if (one) {
      return res.status(200).json({
        success: true,
        response: null,
        message: "Manga & Chapters deleted successfully",
      });
    } else {
      return res.status(400).json({
        response: null,
        message: "Manga not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
