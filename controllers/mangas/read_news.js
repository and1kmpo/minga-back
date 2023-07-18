import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  try {
    let author = req.author;
    let mangasAuthor = await Manga.find({
      author_id: author,
    }).populate("author_id");
    console.log("mangas:", mangasAuthor.length);
console.log(author)
    if (mangasAuthor.length < 4) {
      let logo =
        "https://www.figma.com/file/odCgVyO7Jniaoft8aFcFBj/Minga---Design?type=design&node-id=2632-3722&mode=design&t=anK4ksvDR2ljr48m-4";
      return res.status(200).json({
        success: true,
        response: { logo },
        message: "Mangas is Found! ",
      });
    } else if (mangasAuthor.length < 8) {
      let news = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: 1 })
        .limit(2);

      let olds = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: -1 })
        .limit(2);

      let all = [news, olds];

      return res.status(200).json({
        success: true,
        response: { all },
        message: "Mangas is Found! ",
      });
    } else if (mangasAuthor.length > 8) {
      let news = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: 1 })
        .limit(4);

      let old = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: -1 })
        .limit(4);

      return res.status(200).json({
        success: true,
        response: { news, old },
        message: "Mangas is Found! ",
      });
    }
  } catch (error) {
    next(error);
  }
};
