import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  try {
    let author = req.author._id;
    console.log("AUTHOR DE MANGAS:", author);
    const mangasAuthor = await Manga.find({
      author_id: author,
    });

    console.log("mangas:", mangasAuthor.length);

    if (mangasAuthor.length < 8 && mangasAuthor.length > 4) {
      let news = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: -1 })
        .limit(2);

      let olds = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: 1 })
        .limit(2);

      let all = [news, olds];
      console.log("aca fue 1");

      return res.status(200).json({
        success: true,
        response: { all },
        message: "Mangas is Found! ",
      });

      console.log("====================================");
      console.log("====================================");
    } else if (mangasAuthor.length > 8) {
      let news = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: -1 })
        .limit(4);

      let old = await Manga.find({
        author_id: author,
      })
        .sort({ createdAt: 1 })
        .limit(4);

      return res.status(200).json({
        success: true,
        response: { news, old },
        message: "Mangas is Found! ",
      });
    } else {
      let logo =
        "https://www.figma.com/file/odCgVyO7Jniaoft8aFcFBj/Minga---Design?type=design&node-id=2632-3722&mode=design&t=anK4ksvDR2ljr48m-4";
      return res.status(200).json({
        success: true,
        response: { logo },
        message: "Mangas is Found! ",
      });
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    next(error);
  }
};
